import { MdMyLocation } from "react-icons/md";
import { FaSearchLocation } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { search } from "../features/searchSlice";
import { forecastData, weatherData } from "../features/weatherData";
import { fetchWeatherData, fetchForecastData } from "../features/fetchAPI";
const SearchInput = () => {
  const searchValue = useSelector((state: RootState) => state.search.value);
  const dispatch = useDispatch();

  const handleFetch = async () => {
    //WEATHER DATA
    const dataWeatherFetch = await fetchWeatherData({ q: searchValue }).then(
      (data: object) => {
        return data;
      }
    );
    dispatch(weatherData(dataWeatherFetch));

    // FORECAST DATA
    const dataForecastFatch = await fetchForecastData({ q: searchValue }).then(
      (data: object) => {
        return data;
      }
    );

    dispatch(forecastData(dataForecastFatch));
  };

  return (
    <div className="rounded bg-slate-700 flex gap-3 items-center justify-center p-2 w-[300px]">
      <div className="bg-cyan-900 p-2 rounded">
        <FaSearchLocation
          className="cursor-pointer"
          onClick={() => handleFetch()}
        />
      </div>
      <input
        onChange={(e) => dispatch(search(e.target.value))}
        className="bg-slate-700 focus:outline-none"
        type="text"
        placeholder="Search a city"
      />
      <MdMyLocation className="cursor-pointer" />
    </div>
  );
};

export default SearchInput;
