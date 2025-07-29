import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CategoryNav = ({ categories = [], handleClick }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selected, setSelected] = useState("All");

  const allCategories = ["All", ...categories];

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCategorySelect = (cat) => {
    setSelected(cat);
    setAnchorEl(null);
    handleClick?.(cat);
  };

  const displayLabel = selected === "All" ? "Category" : selected;

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        p: 1,
        backdropFilter: "blur(4px)", //frosted-glass effect
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          minHeight: "unset !important",
        }}
      >
        <Box
          onClick={handleOpenMenu}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            px: 2,
            py: 1,
            borderRadius: 2,
            cursor: "pointer",
            backgroundColor: "rgba(22, 19, 211, 0.15)",
            border: "1px solid rgba(86, 171, 250, 0.4)",
            color: "#fff",
            fontWeight: 500,
            textTransform: "capitalize",
            whiteSpace: "nowrap",
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.25)",
            },
          }}
        >
          <Typography variant="body1" fontWeight="bold">{displayLabel}</Typography>
          <ExpandMoreIcon fontSize="small" />
        </Box>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
        >
          {allCategories.map((cat) => (
            <MenuItem
              key={cat}
              onClick={() => handleCategorySelect(cat)}
              selected={cat === selected}
            >
              {cat}
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default CategoryNav;
