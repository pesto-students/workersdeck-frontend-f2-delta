import React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";
import customStyle from "../style";

function Footer() {
  const classes = customStyle();
  return (
    <Grid item container>
      <Grid sm={12} xs={12} md={12} lg={12} item>
        <Box sx={{ bgcolor: "#2D3748", height: "24vh" }}>
          <Container maxWidth="lg">
            <Typography variant="h3" className={classes.footer_text_logo}>
              W.D
            </Typography>
          </Container>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Footer;
