import React, { useState } from "react";
import "./Page.css";
import {
	Box,
	Grid,
	Card,
	Button,
	Container,
    Paper,
    Stack,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import customStyle from "../components/style";

function ServicesList() {
    const classes = customStyle();

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

    return(
        <>
          <Grid item container>
            {/* Sub categories */}
            <Grid item xs={12} sm={12} md={12}  mt={2}>
            <Container maxWidth="xl" className="wd-myprofile-layout">
            <Card lg={12} sm={12} className={classes.ThirdCard}>
            <Stack direction="row" spacing={2} mt={2}>
                <Item className={`wd-subcategories wd-subcategories-active`}>Category 1</Item>
                <Item className={`wd-subcategories`}>Item 2</Item>
                <Item className={`wd-subcategories`}>Item 3</Item>
                <Item className={`wd-subcategories`}>Item 4</Item>
            </Stack>
            </Card>
            </Container>
            </Grid>
            {/* Subcategories end */}
          <Grid item xs={12} sm={12} md={8} mt={2}>
          <Container maxWidth="xl" className="wd-myprofile-layout">
          <Card lg={12} sm={12} className={classes.ServiceCard}>
          <Grid item container>
          <Grid item xs={4} sm={4} md={4}>
          <Box
          component="img"
          sx={{
            height: 182,
            width: 300,
            maxHeight: { xs: 233, md: 182 },
            maxWidth: { xs: 350, md: 300 },
            marginLeft:"36px",
          }}
          alt="The house from the offer."
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
        />
          </Grid>
          {/* Card content */}
          <Grid item xs={8} sm={8} md={8}>
              sd
          </Grid>
          {/* card content end */}
          </Grid>
          </Card>
          </Container>
          </Grid>
          </Grid>
        </>
    )
}

export default ServicesList;