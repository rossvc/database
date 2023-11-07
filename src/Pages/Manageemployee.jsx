import React, { useState, useEffect } from "react";   
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export default function AdminPage() {
  const [employees, setEmployees] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newEmployee, setNewEmployee] = useState({
    FirstName: "",
    LastName: "",
    PhoneNumber: "",
    Wage: 0,
    DateHired: "",
    Position: "",
    Email: "",
    Username: "",
    Password: "",
  });
  const [errors, setErrors] = useState({
    FirstName: "",
    LastName: "",
    PhoneNumber: "",
    Wage: "",
    DateHired: "",
    Position: "",
    Email: "",
    Username: "",
    Password: "",
  });

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = () => {
    fetch("/api/employees")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setEmployees(data.data);
      })
      .catch((error) => {
        console.error("Failed to fetch employees", error);
      });
  };
  const toggleAddForm = () => {
    setShowAddForm(!showAddForm);
    setNewEmployee({
      FirstName: "",
      LastName: "",
      PhoneNumber: "",
      Wage: 0,
      DateHired: "",
      Position: "",
      Email: "",
      Username: "",
      Password: "",
    });
    setErrors({
      FirstName: "",
      LastName: "",
      PhoneNumber: "",
      Wage: "",
      DateHired: "",
      Position: "",
      Email: "",
      Username: "",
      Password: "",
    });
  };

  const validateForm = () => {
    let valid = true;
    const updatedErrors = {
      FirstName: "",
      LastName: "",
      PhoneNumber: "",
      Wage: "",
      DateHired: "",
      Position: "",
      Email: "",
      Username: "",
      Password: "",
    };

    if (newEmployee.FirstName.trim() === "") {
      updatedErrors.FirstName = "First Name is required.";
      valid = false;
    }
    if (newEmployee.LastName.trim() === "") {
      updatedErrors.LastName = "Last Name is required.";
      valid = false;
    }
    if (newEmployee.Email.trim() === "") {
      updatedErrors.Email = "Email is required.";
      valid = false;
    } else {
      const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
      if (!emailRegex.test(newEmployee.Email.trim())) {
        updatedErrors.Email = "Email format is invalid.";
        valid = false;
      }
    }
    if (newEmployee.Password.trim() === "") {
      updatedErrors.Password = "Password is required.";
      valid = false;
    }
    if (newEmployee.PhoneNumber.trim() === "") {
      updatedErrors.PhoneNumber = "Phone Number is required.";
      valid = false;
    } else {
      // Format for mobile numbers: XXX-XXX-XXXX
      const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
      if (!phoneRegex.test(newEmployee.PhoneNumber.trim())) {
        updatedErrors.PhoneNumber =
          "Phone Number format is invalid (e.g., 123-456-7890).";
        valid = false;
      }
    }
    if (newEmployee.DateHired.trim() === "") {
      updatedErrors.DateHired = "Date Hired is required.";
      valid = false;
    }
    if (newEmployee.Position.trim() === "") {
      updatedErrors.Position = "Position is required.";
      valid = false;
    }
    if (newEmployee.Username.trim() === "") {
      updatedErrors.Username = "Username is required.";
      valid = false;
    }

    setErrors(updatedErrors);
    return valid;
  };

  const addEmployee = () => {
    if (validateForm()) {
      fetch("/api/employees", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEmployee),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else if (response.status === 409) {
            throw new Error("Employee already exists");
          } else {
            throw new Error("Failed to add employee");
          }
        })
        .then((data) => {
          fetchEmployees();
          toggleAddForm();
        })
        .catch((error) => {
          console.error(error.message);
          setErrors((prevErrors) => ({ ...prevErrors, Email: error.message }));
        });
    }
  };

  const updateEmployee = (employeeToUpdate) => {
    fetch(`/api/employees/${employeeToUpdate.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employeeToUpdate),
    })
      .then((response) => {
        if (response.ok) {
          fetchEmployees();
        } else if (response.status === 404) {
          throw new Error("Employee not found");
        } else {
          throw new Error("Failed to update employee");
        }
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const removeEmployee = (employeeToRemove) => {
    fetch(`/api/employees/${employeeToRemove.id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          fetchEmployees();
        } else if (response.status === 404) {
          throw new Error("Employee not found");
        } else {
          throw new Error("Failed to remove employee");
        }
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <main>
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 12,
          pb: 6,
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" align="center" color="primary" gutterBottom>
            Employee Management
          </Typography>

          <Button
            variant="contained"
            color="primary"
            onClick={toggleAddForm}
            style={{ marginBottom: "1rem" }}
          >
            {showAddForm ? "Cancel" : "Add Employee"}
          </Button>

          {showAddForm && (
            <>
              <div style={{ marginBottom: "1rem" }}>
                <TextField
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  value={newEmployee.FirstName}
                  onChange={(e) =>
                    setNewEmployee({
                      ...newEmployee,
                      FirstName: e.target.value,
                    })
                  }
                  error={!!errors.FirstName}
                  helperText={errors.FirstName}
                  required
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <TextField
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  value={newEmployee.LastName}
                  onChange={(e) =>
                    setNewEmployee({
                      ...newEmployee,
                      LastName: e.target.value,
                    })
                  }
                  error={!!errors.LastName}
                  helperText={errors.LastName}
                  required
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  value={newEmployee.Email}
                  onChange={(e) =>
                    setNewEmployee({
                      ...newEmployee,
                      Email: e.target.value,
                    })
                  }
                  error={!!errors.Email}
                  helperText={errors.Email}
                  required
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <TextField
                  label="Password"
                  variant="outlined"
                  fullWidth
                  type="password"
                  value={newEmployee.Password}
                  onChange={(e) =>
                    setNewEmployee({
                      ...newEmployee,
                      Password: e.target.value,
                    })
                  }
                  error={!!errors.Password}
                  helperText={errors.Password}
                  required
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <TextField
                  label="Phone Number"
                  variant="outlined"
                  fullWidth
                  value={newEmployee.PhoneNumber}
                  onChange={(e) =>
                    setNewEmployee({
                      ...newEmployee,
                      PhoneNumber: e.target.value,
                    })
                  }
                  error={!!errors.PhoneNumber}
                  helperText={errors.PhoneNumber}
                  required
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <TextField
                  label="Date Hired"
                  variant="outlined"
                  fullWidth
                  value={newEmployee.DateHired}
                  onChange={(e) =>
                    setNewEmployee({
                      ...newEmployee,
                      DateHired: e.target.value,
                    })
                  }
                  error={!!errors.DateHired}
                  helperText={errors.DateHired}
                  required
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <TextField
                  label="Position"
                  variant="outlined"
                  fullWidth
                  value={newEmployee.Position}
                  onChange={(e) =>
                    setNewEmployee({
                      ...newEmployee,
                      Position: e.target.value,
                    })
                  }
                  error={!!errors.Position}
                  helperText={errors.Position}
                  required
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <TextField
                  label="Username"
                  variant="outlined"
                  fullWidth
                  value={newEmployee.Username}
                  onChange={(e) =>
                    setNewEmployee({
                      ...newEmployee,
                      Username: e.target.value,
                    })
                  }
                  error={!!errors.Username}
                  helperText={errors.Username}
                  required
                />
              </div>
              <Button
                variant="contained"
                color="primary"
                onClick={addEmployee}
                style={{ marginBottom: "1rem" }}
              >
                Submit
              </Button>
            </>
          )}

          <List>
            {employees.map((employee, index) => (
              <ListItem key={index} divider>
                <ListItemText
                  primary={`${employee.FirstName} ${employee.LastName}`}
                  secondary={`${employee.Email}`}
                />
                <IconButton
                  onClick={() => removeEmployee(employee)}
                  color="secondary"
                >
                  <DeleteIcon />
                </IconButton>
              </ListItem>
            ))}
          </List>
        </Container>
      </Box>
    </main>
  );
}
