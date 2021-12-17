import React, { useState, useEffect } from "react";
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
import CardList from "../components/Service/CardList";
import CardDetail from "../components/Service/CardDetail";
import fakeServiceList from "../consts/fakeServiceList";

function ServicesList() {
  const classes = customStyle();
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const getServiceCard = (fakeServiceList) => {
    return (
      <>
        <CardList {...fakeServiceList} />
      </>
    );
  };

  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <Grid item container>
        {/* Sub categories */}
        <Grid item xs={12} sm={12} md={12} mt={2}>
          <Container maxWidth="xl" className="wd-myprofile-layout">
            <Card lg={12} sm={12} className={classes.ThirdCard}>
              <Stack direction="row" spacing={2} mt={2}>
                <Item className={`wd-subcategories wd-subcategories-active`}>
                  Category 1
                </Item>
                <Item className={`wd-subcategories`}>Item 2</Item>
                <Item className={`wd-subcategories`}>Item 3</Item>
                <Item className={`wd-subcategories`}>Item 4</Item>
              </Stack>
            </Card>
          </Container>
        </Grid>
        {/* Subcategories end */}
        {/* Service Card List*/}
        <Grid item xs={12} sm={12} md={7} mt={2}>
          {fakeServiceList.map((serviceObj) => getServiceCard(serviceObj))}
        </Grid>
        {/* Service card list end */}
        {/* Service Details */}
        <Grid item xs={12} sm={12} md={5} mt={2}>
          <CardDetail />
        </Grid>
        {/* Service Details End */}
      </Grid>
    </>
  );
}

export default ServicesList;
