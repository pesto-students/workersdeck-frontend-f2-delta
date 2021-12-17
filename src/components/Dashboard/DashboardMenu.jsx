import React from "react";
import { Container, Grid, Card, CardContent, Button } from "@mui/material";

import { Link } from "react-router-dom";

const DashboardMenu = (props) => {
  return (
    <>
      <Container maxWidth="xl" className="wd-myprofile-layout">
        <Grid item container>
          <Grid sm={12} xs={12} md={12} lg={12} item mt={2}>
            <Card lg={{ maxnWidth: 275 }} sm={12}>
              <CardContent className="wd-myprofile-align">
                <Grid item container>
                  <Grid sm={12} xs={12} md={3} lg={3} item>
                    <Link exact to="/my-profile">
                      <Button
                        size="medium"
                        className={
                          props.page === 1
                            ? "wd-myprofile-title wd-myprofile-active-page"
                            : "wd-myprofile-title"
                        }
                      >
                        MY ACCOUNT
                      </Button>
                    </Link>
                  </Grid>
                  <Grid sm={12} xs={12} md={3} lg={3} item>
                    <Link to="/my-booking">
                      <Button
                        size="medium"
                        className={
                          props.page === 2
                            ? "wd-myprofile-title wd-myprofile-active-page"
                            : "wd-myprofile-title"
                        }
                      >
                        ALL BOOKINGS
                      </Button>
                    </Link>
                  </Grid>
                  <Grid sm={12} xs={12} md={3} lg={3} item>
                    <Button
                      size="medium"
                      className={
                        props.page === 3
                          ? "wd-myprofile-title wd-myprofile-active-page"
                          : "wd-myprofile-title"
                      }
                    >
                      UPCOMING BOOKINGS
                    </Button>
                  </Grid>
                  <Grid sm={12} xs={12} md={3} lg={3} item>
                    <Button size="medium" className="wd-myprofile-title">
                      LOGOUT
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default DashboardMenu;
