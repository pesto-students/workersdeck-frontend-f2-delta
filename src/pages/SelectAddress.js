import React, { useState, useEffect } from "react";
import {
	Box,
	Grid,
	Button,
  Container,
  Typography,
  FormControl,
  Radio,
  FormControlLabel
} from "@mui/material";
import { Link } from "react-router-dom";
import "./Page.css";

const style = {
  maxWidth: 360
};

function SelectAddress() {

  const initAddressVal = {
    uid:'',
    type:'',
    address:'',
    pincode:''
  }


  const [address,setAddress] = useState(initAddressVal);
  const [addressId,setAddressId] = useState(0);

  function handleClick(e) {
    setAddressId(e.target.value);
    console.log(addressId);
  }

  useEffect(() => {
    console.log("run api here ")
  }, []);

  return (
    
    <>
    <Grid item container>
    <Grid item xs={12} md={12} mt={2}>
      {/* Page Title */}
    <Box xs={12} md={12} mb={2}>
          <h4 className="address-head" sx={style}>
           SELECT ADDRESS
          </h4>
    </Box>
    {/* Page Title End */}
    </Grid>
    
    <Grid item xs={12} md={12} mt={1}>
    <hr className="divider"></hr>
    <Container maxWidth="xl" p={2}>
      {/* Address box here */}
    <Box component="span" sx={{ p: 2}}>
    <Grid item xs={12} md={12} ml={3}>
    <FormControl component="fieldset">
    <FormControlLabel value="11" control={<Radio />} label="Home"  onClick={handleClick}/>
    </FormControl>
    <Typography ml={4} component="h3" className={'address-text'}>123 Main Street</Typography>
    </Grid>
    </Box>
    <hr className="divider"></hr>
    {/* Address box end here */}
    
    <Box component="span" sx={{ p: 4}}>
    <Link to="/new-address">
    <Typography ml={4} component="h3" className={'wd-address-new-text'}>+ ADD NEW ADDRESS</Typography>
    </Link>
    </Box>
    
    <Box component="span" sx={{ p: 4}} textAlign='center'>
    <Grid item xs={12} md={12} mt={3}>
    <Button variant="contained" className={"wd-checkout-btn"}>Continue with this address</Button>
    </Grid>
    </Box>
    </Container>
    </Grid>
    </Grid>
      
    </>
  );
}

export default SelectAddress;
