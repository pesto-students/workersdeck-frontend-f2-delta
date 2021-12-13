import React from "react";
import DashboardMenu from "../components/Dashboard/DashboardMenu";
import Booking from "../components/Dashboard/MyBooking";

const MyBooking = () => {
    return(
        <>
        <DashboardMenu  page={2}/>
        <Booking/>
        </>
    );

};

export default MyBooking;