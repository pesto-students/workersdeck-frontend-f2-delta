import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import registerBackground from "../assets/auth_banner.png";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import "./Page.css";
import Button from "@mui/material/Button";

function Login() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: ""
  });

  useEffect(() => {
    console.log(formValues.email);
  }, [formValues]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const formSubmit = (e) => {
    console.log(formValues.email);
    e.preventDefault();
    console.log("ok");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
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
            <h4 className="auth-head">Welcome Guest</h4>
            <form noValidate autocomplete="off">
              <TextField
                required
                onChange={onChange}
                id="email"
                label="Email"
                variant="outlined"
                className="field-spacing"
                fullWidth
                value={formValues.email}
                name="email"
              />
              <TextField
                required
                id="password"
                label="Password"
                variant="outlined"
                type="password"
                className="field-spacing"
                fullWidth
                onChange={onChange}
                value={formValues.password}
                name="password"
              />

              <Typography
                variant="string"
                align="center"
                className="field-spacing"
              >
                Forget Password?
              </Typography>

              <Button
                variant="contained"
                className="auth-btn"
                type="button"
                onClick={formSubmit}
              >
                Login
              </Button>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Login;
