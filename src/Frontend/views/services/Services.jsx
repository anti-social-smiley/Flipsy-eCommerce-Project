import React, { useState, useEffect } from "react";
import CategoryNav from "../../components/CategoriesNav";
import Promotions from "../../components/Promotions";
import ItemCard from "../../components/ItemCard";
import image from "../../images/image-example.png";
import { Box } from "@mui/material";

const Services = () => {
  const promoMessages = [
    "Find Your Perfect Service",
    "No more searching store by store",
    "Remember to share our website with your friends and family",
  ];
  const categories = [
    "Consulting",
    "Design",
    "Development",
    "Marketing",
    "Photography",
    "Writing",
    "Tutoring",
    "Translation",
    "Event Planning",
    "Fitness Training",
    "Legal Services",
    "Financial Advice",
    "Home Repair",
    "Cleaning Services",
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    console.log("User selected:", selectedCategory);
    // You can now use `selectedCategory` to filter, fetch, etc.
  }, [selectedCategory]);
  return (
    <div>
      <Promotions messages={promoMessages} />
      <CategoryNav
        categories={categories}
        handleClick={(cat) => setSelectedCategory(cat)}
      />
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        <ItemCard image={image} title="Sample Category" size="800px" />
        <ItemCard image={image} title="Another Category" size="400px" />
        <ItemCard image={image} title="Third Category" size="400px" />
        <ItemCard image={image} title="Fourth Category" size="400px" />
        <ItemCard image={image} title="Fifth Category" size="400px" />
        <ItemCard image={image} title="Sixth Category" size="300px" />
        <ItemCard image={image} title="Seventh Category" size="300px" />
        <ItemCard image={image} title="Seventh Category" size="600px" />
      </Box>
    </div>
  );
};

export default Services;
