import React from 'react'
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";

const ProductsCategory = () => {
    const { name } = useParams();
  return (
     <div>
         <Typography variant="h4" sx={{ mt: 2 }}>
          You clicked on: {name.charAt(0).toUpperCase() + name.slice(1)}
             </Typography>
     </div>
  )
}

export default ProductsCategory