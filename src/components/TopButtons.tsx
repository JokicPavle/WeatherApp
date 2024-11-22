import { Button, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Item from "@mui/material/Grid2";
import topCity from "../data/topCity.js";

interface topCity {
  city: string;
}

const TopButtons = () => {
  return (
    <Container disableGutters className="mt-5">
      <Grid container gap={2}>
        {topCity.map((city: topCity, index: number) => (
          <Item key={index}>
            <Button variant="contained" className="btn btn-black">
              {city.city}
            </Button>
          </Item>
        ))}
      </Grid>
    </Container>
  );
};

export default TopButtons;
