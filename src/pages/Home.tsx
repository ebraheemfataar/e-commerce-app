import { Grid } from "@mui/material";
import ProductList from "../components/ProductList";

const Home = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <ProductList />
      </Grid>
    </Grid>
  );
};

export default Home;
