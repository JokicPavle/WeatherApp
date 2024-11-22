import { Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Item from "@mui/material/Grid2";
import Aside from "./Aside.js";
import Content from "./Content.js";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";
const Card = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  return (
    <Container>
      <Grid
        container
        spacing={3}
        className={`my-5 text-white bg-[#071339] rounded-xl mx-auto ${
          theme === "light" ? "bg-[#1549f5]" : "bg-[#071339]"
        }`}
      >
        <Grid size={4}>
          <Item>
            <Aside />
          </Item>
        </Grid>
        <Grid size={8}>
          <Item>
            <Content />
          </Item>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Card;
