import React, { useState } from "react";
import {
    Container,
    Grid,
    Card,
    CardContent,
    Box,
    Button
} from "@mui/material";


const MyProfile = () => {



    return(
        <>
        <Container maxWidth="xl" className="wd-myprofile-layout">
        <Grid item container>
        <Grid sm={12} xs={12} md={12} lg={12} item mt={2}> 
        <Card sx={{ minWidth: 275 }}>
      <CardContent className="wd-myprofile-align">
      <Grid item container >
      <Grid sm={12} xs={12} md={3} lg={3} item> 
      <Button size="medium" className={`wd-myprofile-title wd-myprofile-active-page`}>MY ACCOUNT</Button>
      </Grid>
      <Grid sm={12} xs={12} md={3} lg={3} item> 
      <Button size="medium" className="wd-myprofile-title">ALL BOOKINGS</Button>
      </Grid>
      <Grid sm={12} xs={12} md={3} lg={3} item> 
      <Button size="medium" className="wd-myprofile-title">UPCOMING  BOOKINGS</Button>
      </Grid>
      <Grid sm={12} xs={12} md={3} lg={3} item> 
      <Button size="medium" className="wd-myprofile-title">LOGOUT</Button>
      </Grid>
      </Grid>
      </CardContent>
     
    </Card>
        </Grid>
        </Grid>
        </Container>
        </>
    );

};

export default MyProfile;