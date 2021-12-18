import React, { useState, useEffect } from "react";
import {Box,Button,Grid,TextField,FormControl,Radio,RadioGroup,FormControlLabel,Typography} from "@mui/material/";
import registerBackground from "../assets/auth_banner.png";
import "./Page.css";
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../_actions';



function Register() {
  const defaultValues = {
    fullname:"",
    email: "",
    password: "",
    mobile_no:""
  };
  const [msg,setMsg] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [formValues, setFormValues] = useState(defaultValues);
  const dispatch = useDispatch();
  

  useEffect(() => {}, [formValues]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };


  const handleSubmit = (event) => {
    setSubmitted(true);
        if (formValues.fullname && formValues.email && formValues.password && formValues.mobile_no) {
            dispatch(userActions.register(formValues));
        }
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
              backgroundImage: `url(${registerBackground})`,
            }}
            className="auth_page_banner"
          />
        </Grid>
   
        <Grid item xs={12} md={6} mt={12}>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "50ch" },
              marginLeft: "70px",
            }}
            noValidate
            autoComplete="off"
          >
            <h4 className="auth-head">Create New Account</h4>
          
            <TextField
              required
              id="fullname"
              label="Full Name"
              variant="outlined"
              className="field-spacing"
              name="fullname"
              value={formValues.fullname}
              onChange={handleInputChange}
            />

            <TextField
              required
              id="email"
              label="Email"
              variant="outlined"
              className="field-spacing"
              name="email"
              value={formValues.email}
              onChange={handleInputChange}
            />
            <TextField
              required
              id="mobile"
              label="Mobile Number"
              variant="outlined"
              className="field-spacing"
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              value={formValues.mobile}
              name="mobile_no"
              onChange={handleInputChange}
            />
            <TextField
              required
              id="password"
              label="Password"
              variant="outlined"
              type="password"
              className="field-spacing"
              value={formValues.password}
              onChange={handleInputChange}
              name="password"
            />
             <Grid item xs={12} md={6} mt={4} ml={2}>
            <Typography variant="string">
              By Registration you accept TnC
            </Typography>
            </Grid>
            <Button variant="contained" className="auth-btn" onClick={handleSubmit}>
              Register
            </Button>
          </Box>
        </Grid>

      </Grid>
    </Box>
  );
}

export default Register;
