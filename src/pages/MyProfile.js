import React from "react";
import {useParams} from "react-router-dom";
import {
    Container,
    Grid,
    Card,
    CardContent,
    Box,
    Button
} from "@mui/material";

import DashboardMenu from "../components/Dashboard/DashboardMenu";
import Profile from "../components/Dashboard/MyProfile";



const MyProfile = () => {
    const { slug } = useParams();
    console.log(slug);

    return(
        <>
        <DashboardMenu  page={1}/>
        <Profile/>
        </>
    );

};

export default MyProfile;