import SearchInput from "./SearchInput";
import { Container } from "@mui/material";
import TopButtons from "./TopButtons.js";
import WeeklyWeather from "./WeeklyWeather.tsx";
import Forecast from "./Forecast.tsx";
import ThemeSwitch from "./ThemeSwitch.tsx";
const Content = () => {
  return (
    <Container className="flex-1 relative">
      <ThemeSwitch />
      <Container disableGutters>
        <TopButtons />
      </Container>
      <Container disableGutters className="py-10">
        <SearchInput />
      </Container>
      <Container disableGutters className="flex justify-start">
        <h2 className="font-semibold my-5">Weekly Weather</h2>
      </Container>
      <WeeklyWeather />
      <Container disableGutters className="flex justify-start">
        <h2 className="font-semibold my-5">Forecast Weather</h2>
      </Container>
      <Forecast />
    </Container>
  );
};

export default Content;
