"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { FaGithub,FaLinkedin } from 'react-icons/fa';
import { AiFillTwitterCircle } from "react-icons/ai";
const pages = ['Home', 'About', 'TechStack','Project','Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" className='w-full p-0 '>
      <Container  className='w-full m-0 xl:max-w-full '>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'revert-layer',
              fontWeight: 700,
              letterSpacing: '.3rem',
            //   color: 'yellow',
              textDecoration: 'none',
              background: "linear-gradient(90deg, rgba(19,176,245,1) 0%, rgba(231,15,170,1) 100%)",
              backgroundClip: "text",
              color: "transparent",
              
            }}
          >
            {"{MUZAMMIL SHAH}"}
          </Typography>




          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'revert-layer',
              fontWeight: 700,
              letterSpacing: '.3rem',
              //   color: 'yellow',
                textDecoration: 'none',
                background: "linear-gradient(90deg, rgba(19,176,245,1) 0%, rgba(231,15,170,1) 100%)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              {"{MUZAMMIL SHAH}"}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } ,justifyContent:"center"}}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: 'block',fontSize:"0.7rem", color:"#A7A7A7"}}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0,display:{sm:"hide",md:"flex"} }} className="flex space-x-2 ">
            <Typography className=''>
            <FaGithub className="text-white text-xl" />
            </Typography>
            <Typography className=''>
            <FaLinkedin className="text-white text-xl" />
            </Typography>
            <Typography className=''>
            <AiFillTwitterCircle className="text-white text-xl" />
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;