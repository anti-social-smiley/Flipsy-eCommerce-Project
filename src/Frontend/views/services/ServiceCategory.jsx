import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CategoryNav from "../../components/CategoriesNav";
import Promotions from "../../components/Promotions";
import { Box } from "@mui/material";

const ServiceCategory = () => {
 const { name } = useParams();
  const navigate = useNavigate();
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
  const [selectedCategory, setSelectedCategory] = useState(name);

  const Navigation = (category) => {
    if (category !== "All") {
      navigate(`/services/${selectedCategory.toLowerCase()}`);
    } else {
      navigate(`/services`);
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

export default ServiceCategory