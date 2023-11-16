import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Bar } from "react-chartjs-2";

const baseURL = "https://ross.fail:3001/";

export default function ReportPage() {
  const [dateRange, setDateRange] = useState("today");
  const [customDateRange, setCustomDateRange] = useState({ from: "", to: "" });
  const [reportData, setReportData] = useState([]);
  const [totalPurchaseAmount, setTotalPurchaseAmount] = useState(0);
  const [displayTable, setDisplayTable] = useState(true);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Purchase Amount",
        data: [],
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  });

  const handleDateRangeChange = (event) => {
    setDateRange(event.target.value);
  };

  const handleCustomDateChange = (field) => (event) => {
    setCustomDateRange({ ...customDateRange, [field]: event.target.value });
  };

  const toggleView = () => {
    setDisplayTable(!displayTable);
  };

  const generateReport = () => {
    fetchReportData();
  };

  const fetchReportData = async () => {
    try {
      let endpoint = "api/ticketsales";

      let requestURL = baseURL + endpoint;

      const response = await fetch(requestURL);
      const data = await response.json();
      const filteredData = data.data.filter((item) => {
        const purchaseDate = new Date(item.PurchaseDate);
        const today = new Date();
        switch (dateRange) {
          case "today":
            return (
              purchaseDate.toISOString().split("T")[0] ===
              today.toISOString().split("T")[0]
            );
          case "thisWeek":
            const sunday = new Date(today);
            sunday.setDate(today.getDate() - today.getDay());
            return purchaseDate >= sunday;
          case "lastWeek":
            const lastSunday = new Date(today);
            lastSunday.setDate(today.getDate() - today.getDay() - 7);
            const lastSaturday = new Date(today);
            lastSaturday.setDate(today.getDate() - today.getDay() - 1);
            return purchaseDate >= lastSunday && purchaseDate <= lastSaturday;
          case "lastMonth":
            const lastMonth = new Date(today);
            lastMonth.setMonth(today.getMonth() - 1);
            return purchaseDate >= lastMonth;
          case "lastQuarter":
            const lastQuarter = new Date(today);
            lastQuarter.setMonth(today.getMonth() - 3);
            return purchaseDate >= lastQuarter;
          case "thisYear":
            const thisYearStart = new Date(today);
            thisYearStart.setFullYear(today.getFullYear(), 0, 1);
            const thisYearEnd = new Date(today);
            thisYearEnd.setFullYear(today.getFullYear(), 11, 31);
            return purchaseDate >= thisYearStart && purchaseDate <= thisYearEnd;
          case "lastYear":
            const lastYearStart = new Date(today);
            lastYearStart.setFullYear(today.getFullYear() - 1, 0, 1);
            const lastYearEnd = new Date(today);
            lastYearEnd.setFullYear(today.getFullYear() - 1, 11, 31);
            return purchaseDate >= lastYearStart && purchaseDate <= lastYearEnd;
          case "allTime":
            return true;
          case "custom":
            const customFromDate = new Date(customDateRange.from);
            const customToDate = new Date(customDateRange.to);
            return (
              purchaseDate >= customFromDate && purchaseDate <= customToDate
            );
          default:
            return true;
        }
      });

      const totalAmount = filteredData.reduce((total, item) => {
        return total + parseFloat(item.PurchaseAmount);
      }, 0);

      setReportData(filteredData);
      setTotalPurchaseAmount(totalAmount);

      // Update chart data
      const chartLabels = [];
      const chartDataPoints = [];

      filteredData.forEach((item) => {
        chartLabels.push(item.PurchaseDate.substring(0, 10));
        chartDataPoints.push(parseFloat(item.PurchaseAmount));
      });

      setChartData({
        labels: chartLabels,
        datasets: [
          {
            label: "Purchase Amount",
            data: chartDataPoints,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)",
            borderWidth: 1,
          },
        ],
      });
    } catch (error) {
      console.error("Error fetching report:", error);
    }
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ bgcolor: "background.paper", pt: 12, pb: 6 }}></Box>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Generate Ticket Sales Report
        </Typography>

        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel id="date-range-label">Date Range</InputLabel>
          <Select
            labelId="date-range-label"
            id="date-range"
            value={dateRange}
            label="Date Range"
            onChange={handleDateRangeChange}
          >
            <MenuItem value="today">Today</MenuItem>
            <MenuItem value="thisWeek">This Week</MenuItem>
            <MenuItem value="lastWeek">Last Week</MenuItem>
            <MenuItem value="lastMonth">Last Month</MenuItem>
            <MenuItem value="lastQuarter">Last Quarter</MenuItem>
            <MenuItem value="thisYear">This Year</MenuItem>
            <MenuItem value="lastYear">Last Year</MenuItem>
            <MenuItem value="allTime">All Time</MenuItem>
            <MenuItem value="custom">Custom</MenuItem>
          </Select>
        </FormControl>

        {dateRange === "custom" && (
          <Box sx={{ mt: 2, display: "flex", gap: 2 }}>
            <TextField
              label="From"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={customDateRange.from}
              onChange={handleCustomDateChange("from")}
            />
            <TextField
              label="To"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={customDateRange.to}
              onChange={handleCustomDateChange("to")}
            />
          </Box>
        )}

        <Button variant="contained" sx={{ mt: 3 }} onClick={generateReport}>
          Generate Report
        </Button>

        {displayTable ? (
          <>
            {reportData.length > 0 && (
              <Box sx={{ mt: 4 }}>
                <Typography variant="h6" gutterBottom>
                  Sales Report
                </Typography>
                <TableContainer sx={{ overflowX: "auto" }}>
                  <Table sx={{ minWidth: 800 }}>
                    <TableHead>
                      <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Customer Name</TableCell>
                        <TableCell>Employee Name</TableCell>
                        <TableCell>Purchase Amount</TableCell>
                        <TableCell>Ticket Payment Method</TableCell>
                        <TableCell>Ticket ID</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {reportData.map((item) => (
                        <TableRow key={item.TicketID}>
                          <TableCell>
                            {item.PurchaseDate.substring(0, 10)}
                          </TableCell>
                          <TableCell>
                            {item.CustomerFirstName +
                              " " +
                              item.CustomerLastName}
                          </TableCell>
                          <TableCell>
                            {item.EmployeeFirstName +
                              " " +
                              item.EmployeeFirstName}
                          </TableCell>
                          <TableCell>{item.PurchaseAmount}</TableCell>
                          <TableCell>{item.TicketPaymentMethod}</TableCell>
                          <TableCell>{item.TicketID}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            )}
          </>
        ) : (
          <Box sx={{ mt: 4 }}>
            {reportData.length > 0 && (
              <>
                <Typography variant="h6" gutterBottom>
                  Sales Chart
                </Typography>
                <Bar
                  data={chartData}
                  options={{
                    scales: {
                      y: {
                        beginAtZero: true,
                      },
                    },
                  }}
                />
              </>
            )}
          </Box>
        )}

        <Box sx={{ mt: 2 }}>
          <Typography variant="h6" gutterBottom>
            Total Purchase Amount: ${totalPurchaseAmount.toFixed(2)}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
