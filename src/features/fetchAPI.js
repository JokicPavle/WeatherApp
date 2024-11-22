import { createSlice } from "@reduxjs/toolkit";

const API_KEY = "677ab8d59a561f97a0b8f1223c014b44";

export const fetchWeatherData = (params) => {
  const url = new URL("https://api.openweathermap.org/data/2.5/weather");
  url.search = new URLSearchParams({ ...params, appid: API_KEY });

  const response = fetch(url).then((res) => res.json());

  return response;
};

export const fetchForecastData = (params) => {
  const url = new URL("https://api.openweathermap.org/data/2.5/forecast");
  url.search = new URLSearchParams({ ...params, appid: API_KEY });

  const response = fetch(url).then((res) => res.json());

  return response;
};
