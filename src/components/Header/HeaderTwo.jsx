import * as React from "react";
import { ThemeProvider, createTheme,AppBar } from "@mui/material";


const HeaderTwo = () => {

    const lightTheme = createTheme({
        palette: {
          mode: "light",
          primary: {
            main: "#FFFFFA"
          },
        }
      });

    return(
        <ThemeProvider theme={lightTheme}>
             <AppBar position="static" color="primary">
                 
             </AppBar>
        </ThemeProvider>
       
    );

}

export default HeaderTwo;