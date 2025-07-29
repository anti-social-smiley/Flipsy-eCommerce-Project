import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CategoryNav from "../../components/CategoriesNav";
import Promotions from "../../components/Promotions";
import ItemCard from "../../components/ItemCard";
import image from "../../images/image-example.png";
import { Box } from "@mui/material";

const Products = () => {
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
  const [selectedCategory, setSelectedCategory] = useState("All");

  const Navigation = (category) => {
    if (category !== "All") {
  navigate(`/products/${selectedCategory}`)
    }
  };
  useEffect(() => {
    // Navigation(selectedCategory)
    console.log("User selected:", selectedCategory);
  }, [selectedCategory]);
  return (
    <div>
      <Promotions messages={promoMessages} />
      <CategoryNav
        categories={categories}
        handleClick={(cat) => setSelectedCategory(cat)}
      />{selectedCategory == "All" && (  
        <Box display="flex" flexWrap="wrap" justifyContent="center">
        <ItemCard image={image} title="Category2" size="800px" />
        <ItemCard image={image} title="Category3" size="400px" />
        <ItemCard image={image} title="Category4" size="400px" />
        <ItemCard image={image} title="Category5" size="400px" />
        <ItemCard image={image} title="Category6" size="400px" />
        <ItemCard image={image} title="Category1" size="600px" />
        <ItemCard image={image} title="Category7" size="300px" />
        <ItemCard image={image} title="Category8" size="300px" />
      </Box>
      )}
    </div>
  );
};
export default Products;
