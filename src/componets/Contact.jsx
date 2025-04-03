import React from "react";
import { Container, Typography, Box, IconButton, Link } from "@mui/material";
import { Email, Phone, Facebook, Instagram, LinkedIn, GitHub, YouTube } from "@mui/icons-material";

const ContactPage = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 4, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2 }}>
        <IconButton component={Link} href="mailto:javieremmanuelgranados@outlook.com" color="primary">
          <Email />
        </IconButton>
        <IconButton component={Link} href="tel:+526695334931" color="secondary">
          <Phone />
        </IconButton>
        <IconButton component={Link} href="https://instagram.com/emmanuelgrp" target="_blank" color="error">
          <Instagram />
        </IconButton>
        <IconButton component={Link} href="https://facebook.com/hotdogcontodo" target="_blank" color="primary">
          <Facebook />
        </IconButton>
        <IconButton component={Link} href="https://linkedin.com/in/emmanuelgrp" target="_blank" color="primary">
          <LinkedIn />
        </IconButton>
        <IconButton component={Link} href="https://github.com/emmanuelgrp" target="_blank" color="default">
          <GitHub />
        </IconButton>
        <IconButton component={Link} href="https://youtu.be/dQw4w9WgXcQ" target="_blank" color="error">
          <YouTube />
        </IconButton>
      </Box>
    </Container>
  );
};

export default ContactPage;
