import React from "react";
import { Container, Grid, Card } from "@mui/material";
import customStyle from "../style";

function MyBooking() {
  const classes = customStyle();

  return (
    <Container maxWidth="xl" className="wd-myprofile-layout">
      <Grid item container>
        <Grid sm={12} xs={12} md={12} lg={12} item mt={2}>
          <Card lg={12} sm={12} className={classes.SecondaryCard}>
            card
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default MyBooking;
