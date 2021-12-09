import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Header from "../components/Header/Header";
import "./Page.css";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const style = {
  maxWidth: 360
};

function SelectAddress() {
  return (
    <>
      <Header />
      <Grid item xs={12} md={12} mt={12}>
        <Box>
          <h4 className="address-head" sx={style}>
            Select Address
          </h4>
        </Box>
        <Divider />
      </Grid>
    </>
  );
}

export default SelectAddress;
