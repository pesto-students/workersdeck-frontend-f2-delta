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
	Select,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Services from "../components/Home/Services";
import OfferBanner from "../components/Home/OfferBanner";
import servicesList from "../consts/services";
import HomeBackground from "../assets/homebg.jpg";
import Footer from "../components/Footer/Footer";
import Cities from "../consts/cities";



function Home() {
	const [city, setCity] = useState("");
	const [pincode, setPincode] = useState("");

	const getServiceCard = (coffeMakerObj) => {
		return (
			<Grid item xs={12} sm={12} md={2} lg={2} ml={4}>
				<Services {...coffeMakerObj} />
			</Grid>
		);
	};

	const handleCityChange = (event) => {
		setCity(event.target.value);
	};
  const handlePinChange = (event) => {
		setPincode(event.target.value);
	};


	return (
		<>
			{/* Home Page Banner and Area */}
			<Grid item container>
				<Grid sm={12} xs={12} md={12} lg={12} item>
					<Box
						sx={{ height: "600px" }}
						lg={{ height: "600px" }}
						style={{
							backgroundImage: `url(${HomeBackground})`,
							backgroundSize: "cover",
							backgroundBlendMode: "overlay",
							backgroundColor: "rgba(45, 45, 45, 0.55)",
						}}
					>
						{/* Select City and Pincode */}
            <Grid container item>
						<Grid sm={12} xs={12} md={3} lg={3} item ml={2}>
							<FormControl fullWidth>
								<InputLabel id="demo-simple-select-label">
									Select City
								</InputLabel>
								<Select
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									value={city}
									label="Select City"
									onChange={handleCityChange}
									className={"wd-dropdown-menu"}
								>
									{Cities.map((cityObj) => (
										<MenuItem value={cityObj.id}> {cityObj.name}</MenuItem>
									))}
								</Select>
							</FormControl>
						</Grid>
            <Grid sm={12} xs={12} md={3} lg={3} item>
							<FormControl fullWidth>
              <TextField id="outlined-basic" label="Pin Code" variant="outlined"  className={'wd-input-pincode'} name={"pincode"} value={pincode} onChange={handlePinChange} maxLength={6} />
							</FormControl>
						</Grid>
            <Grid sm={12} xs={12} md={3} lg={3} item>
            <Button variant="contained" className={"wd-go-btn"}>Go</Button>

            </Grid>
            </Grid>
						{/* Select City and End here */}
					</Box>
				</Grid>
				{/* Services Card */}
				<Grid sm={12} xs={12} md={2} lg={2} item />
				<Grid sm={12} xs={12} md={8} lg={8} item>
					<Card
						sx={{
							maxHeight: { xs: "100%", md: "300px" },
						}}
						style={{
							background: "#FFFFFA",
							boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
							borderRadius: " 8px",
							marginTop: "-55px",
						}}
					>
						<Grid container>
							{servicesList.map((serviceObj) => getServiceCard(serviceObj))}
						</Grid>
					</Card>
				</Grid>
				{/* Services Card  End*/}
				{/* Offer box start */}
				<OfferBanner />
				{/* Offer Box ends */}
				{/* footer starts */}
				<Footer />
				{/* footer end */}
			</Grid>
		</>
	);
}

export default Home;
