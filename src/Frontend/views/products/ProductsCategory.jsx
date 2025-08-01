import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CategoryNav from "../../components/CategoriesNav";
import Promotions from "../../components/Promotions";
import { Box } from "@mui/material";

const ProductsCategory = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const promoMessages = [
    "Place your order",
    "No more searching store by store",
    "Remember to share our website with your friends and family",
  ];
  const categories = [
    "Books",
    "Clothing",
    "Electronics",
    "Home",
    "Toys",
    "Fitness",
    "Music",
    "Beauty",
    "Sports",
    "Automotive",
    "Health",
    "Grocery",
    "Pet Supplies",
    "Garden",
    "Tools",
    "Office Supplies",
    "Baby Products",
    "Arts & Crafts",
    "Jewelry",
    "Video Games",
    "Movies & TV",
    "Software",
    "Travel",
    "Photography",
  ];
  const [selectedCategory, setSelectedCategory] = useState(name);

  const Navigation = (category) => {
    if (category !== "All") {
      navigate(`/products/${selectedCategory.toLowerCase()}`);
    } else {
      navigate(`/products`);
    }
  };
  useEffect(() => {
    Navigation(selectedCategory);
    console.log("User selected:", selectedCategory);
  }, [selectedCategory]);
  
  return (
    <div>
      <Promotions messages={promoMessages} />
      <CategoryNav
        categories={categories}
        handleClick={(cat) => setSelectedCategory(cat)}
      />
      <Typography variant="h4" sx={{ mt: 2 }}>
        You clicked on: {name.charAt(0).toUpperCase() + name.slice(1)}
      </Typography>
    </div>
  );
};

export default ProductsCategory;
