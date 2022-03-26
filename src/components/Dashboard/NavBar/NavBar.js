import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
import CantaLogo from "../../../assets/Canta-logo.png";

export default function ButtonAppBar() {
  return (
    <div className="TopNav">
      <Box
        sx={{ flexGrow: 1, display: { xs: "none", sm: "flex", md: "flex" } }}
      >
        <AppBar
          position="static"
          sx={{ backgroundColor: "white", px: 12, py: 1 }}
        >
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <img src={CantaLogo} alt="Canta Logo" />
            </Typography>
            <Button
              sx={{ color: "#003366", mx: 6, textTransform: "capitalize" }}
            >
              For Business
            </Button>
            <Button
              sx={{
                backgroundColor: "#003366",
                color: "#E6FFFF",
                px: 4,
                py: 2,
                width: "max-content",
                textTransform: "capitalize",
                borderRadius: "12px",
              }}
            >
              Download App
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      {/* <Box
        sx={{ flexGrow: 1, display: { xs: "block", sm: "none", md: "none" } }}>
        <AppBar
          position="static"
          sx={{ px: 1, py: 1, backgroundColor:"#003366" }}
          
        >
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <img src={FooterLogo} alt="Canta-white-logo" />
            </Typography>
          </Toolbar>
        </AppBar>
      </Box> */}
    </div>
  );
}
