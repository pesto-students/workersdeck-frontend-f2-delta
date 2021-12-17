import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Link,useNavigate  } from "react-router-dom";
import customStyle from "../style";
import { useDispatch , useSelector } from 'react-redux';
import { userActions } from '../../_actions';


const pages = ["Home", "Register As Worker"];

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#FFFFFA"
    },
    secondary: {
      main: "#3F51B5"
    },
    third: {
      main: "#2D3748"
    }
  }
});

const ResponsiveAppBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.authentication.loggedIn);
  const user = useSelector((state) => state.authentication.info)
  const classes = customStyle();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);



  const handleLogout = () => {
    dispatch(userActions.logout());
    navigate('/login');
  }
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <ThemeProvider theme={lightTheme}>
      <AppBar position="static" color="primary">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ ml: 3, display: { xs: "none", md: "flex" } }}
            >
              <b className={classes.wd_logo}>W.D.</b>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left"
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" }
                }}
              >
                <MenuItem key={"home"} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>
                <MenuItem key={"Registeraworker"} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Register as Worker</Typography>
                </MenuItem>
                <MenuItem key={"Register"} onClick={handleCloseNavMenu}>
    <Typography textAlign="center">Register</Typography>
                </MenuItem>
                <MenuItem key={"Login"} onClick={handleCloseNavMenu}>
                  <Link to="login">
                    <Typography textAlign="center">Login</Typography>
                  </Link>
                </MenuItem>
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              <b className={classes.wd_logo}>W.D.</b>
            </Typography>
            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
              className={classes.wd_text}
            >
              <Link to="/" style={{ textDecoration: 'none' }}>
                <Button
                  key={"home"}
                  onClick={handleCloseNavMenu}
                  sx={{ mr: 2, color: "black",  display: "block", mt: 1 }}
                >
                  Home
                </Button>
              </Link>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <Button
                  key={"home"}
                  onClick={handleCloseNavMenu}
                  sx={{ mr: 2, color: "black", display: "block", mt: 1 }}
                >
                  Register As Worker
                </Button>
              </Link>

                {!loggedIn && 
              <Link to="register" style={{ textDecoration: 'none' }}>
                <Button variant="contained" className={classes.btn_action_1}>
                  Register
                </Button>
              </Link>}
              {loggedIn &&
                <Link to="register" style={{ textDecoration: 'none' }}>
                <Button variant="contained" className={classes.btn_action_1}>
                {user.fullname}
                </Button>
              </Link>
              }
              {!loggedIn &&
              <Link to="login" style={{ textDecoration: 'none' }}>
                <Button variant="contained" className={classes.btn_action_2}>
                  {'Login'}
                </Button>
              </Link>
             } 
              {loggedIn &&
                <Button variant="contained" className={classes.btn_action_2} onClick={handleLogout}>
                  {'Logout'}
                </Button>
             } 
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
export default ResponsiveAppBar;
