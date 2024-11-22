import Grid from "@mui/material/Grid2";
import Item from "@mui/material/Grid2";
import { FcGlobe } from "react-icons/fc";
import weekDays from "../data/week.js";

interface WeekDays {
  day: string;
}
const Forecast = () => {
  return (
    <Grid container spacing={1} className="flex  flex-row gap-5">
      {weekDays.map((item: WeekDays, index: number) => (
        <Grid key={index} size={1.2}>
          <Item className="rounded p-3 text-center bg-gray-800">
            <h1 className="font-light">{item.day}</h1>
            <FcGlobe className="mx-auto" />
            <h5>30&deg;C</h5>
          </Item>
        </Grid>
      ))}
    </Grid>
  );
};

export default Forecast;
