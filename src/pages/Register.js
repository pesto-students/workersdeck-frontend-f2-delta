import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import registerBackground from "../assets/auth_banner.png";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";

import Header from "../components/Header/Header";
import "./Page.css";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

function Register() {
  const defaultValues = {
    email: "",
    password: ""
  };
  const [formValues, setFormValues] = useState(defaultValues);

  useEffect(() => {}, [formValues]);

  const handleInputChange = (e) => {
    const { email, password } = e.target;
    setFormValues({
      ...formValues,
      [email]: email,
      [password]: password
    });
  };

  const [selectedValue, setSelectedValue] = React.useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
        <Box
      style={{
        height: 680,
        width: 720,
        maxHeight: { xs: 233, md: 680 },
        maxWidth: { xs: 408, md: 720 },
        backgroundSize: "cover",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(45, 45, 45, 0.55)",
        backgroundImage: `url(${registerBackground})`
      }}
      className="auth_page_banner"
    />
        </Grid>

        <Grid item xs={12} md={6} mt={12}>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "50ch" },
              marginLeft: "70px"
            }}
            noValidate
            autoComplete="off"
          >
            <h4 className="auth-head">Create New Account</h4>
            <TextField
              required
              id="email"
              label="Full Name"
              variant="outlined"
              className="field-spacing"
            />

            <TextField
              required
              id="email"
              label="Email"
              variant="outlined"
              className="field-spacing"
            />
            <TextField
              required
              id="mobile"
              label="Mobile Number"
              variant="outlined"
              className="field-spacing"
            />
            <TextField
              required
              id="password"
              label="Password"
              variant="outlined"
              type="password"
              className="field-spacing"
            />
            <Grid item xs={12} md={12} mt={12}>
              <RadioGroup
                row
                aria-label="position"
                name="position"
                defaultValue="top"
                sx={{
                  marginLeft: "20px"
                }}
              >
                <FormControlLabel
                  value="end"
                  control={<Radio />}
                  label="I agree and accept TnC"
                  sx={{
                    fontSize: "16px"
                  }}
                />
              </RadioGroup>
            </Grid>
            <Button variant="contained" className="auth-btn">
              Register
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Register;
