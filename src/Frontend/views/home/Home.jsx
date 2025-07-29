import React from "react";
import Carousel from "../../components/Carousel";
import image from "../../images/image-example.png";
import DisplayCard from "../../components/DisplayCard";
import Box from "@mui/material/Box";

const Home = () => {
  const itemsProducts = [
    {
      image: image,
      name: "Second-Hand Nike Shoes",
      price: 35.99,
    },
    {
      image: image,
      name: "Handmade T-Shirt",
      price: 22.5,
    },
    {
      image: image,
      name: "Vintage Leather Jacket",
      price: 120.0,
    },
  ];

  const itemsServices = [
    {
      image: image,
      name: "Electric Services",
    },
    {
      image: image,
      name: "Fix your washing machine",
    },
    {
      image: image,
      name: "Plumbing Services",
    },
  ];

  const handleClickCarouselProducts = (item) => {
    console.log("Clicked item:", item);
    // You could navigate to a detail page here
    // navigate(`/product/${item.id}`);
  };
  const handleClickCarouselServices = (item) => {
    console.log("Clicked item:", item);
    // You could navigate to a detail page here
    // navigate(`/product/${item.id}`);
  };

  return (
    <div>
      <Carousel
        items={itemsProducts}
        height="50vh"
        onItemClick={handleClickCarouselProducts}
        position={"left"}
        tag={"Latest"}
        time={"3425"}
      />
      <Carousel
        items={itemsServices}
        height="50vh"
        onItemClick={handleClickCarouselServices}
        position={"right"}
        tag={"Discover"}
        time={"4652"}
      />
      <Box display ="flex" flexWrap="wrap" justifyContent="space-around">
        <DisplayCard image={image} title="Featured Item" />
        <DisplayCard image={image} title="Popular Service" />
        <DisplayCard image={image} title="New Postings" />
      </Box>
    </div>
  );
};
export default Home;
