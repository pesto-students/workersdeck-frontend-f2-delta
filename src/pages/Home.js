import React, { useState } from "react";
import "./Page.css";
import {
  Box,
  Paper,
  Grid,
  Card,
  Button,
  Container,
  InputLabel,
  MenuItem,
  FormControl,
  TextField,
  Select
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Services from "../components/Home/Services";
import OfferBanner from "../components/Home/OfferBanner";
import servicesList from "../consts/services";
import HomeBackground from "../assets/homebg.jpg";
import Footer from "../components/Footer/Footer";
import Cities from "../consts/cities";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary
}));

function Home() {
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");

  const getServiceCard = (coffeMakerObj) => {
    return (
      <Grid item xs={12} sm={12} md={2} ml={4}>
        <Services {...coffeMakerObj} />
      </Grid>
    );
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <>
      {/* Home Page Banner and Area */}
      <Grid item container>
        <Grid sm={12} xs={12} md={12} lg={12} item>
          <Box
            sx={{ height: "80vh" }}
            style={{
              backgroundImage: `url(${HomeBackground})`,
              backgroundSize: "cover",
              backgroundBlendMode: "overlay",
              backgroundColor: "rgba(45, 45, 45, 0.55)"
            }}
          >
            {/* Select City and Pincode */}
            <Grid item container>
              <Grid sm={12} xs={12} md={1} lg={1} item />
              <Grid sm={12} xs={12} md={3} lg={3} item>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Select City
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={"0"}
                    label="Select City"
                    onChange={handleChange}
                  >
                    {Cities.map((cityObj) => (
                      <MenuItem value={cityObj.id}> {cityObj.name}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid sm={12} xs={12} md={1} lg={1} item />
              <Grid sm={12} xs={12} md={3} lg={3} item>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Select City
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={"0"}
                    label="Select City"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            {/* Select City and End here */}
          </Box>
        </Grid>
      </Grid>
      {/* Services Card */}
      <Grid item container>
        <Grid sm={12} xs={12} md={2} lg={2} item />
        <Grid sm={12} xs={12} md={8} lg={8} item>
          <Card
            style={{
              background: "#FFFFFA",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              borderRadius: " 8px",
              height: "300px",
              marginTop: "-55px"
            }}
          >
            <Grid container>
              {servicesList.map((serviceObj) => getServiceCard(serviceObj))}
            </Grid>
          </Card>
        </Grid>
      </Grid>
      {/* Offer Banner */}
      <OfferBanner />
      {/* Footer */}
      <Footer />
    </>
  );
}

export default Home;
