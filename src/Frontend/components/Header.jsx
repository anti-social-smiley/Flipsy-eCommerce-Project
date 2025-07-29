import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import DesktopLogo from "../images/FlipsyLogoOnly.png";
import MobileLogo from "../images/FlipsyLogoWithName.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const pages = ["Home", "Products", "Services", "Contact"];
const settings = ["Profile", "Cart", "Logout"];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  return (
    <AppBar
      position="static"
      color="primary"
      sx={{
        background: "linear-gradient(to right, #FF69B4, #6A5ACD)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
          }}
        >
          {/* Left: Mobile menu icon */}
          <Box
            sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}
          >
            <IconButton
              size="large"
              aria-label="menu"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    sx={{ fontFamily: "Roboto Condensed, sans-serif" }}
                  >
                    <Link
                      to={`/${page.toLowerCase()}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {page}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Center: Mobile logo */}
          <Box
            sx={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              display: { xs: "flex", md: "none" },
              width: "75px",
              height: "75px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={MobileLogo} alt="Logo" style={{ maxWidth: "100%" }} />
          </Box>

          {/* Left: Desktop logo + title */}
          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            <Box
              sx={{
                width: "75px",
                height: "75px",
                marginRight: 1,
              }}
            >
              <img src={DesktopLogo} alt="Logo" style={{ maxWidth: "100%" }} />
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                fontFamily: "Outfit, sans-serif",
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Flipsy
            </Typography>
          </Box>

          {/* Center: Nav buttons (desktop only) */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  mx: 1,
                  color: "white",
                  fontFamily: "Roboto Condensed, sans-serif",
                  textTransform: "none",
                }}
              >
                <Link
                  to={`/${page.toLowerCase()}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {page}
                </Link>
              </Button>
            ))}
          </Box>

          {/* Right: Avatar */}
          <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
            <IconButton
              aria-label="Cart"
              color="inherit"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              <ShoppingCartIcon />
            </IconButton>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              anchorEl={anchorElUser}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography
                    textAlign="center"
                    sx={{ fontFamily: "Roboto Condensed, sans-serif" }}
                  >
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
