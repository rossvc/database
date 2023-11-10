import React, { useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { Bar } from "react-chartjs-2";

export default function ReportPage() {
  const [reportType, setReportType] = useState("totalSales"); // 'totalSales' as the default
  const [dateRange, setDateRange] = useState("today");
  const [customDateRange, setCustomDateRange] = useState({ from: "", to: "" });
  const [reportData, setReportData] = useState({
    labels: [],
    datasets: [
      {
        label: "Sales Amount",
        data: [],
        backgroundColor: "rgba(0, 123, 255, 0.5)",
      },
    ],
  });

  const handleReportTypeChange = (event) => {
    setReportType(event.target.value);
  };

  const handleDateRangeChange = (event) => {
    setDateRange(event.target.value);
  };

  const handleCustomDateChange = (field) => (event) => {
    setCustomDateRange({ ...customDateRange, [field]: event.target.value });
  };

  const generateReport = async () => {
    try {
      const response = await axios.post("/api/reports", {
        reportType,
        dateRange,
        customDates: dateRange === "custom" ? customDateRange : undefined,
      });

      const chartLabels = response.data.map((item) => item.date);
      const chartData = response.data.map((item) => item.sale_amount);

      setReportData({
        labels: chartLabels,
        datasets: [
          {
            label: "Sales Amount",
            data: chartData,
            backgroundColor: "rgba(0, 123, 255, 0.5)",
          },
        ],
      });
    } catch (error) {
      console.error("Error fetching report:", error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ bgcolor: "background.paper", pt: 12, pb: 6 }}></Box>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Generate Sales Report
        </Typography>
        <FormControl fullWidth>
          <InputLabel id="report-type-label">Report Type</InputLabel>
          <Select
            labelId="report-type-label"
            id="report-type"
            value={reportType}
            label="Report Type"
            onChange={handleReportTypeChange}
          >
            <MenuItem value="totalSales">Total Sales</MenuItem>
            <MenuItem value="ticketSales">Ticket Sales</MenuItem>
            <MenuItem value="giftshopSales">Giftshop Sales</MenuItem>
          </Select>
        </FormControl>

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

        {reportData.labels.length > 0 && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" gutterBottom>
              Sales Graph
            </Typography>
            <Bar
              data={reportData}
              options={{
                scales: {
                  y: {
                    beginAtZero: true,
                  },
                },
                responsive: true,
                maintainAspectRatio: false,
              }}
            />
          </Box>
        )}
      </Box>
    </Container>
  );
}
