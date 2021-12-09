import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import OfferImage from "../../assets/offerbanner.png";
import customStyle from "../style";

function OfferBanner() {
  const classes = customStyle();
  return (
    <Grid item container>
      <Grid sm={12} xs={12} md={12} lg={12} item mt={1}>
        <Box sx={{ bgcolor: "#3F51B5", height: "415px" }}>
          <Grid item container>
            <Grid sm={12} xs={12} md={8} lg={8} item>
              <h3 className={classes.offetTextOne}>
                BOOK HOME CLEANING SERVICES
              </h3>
              <h4 className={classes.offetTextTwo}>AND GET FLAT 10% OFF</h4>
              <Box textAlign="center">
                <Button className={classes.bookNowBtn}>BOOK NOW</Button>
              </Box>
            </Grid>
            <Grid sm={12} xs={12} md={4} lg={4} item>
              <Box
                component="img"
                sx={{
                  height: 370,
                  width: 370,
                  maxHeight: { xs: 370, md: 370 },
                  maxWidth: { xs: 370, md: 370 }
                }}
                mt={2}
                alt="The house from the offer."
                src={OfferImage}
                className="img-box-effect"
              />
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}

export default OfferBanner;
