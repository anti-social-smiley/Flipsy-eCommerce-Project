import React from "react";
import { Link } from "react-router-dom";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";

const ItemCard = ({ image, title, price, size }) => {
  const prizeNotNull = price !== null && price !== undefined;
  const path = `/products/${title.toLowerCase()}`;
  return (
    <Card
      component={Link}
      to={path}
      sx={{
        width: size,
        m: 1,
        textDecoration: "none",
        color: "inherit",
        transition: "0.3s",
        "&:hover": { boxShadow: 6 },
        cursor: "pointer",
      }}
    >
      <CardMedia
        component="img"
        height="180"
        image={image}
        alt={title}
        sx={{ objectFit: "cover" }}
      />
      <CardContent>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: "bold", fontFamily: "Outfit, sans-serif" }}
          >
            {title}
          </Typography>
        </Box>
        {prizeNotNull && (
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ marginTop: 1, fontFamily: "Roboto Condensed, sans-serif" }}
          >
            N${price}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default ItemCard;
