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
            
          </Container>
          </Grid>
          </Grid>
        </>
    )
}

export default ServicesList;