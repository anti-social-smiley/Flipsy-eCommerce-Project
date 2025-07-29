import React from "react";
import { Box, Container, Grid, Typography, Link, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FlipsyLogo from "../images/FlipsyLogoOnly.png"; // Adjust path if needed

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1A1A1A",
        color: "#fff",
        mt: 8,
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo and description */}
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <img src={FlipsyLogo} alt="Flipsy Logo" style={{ width: 40, marginRight: 10 }} />
              <Typography variant="h6" sx={{ fontFamily: "Outfit, sans-serif" }}>
                Flipsy
              </Typography>
            </Box>
            <Typography variant="body2">
              Buy & sell goods, find services, and promote your work – all in one playful, powerful place.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="/" color="inherit" underline="hover" display="block">
              Home
            </Link>
            <Link href="/products" color="inherit" underline="hover" display="block">
              Products
            </Link>
            <Link href="/about" color="inherit" underline="hover" display="block">
              About
            </Link>
            <Link href="/contact" color="inherit" underline="hover" display="block">
              Contact
            </Link>
          </Grid>

          {/* Support */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Support
            </Typography>
            <Link href="/faq" color="inherit" underline="hover" display="block">
              FAQ
            </Link>
            <Link href="/help" color="inherit" underline="hover" display="block">
              Help Center
            </Link>
            <Link href="/privacy-policy" color="inherit" underline="hover" display="block">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" color="inherit" underline="hover" display="block">
              Terms of Service
            </Link>
          </Grid>

          {/* Socials */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <IconButton color="inherit" href="https://facebook.com" target="_blank">
              <FacebookIcon />
            </IconButton>
            <IconButton color="inherit" href="https://twitter.com" target="_blank">
              <TwitterIcon />
            </IconButton>
            <IconButton color="inherit" href="https://instagram.com" target="_blank">
              <InstagramIcon />
            </IconButton>
            <Typography variant="body2" sx={{ mt: 2 }}>
              support@flipsy.com
            </Typography>
          </Grid>
        </Grid>

        {/* Bottom bar */}
        <Box mt={6} textAlign="center">
          <Typography variant="body2" color="gray">
            © {new Date().getFullYear()} Flipsy. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
