import { createSlice } from "@reduxjs/toolkit";

interface WeatherState {
  weatherData: object;
}

const initialState: WeatherState = {
  weatherData: {},
};

const weatherDataSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    weatherData(state, action) {
      state.weatherData = action.payload;
    },
    forecastData: (state, action) => {
      state.weatherData = action.payload;
    },
  },
});

export const { weatherData, forecastData } = weatherDataSlice.actions;
export default weatherDataSlice.reducer;
