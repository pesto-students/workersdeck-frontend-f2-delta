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
      <Grid container direction="column" alignItems="center" justify="center" m={2} xs={12} md={12} lg={12}>
      <Box
        component="img"
        sx={{
          height: 233,
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt="The house from the offer."
        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
      />
      </Grid>
      {/* Service Title */}
<Grid item xs={12} sm={12} md={12}>
  <Typography
    component="h4"
    className={"wd-service-card-h1"}
    align="center"
  >
   This is fake title for clining
  </Typography>
</Grid>
{/*  */}
<Grid container direction="column" alignItems="center" justify="center" xs={12} md={12} lg={12} mt={2}>
<Rating
                name="read-only"
                value={5}
                readOnly
                className={"wd-service-card-rating"}
              />
</Grid>
<Grid item xs={3} sm={3} md={3} mt={3} ml={5} mb={3}>
<Typography
    component="string"
    align="center"
  >
   EST. Time 45 Mins
  </Typography>
</Grid>
<Grid item xs={3} sm={3} mt={3} md={3} ml={5} mb={3}>
<Typography component="string" className={"wd-pages-card-price"}>
              &#x20B9; {1200}
              </Typography>
</Grid>
<Grid item xs={3} sm={3} md={3} mt={3} ml={5} mb={3} style={{
    textAlign:"right"
}}>
<Button variant="contained" className={'wd-pages-card-view-btn'}>Book Now</Button>
</Grid>
<Grid item xs={12} sm={12} md={12} ml={5} mb={3}>
<Typography component="h4" className={"wd-pages-card-price"}>
              Service Description
</Typography>
</Grid>
<Grid item xs={12} sm={12} md={12} ml={5} mb={3}>
<Typography component="string" >
            This is Service Description
</Typography>
</Grid>
{/* Service Card Title End */}
      </Grid>
      {/* Details Card End */}
      </Card>
        </>
    )

}

export default CardDetail;