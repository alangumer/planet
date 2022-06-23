import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

interface Props {
  children?: React.ReactNode;
}

export default function Layout(props: Props) {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Planet
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="main"
        sx={{ p: 3 }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        marginTop={10}
        width="100%"
      >
        {props.children}
      </Box>
    </Box>
  );
}
