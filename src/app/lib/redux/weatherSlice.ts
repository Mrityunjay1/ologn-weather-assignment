// store/weatherSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface LocalityWeatherData {
  temperature: number;
  humidity: number;
  wind_speed: number;
  wind_direction: number;
  rain_intensity: number;
  rain_accumulation: number;
}

interface WeatherApiResponse {
  status: string;
  message: string;
  device_type: number;
  locality_weather_data: LocalityWeatherData;
}

interface WeatherState {
  weatherData: WeatherApiResponse | null;
  loading: boolean;
  error: string | null;
}

const initialState: WeatherState = {
  weatherData: null,
  loading: false,
  error: null,
};

// Async thunk for fetching weather data
export const fetchWeatherData = createAsyncThunk(
  "weather/fetchWeatherData",
  async (locality_id: string) => {
    const response = await fetch(
      `https://www.weatherunion.com/gw/weather/external/v0/get_locality_weather_data?locality_id=${encodeURIComponent(
        locality_id
      )}`,
      {
        headers: {
          "X-Zomato-Api-Key": "2bc392f76b6e66923be7b29ae030ead0",
        },
      }
    );
    const data = await response.json();
    return data;
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherData.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.weatherData = null;
      })
      .addCase(fetchWeatherData.fulfilled, (state, action) => {
        if (action.payload.status === "200") {
          state.weatherData = action.payload;
        } else {
          state.weatherData = null;
        }
        state.loading = false;
      })
      .addCase(fetchWeatherData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch weather data";
        state.weatherData = null;
      });
  },
});

export default weatherSlice.reducer;
