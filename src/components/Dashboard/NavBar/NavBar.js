import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import MenuIcon from '@mui/icons-material/MenuIcon';
import './NavBar.css';
import CantaLogo from '../../../assets/Canta-logo.png';
const NavBar = () => {
  return (

    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" className="TopNav" sx={{ backgroundColor: "white", boxShadow: "none"}}>
        <Toolbar className="tool_bar" sx={{boxShadow: "none"}}>
          <img src={CantaLogo} alt="Canta Logo" />
          <div className="download-buttonText">
            <Typography className="TopNavText">For Business</Typography>
            <Button className="download-button">Download App</Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
/* <>
<header className="navBar">
  <nav className="sub-section">
    <div className="nav-content">
      <img src={CantaLogo} alt="CantaLogo" />

      <div className="sub-nav">
        <p>For Business</p>
        <button className= "nav-button">Download App</button>
      </div>
    </div>
  </nav>
</header>
</> */
  );
}

export default NavBar;