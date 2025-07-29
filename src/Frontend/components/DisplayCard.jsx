import React from "react";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";

const DisplayCard = ({image, title}) => {
  return (
    <Card sx={{ maxWidth: 300, m: 1 }}>
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
      </CardContent>
    </Card>
  );
};

export default DisplayCard;
