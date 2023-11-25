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
import { groupBy } from "lodash";

const baseURL = "https://ross.fail:3001/";

function formatDate(isoDateString) {
  const date = new Date(isoDateString);
  const mm = String(date.getMonth() + 1).padStart(2, "0"); // Months start at 0!
  const dd = String(date.getDate()).padStart(2, "0");
  const yy = date.getFullYear().toString().substr(-2);
  return `${mm}/${dd}/${yy}`;
}

export default function SupplierReportPage() {
  const [expandedSupplier, setExpandedSupplier] = useState(null);
  const [dateRange, setDateRange] = useState("today");
  const [customDateRange, setCustomDateRange] = useState({ from: "", to: "" });
  const [supplierData, setSupplierData] = useState([]);

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
      const supplierReportEndpoint = "api/artistreport";
      const supplierReportRequestURL = new URL(
        baseURL + supplierReportEndpoint
      );

      // Create an object to hold the query parameters
      const queryParams = {};

      // Set the query parameters based on the selected date range
      if (dateRange === "custom") {
        // Use custom date range if selected
        queryParams.startDate = customDateRange.from;
        queryParams.endDate = customDateRange.to;
      } else {
        // Calculate start and end dates for other date ranges
        const today = new Date();
        switch (dateRange) {
          case "today":
            queryParams.startDate = today.toISOString().split("T")[0];
            queryParams.endDate = today.toISOString().split("T")[0];
            break;
          case "thisWeek":
            const firstDayOfWeek = new Date(today);
            firstDayOfWeek.setDate(today.getDate() - today.getDay());
            queryParams.startDate = firstDayOfWeek.toISOString().split("T")[0];
            queryParams.endDate = today.toISOString().split("T")[0];
            break;
          case "lastWeek":
            const lastWeekStart = new Date(today);
            lastWeekStart.setDate(today.getDate() - today.getDay() - 6);
            const lastWeekEnd = new Date(today);
            lastWeekEnd.setDate(today.getDate() - today.getDay() - 1);
            queryParams.startDate = lastWeekStart.toISOString().split("T")[0];
            queryParams.endDate = lastWeekEnd.toISOString().split("T")[0];
            break;
          case "lastMonth":
            const lastMonthStart = new Date(today);
            lastMonthStart.setMonth(today.getMonth() - 1);
            lastMonthStart.setDate(1);
            const lastMonthEnd = new Date(today);
            lastMonthEnd.setDate(0); // Last day of the previous month
            queryParams.startDate = lastMonthStart.toISOString().split("T")[0];
            queryParams.endDate = lastMonthEnd.toISOString().split("T")[0];
            break;
          case "lastQuarter":
            // Calculate the start and end dates for the last quarter
            // You can define the logic based on your requirements
            break;
          case "thisYear":
            const thisYearStart = new Date(today);
            thisYearStart.setMonth(0, 1);
            queryParams.startDate = thisYearStart.toISOString().split("T")[0];
            queryParams.endDate = today.toISOString().split("T")[0];
            break;
          case "lastYear":
            const lastYearStart = new Date(today);
            lastYearStart.setFullYear(today.getFullYear() - 1, 0, 1);
            const lastYearEnd = new Date(today);
            lastYearEnd.setFullYear(today.getFullYear() - 1, 11, 31);
            queryParams.startDate = lastYearStart.toISOString().split("T")[0];
            queryParams.endDate = lastYearEnd.toISOString().split("T")[0];
            break;
          case "allTime":
            queryParams.startDate = "1950-01-01";
            queryParams.endDate = "3000-12-31";
            break;
          default:
            // Handle unknown date range or provide a default behavior
            break;
        }
      }

      // Add the query parameters to the URL
      supplierReportRequestURL.search = new URLSearchParams(
        queryParams
      ).toString();

      const response = await fetch(supplierReportRequestURL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      setSupplierData(data.data);
    } catch (error) {
      console.error("Error fetching supplier report:", error);
    }
  };
  const toggleSupplierTable = (supplierName) => {
    setExpandedSupplier(
      expandedSupplier === supplierName ? null : supplierName
    );
  };
  useEffect(() => {
    fetchReportData();
  }, [dateRange, customDateRange]);

  const groupedBySupplier = groupBy(supplierData, "SupplierName");

  return (
    <Container maxWidth="lg">
      <Box sx={{ bgcolor: "background.paper", pt: 12, pb: 6 }}></Box>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Generate Supplier Report
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
        <Button
          variant="contained"
          sx={{ mt: 3, mb: 5 }} // Increased bottom margin
          onClick={generateReport}
        >
          Generate Report
        </Button>

        {Object.entries(groupedBySupplier).length > 0 ? (
          Object.entries(groupedBySupplier).map(
            ([supplierName, artworks], index) => (
              <div key={index} style={{ marginBottom: "20px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "#f0f0f0",
                    padding: "10px",
                    borderRadius: "5px",
                    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
                    cursor: "pointer",
                    transition: "background-color 0.3s",
                  }}
                  onClick={() => toggleSupplierTable(supplierName)}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor = "#e0e0e0")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor = "#f0f0f0")
                  }
                >
                  <Typography variant="h6" gutterBottom>
                    {supplierName}
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    {artworks[0].SupplierContactInfo}{" "}
                    {/* Assuming the contact info is in the artworks array */}
                  </Typography>
                </div>
                {expandedSupplier === supplierName && (
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Artwork Title</TableCell>
                          <TableCell>Artwork Location</TableCell>
                          <TableCell>Exhibition Name</TableCell>
                          <TableCell>Collection Name</TableCell>
                          <TableCell>Acquisition Date</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {artworks.map((artwork, artworkIndex) => (
                          <TableRow key={artworkIndex}>
                            <TableCell>{artwork.ArtworkTitle}</TableCell>
                            <TableCell>{artwork.ArtworkLocation}</TableCell>
                            <TableCell>{artwork.ExhibitionName}</TableCell>
                            <TableCell>{artwork.CollectionName}</TableCell>
                            <TableCell>
                              {formatDate(artwork.AcquisitionDate)}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                )}
              </div>
            )
          )
        ) : (
          <Typography variant="h6" gutterBottom>
            No supplier data for this date range
          </Typography>
        )}
      </Box>
    </Container>
  );
}
