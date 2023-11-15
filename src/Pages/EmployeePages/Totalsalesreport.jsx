import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";

const baseURL = "https://ross.fail:3001/";

export default function CombinedSalesReportPage() {
  const [dateRange, setDateRange] = useState("today");
  const [customDateRange, setCustomDateRange] = useState({ from: "", to: "" });
  const [tableData, setTableData] = useState([]);

  const handleDateRangeChange = (event) => {
    setDateRange(event.target.value);
  };

  const handleCustomDateChange = (field) => (event) => {
    setCustomDateRange({ ...customDateRange, [field]: event.target.value });
  };

  const generateReport = () => {
    fetchReportData();
  };

  const fetchReportData = async () => {
    try {
      const giftShopEndpoint = "api/giftshopsales";
      const ticketEndpoint = "api/ticketsales";
      const giftShopRequestURL = baseURL + giftShopEndpoint;
      const ticketRequestURL = baseURL + ticketEndpoint;

      const [giftShopResponse, ticketResponse] = await Promise.all([
        fetch(giftShopRequestURL),
        fetch(ticketRequestURL),
      ]);

      const [giftShopData, ticketData] = await Promise.all([
        giftShopResponse.json(),
        ticketResponse.json(),
      ]);

      const combinedData = {};

      giftShopData.data.forEach((giftShopSale) => {
        const saleDate = giftShopSale.SaleDate.split("T")[0];
        const amount = parseFloat(giftShopSale.SaleAmount);
        if (!combinedData[saleDate]) {
          combinedData[saleDate] = amount;
        } else {
          combinedData[saleDate] += amount;
        }
      });

      ticketData.data.forEach((ticketSale) => {
        const purchaseDate = ticketSale.PurchaseDate.split("T")[0];
        const amount = parseFloat(ticketSale.PurchaseAmount);
        if (!combinedData[purchaseDate]) {
          combinedData[purchaseDate] = amount;
        } else {
          combinedData[purchaseDate] += amount;
        }
      });

      let filteredData = Object.entries(combinedData).map(([date, amount]) => ({
        date,
        amount,
      }));

      // Apply date range filter
      if (dateRange !== "allTime") {
        const today = new Date();
        const fromDate = new Date(customDateRange.from);
        const toDate = new Date(customDateRange.to);

        if (dateRange === "today") {
          filteredData = filteredData.filter(
            (item) => item.date === today.toISOString().split("T")[0]
          );
        } else if (dateRange === "thisWeek") {
          const sunday = new Date(today);
          sunday.setDate(today.getDate() - today.getDay());
          filteredData = filteredData.filter(
            (item) => new Date(item.date) >= sunday
          );
        } else if (dateRange === "lastWeek") {
          const lastSunday = new Date(today);
          lastSunday.setDate(today.getDate() - today.getDay() - 7);
          const lastSaturday = new Date(today);
          lastSaturday.setDate(today.getDate() - today.getDay() - 1);
          filteredData = filteredData.filter(
            (item) =>
              new Date(item.date) >= lastSunday &&
              new Date(item.date) <= lastSaturday
          );
        } else if (dateRange === "lastMonth") {
          const lastMonth = new Date(today);
          lastMonth.setMonth(today.getMonth() - 1);
          filteredData = filteredData.filter(
            (item) => new Date(item.date) >= lastMonth
          );
        } else if (dateRange === "lastQuarter") {
          const lastQuarter = new Date(today);
          lastQuarter.setMonth(today.getMonth() - 3);
          filteredData = filteredData.filter(
            (item) => new Date(item.date) >= lastQuarter
          );
        } else if (dateRange === "thisYear") {
          const thisYearStart = new Date(today.getFullYear(), 0, 1);
          const thisYearEnd = new Date(today.getFullYear(), 11, 31);

          filteredData = filteredData.filter(
            (item) =>
              new Date(item.date).getFullYear() === today.getFullYear() &&
              new Date(item.date) >= thisYearStart &&
              new Date(item.date) <= thisYearEnd
          );
        } else if (dateRange === "lastYear") {
          const lastYearStart = new Date(today);
          lastYearStart.setFullYear(today.getFullYear() - 1, 0, 1);
          const lastYearEnd = new Date(today);
          lastYearEnd.setFullYear(today.getFullYear() - 1, 11, 31);
          filteredData = filteredData.filter(
            (item) =>
              new Date(item.date) >= lastYearStart &&
              new Date(item.date) <= lastYearEnd
          );
        } else if (dateRange === "custom") {
          filteredData = filteredData.filter(
            (item) =>
              new Date(item.date) >= fromDate && new Date(item.date) <= toDate
          );
        }
      }

      setTableData(filteredData);
    } catch (error) {
      console.error("Error fetching report:", error);
    }
  };

  useEffect(() => {
    fetchReportData();
  }, [dateRange, customDateRange]);

  return (
    <Container maxWidth="lg">
      <Box sx={{ bgcolor: "background.paper", pt: 12, pb: 6 }}></Box>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Generate Combined Sales Report
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

        {tableData.length > 0 && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" gutterBottom>
              Combined Sales Report (Table)
            </Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Purchase Amount</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tableData.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>{row.date}</TableCell>
                      <TableCell>{row.amount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        )}
      </Box>
    </Container>
  );
}
