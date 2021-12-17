import React from "react";
import {
	Box,
	Grid,
	Card,
	Button,
	Container,
    Paper,
    Stack,
    Typography,
    Rating
} from "@mui/material";
import { styled } from "@mui/material/styles";
import customStyle from "../style";
import "../../pages/Page.css";


const CardDetail = (props) => {
    const classes = customStyle();
    return(
        <>
        {/* Details Card Start */}
       <Card lg={12} sm={12} >
      <Grid item container>
      <Grid item xs={12} sm={12} md={12}>
          sd
      </Grid>
      </Grid>
      {/* Details Card End */}
      </Card>
        </>
    )

}

export default CardDetail;