import React, { useState, useEffect } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const Carousel = ({
  items = [],
  height = "60vh",
  onItemClick,
  position = "left",
  tag,
  time,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, time);
    return () => clearInterval(interval);
  }, [currentIndex]);

  if (!items.length) return null;

  const currentItem = items[currentIndex];
  const imageOnLeft = position === "left";

  return (
    <Box
      sx={{
        width: "100%",
        height,
        m: 1,
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Tag (shown on all slides if tag prop is passed) */}
      {tag && (
        <Box
          sx={{
            position: "absolute",
            top: 20,
            right: 20,
            px: 2,
            py: 0.5,
            borderRadius: "20px",
            fontWeight: "bold",
            fontSize: "0.9rem",
            background: "linear-gradient(90deg, red, orange, yellow)",
            color: "white",
            zIndex: 2,
            boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
          }}
        >
          {tag}
        </Box>
      )}

      {/* Slide content */}
      <Box
        onClick={() => onItemClick?.(currentItem)}
        sx={{
          display: "flex",
          flexDirection: imageOnLeft ? "row" : "row-reverse",
          alignItems: "center",
          width: "100%",
          height: "100%",
          cursor: "pointer",
        }}
      >
        {/* Image */}
        <Box
          component="img"
          src={currentItem.image}
          alt={currentItem.name}
          sx={{
            width: "50%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* Text content */}
        <Box
          sx={{
            width: "50%",
            padding: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: imageOnLeft ? "left" : "right",
          }}
        >
          <Typography variant="h4" fontWeight={700}>
            {currentItem.name}
          </Typography>
          {currentItem.price && (
            <Typography variant="h6" color="text.secondary">
              N${currentItem.price}
            </Typography>
          )}
        </Box>
      </Box>

      {/* Arrows */}
      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          top: "50%",
          left: 10,
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0,0,0,0.1)",
          color: "white",
          zIndex: 2,
          "&:hover": { backgroundColor: "rgba(0,0,0,0.3)" },
        }}
      >
        <ArrowBackIos />
      </IconButton>

      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          top: "50%",
          right: 10,
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0,0,0,0.1)",
          color: "white",
          zIndex: 2,
          "&:hover": { backgroundColor: "rgba(0,0,0,0.3)" },
        }}
      >
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
};

export default Carousel;
