import React from "react";
import { Card, CardMedia, CardContent, Typography, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

// Assuming a placeholder for products
const products = [
  { id: 1, name: "Product 1", price: 100, image: "path/to/image1.jpg" },
  { id: 2, name: "Product 2", price: 150, image: "path/to/image2.jpg" },
  // Add more products as needed
];

const ProductList = () => {
  const navigate = useNavigate();

  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <Card onClick={() => navigate(`/product/${product.id}`)}>
            <CardMedia
              component="img"
              height="140"
              image={product.image}
              alt={product.name}
            />
            <CardContent>
              <Typography variant="h6">{product.name}</Typography>
              <Typography variant="body2">${product.price}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
