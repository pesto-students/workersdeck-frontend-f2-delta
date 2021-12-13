import React, { useState, useEffect } from "react";
import {
	Box,
	Grid,
	Card,
  Divider,
  Container
} from "@mui/material";
import "./Page.css";

const style = {
  maxWidth: 360
};

function SelectAddress() {
  return (
    <>
    <Grid item container>
    <Grid item xs={12} md={12} mt={2}>
      {/* Page Title */}
    <Box xs={12} md={12} mb={2}>
          <h4 className="address-head" sx={style}>
            Select Address
          </h4>
    </Box>
    {/* Page Title End */}
    </Grid>
    <span className="divider"></span>
    <Grid item xs={12} md={12} mt={2}>
    <Container maxWidth="xl">container</Container>
    </Grid>
    </Grid>
      
    </>
  );
}

export default SelectAddress;
