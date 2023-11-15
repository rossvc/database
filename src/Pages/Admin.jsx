import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function AdminPage() {
  const navigate = useNavigate();

  const handleManageEmployees = () => {
    navigate("/manageemployee");
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Admin Dashboard
        </Typography>
        <Box sx={{ "& > :not(style)": { m: 1 } }}>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "#1976d2",
              padding: "10px 36px",
              "&:hover": {
                backgroundColor: "#115293",
              },
            }}
            onClick={handleManageEmployees}
            fullWidth
          >
            Manage Employees
          </Button>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "#2e7d32",
              padding: "10px 36px",
              "&:hover": {
                backgroundColor: "#205723",
              },
            }}
            onClick={() => {
              navigate("/reports"); // Change the route to "/giftshopreport"
            }}
            fullWidth
          >
            Tiicket Sales Report
          </Button>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "#2e7d32",
              padding: "10px 36px",
              "&:hover": {
                backgroundColor: "#205723",
              },
            }}
            onClick={() => {
              navigate("/giftshopreport");
            }}
            fullWidth
          >
            Giftshop Sales Report
          </Button>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "#2e7d32",
              padding: "10px 36px",
              "&:hover": {
                backgroundColor: "#205723",
              },
            }}
            onClick={() => {
              navigate("/totalsalesreport");
            }}
            fullWidth
          >
            Total Sales Report
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
