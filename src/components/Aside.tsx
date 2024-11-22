import { Container, Typography } from "@mui/material";
import { CiLocationOn } from "react-icons/ci";
import cloudy from "../assets/cloudy.jpg";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import { forecastData, weatherData } from "../features/weatherData";
const Aside = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const weather = useSelector(
    (state: RootState) => state.weatherData?.weatherData
  );
  console.log(weather);
  return (
    <>
      {weather?.map((item: any, index: number) => (
        <h1 key={index}>{item.name}</h1>
      ))}

      <Container
        className={`mx-auto p-4 rounded-tl-xl rounded-bl-xl 
        ${theme === "light" ? "bg-[#8eaaeb] text-black" : "bg-[#072772]"}`}
      >
        <Container disableGutters className="flex flex-col justify-start">
          <Container
            disableGutters
            className="flex-row flex gap-1 items-center"
          >
            <CiLocationOn />
            <h4>Belgrade</h4>
          </Container>
          <Container disableGutters>
            <p className="font-light">New Belgrade, Serbia</p>
          </Container>
        </Container>
        <Container className="flex flex-col my-10 text-center">
          <h5>Today, 17th Aug</h5>
          <h4>10:30 pm</h4>
        </Container>
        <img src={cloudy} alt="cloudy" />
        <Container className="text-center my-10">
          <Typography className="mt-2" variant="h4">
            Cloudy, 33&deg;c
          </Typography>
          <Typography className="mt-2">
            Low 29&deg;c | Hight 34&deg;c
          </Typography>
          <Typography>RealFeel 39&deg;c</Typography>
        </Container>
      </Container>
    </>
  );
};

export default Aside;
