import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";

function LandingPage() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Success, setSuccess] = useState(false);

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };

  const submitHandler = () => {
    const body = {
      name: Name,
      email: Email,
      phoneNumber: PhoneNumber,
    };

    axios.post("/api/submit", body).then((response) => {
      if (response.data.success) {
        // alert("Thank you!");
        setSuccess(true);
        console.log("Submitted!");
      } else {
        alert("Failed to submit...");
      }
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "22ch" },
        }}
        noValidate
        autoComplete="off"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <br />
        <p>
          <b>COVID GUEST SIGN IN</b>
        </p>
        <p>Please mention your name and contact information.</p>

        <br />
        <TextField
          id="name"
          label="Full Name"
          variant="outlined"
          size="medium"
          value={Name}
          onChange={handleName}
        />
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          size="medium"
          value={Email}
          onChange={handleEmail}
        />
        <TextField
          id="phoneNumber"
          label="Phone Number"
          variant="outlined"
          size="medium"
          value={PhoneNumber}
          onChange={handlePhoneNumber}
        />
        <br />
        {Success === false ? (
          <Button variant="contained" onClick={submitHandler}>
            Submit
          </Button>
        ) : (
          <Button variant="contained" color="success">
            Thank You!
          </Button>
        )}
      </Box>
    </div>
  );
}

export default LandingPage;
