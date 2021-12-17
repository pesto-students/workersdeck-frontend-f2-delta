import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import registerBackground from "../assets/auth_banner.png";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import "./Page.css";
import Button from "@mui/material/Button";
import { userActions } from "../_actions";

function Login() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const { email, password } = inputs;
  const dispatch = useDispatch();
  const location = useLocation();
  const loggingIn = useSelector((state) => state.authentication.loggingIn);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    if (email && password) {
      // get return url from location state or default to home page
      const { from } = location.state || { from: { pathname: "/" } };
      dispatch(userActions.login(email, password, from));
    }
  };

  return (
    <>
      <Grid item container>
        <Grid sm={12} xs={12} md={6} lg={6} item>
          <Box
            style={{
              height: 680,
              width: 720,
              maxHeight: { xs: 233, md: 680 },
              maxWidth: { xs: 408, md: 720 },
              backgroundSize: "cover",
              backgroundBlendMode: "overlay",
              backgroundColor: "rgba(45, 45, 45, 0.55)",
              backgroundImage: `url(${registerBackground})`,
            }}
            className="auth_page_banner"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} mt={12}>
          <Box
            sx={{
              "& > :not(style)": { m: 1, width: "50ch" },
              marginLeft: "70px",
            }}
            noValidate
            autoComplete="off"
            xs={12}
          >
            <h4 className="auth-head">Welcome Guest</h4>
            <form onSubmit={handleSubmit}>
              <TextField
                required
                onChange={handleChange}
                id="email"
                label="Email"
                variant="outlined"
                className="field-spacing"
                fullWidth
                value={email}
                name="email"
                error={submitted && !email && true}
              />
              <TextField
                required
                id="password"
                label="Password"
                variant="outlined"
                type="password"
                className="field-spacing"
                fullWidth
                onChange={handleChange}
                value={password}
                name="password"
                error={submitted && !password && true}
              />

              <Typography
                variant="string"
                align="center"
                className="field-spacing"
              >
                Forget Password?
              </Typography>

              <Button variant="contained" className="auth-btn" type="submit">
                Login
              </Button>
            </form>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Login;
