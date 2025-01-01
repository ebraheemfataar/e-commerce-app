import { useParams } from "react-router-dom";
import { Typography, Grid } from "@mui/material";

const Product = () => {
  const { id } = useParams();
  // Placeholder for fetching product details
  const product = {
    name: "Sample Product",
    price: 200,
    description: "Description of the product",
  }; // Replace with actual data fetching logic

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        {/* Product image goes here */}
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h4">{product.name}</Typography>
        <Typography variant="h6">${product.price}</Typography>
        <Typography variant="body1">{product.description}</Typography>
      </Grid>
    </Grid>
  );
};

export default Product;
