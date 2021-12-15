import React, { useState } from "react";
import "./Page.css";
import {
	Box,
	Grid,
	Card,
	Button,
	Container,
	InputLabel,
	MenuItem,
	FormControl,
	TextField,
	Select,
} from "@mui/material";

const style = {
    maxWidth: 360
  };

function Booking() {

    return(
        <>
        <Grid item container>
    <Grid item xs={12} md={12} mt={2}>
      {/* Page Title */}
    <Box xs={12} md={12} mb={2}>
          <h4 className="wd-checkout-text" sx={style}>
          WHEN WOULD YOU AVAILABLE?
          </h4>
    </Box>
    </Grid>
    <Grid item xs={12} md={12} mt={2}>
        as
    </Grid>
    </Grid>
        </>
    )

}

export default Booking;