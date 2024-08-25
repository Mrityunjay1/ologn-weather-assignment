"use client";

import { useAppDispatch, useAppSelector } from "@/app/lib/redux/hook";
import { fetchWeatherData } from "@/app/lib/redux/weatherSlice";
import {
  CompassIcon,
  DropletIcon,
  ThermometerIcon,
  UmbrellaIcon,
  WindIcon,
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect } from "react";

const WeatherDetails = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { weatherData, loading, error } = useAppSelector(
    (state) => state.weather
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchWeatherData(id as string));
    }
  }, [id, dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!weatherData) {
    return (
      <>
        <p className="text-2xl text-center">
          No data found for the selected locality.
        </p>
        <div className="flex items-center justify-center mt-6">
          <Link
            href="/"
            className="bg-blue-500 text-white px-4 py-2 rounded-full"
          >
            Back to Home
          </Link>
        </div>
      </>
    );
  }
  return (
    <div>
      <div className="grid gap-4">
        <div className="text-2xl text-center font-medium">Weather Details</div>
        <div className="bg-muted  rounded-lg p-4 grid grid-cols-2 gap-4 ">
          {weatherData?.locality_weather_data && (
            <>
              <div className="flex items-center justify-center gap-2">
                <DropletIcon className="w-6 h-6" />
                <div>
                  <div className="text-sm text-muted-foreground">Humidity</div>
                  <div className="text-xl font-bold">
                    {weatherData.locality_weather_data.humidity}%
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2">
                <WindIcon className="w-6 h-6" />
                <div>
                  <div className="text-sm text-muted-foreground">
                    Wind Speed
                  </div>
                  <div className="text-xl font-bold">
                    {weatherData.locality_weather_data.wind_speed} m/s
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2">
                <UmbrellaIcon className="w-6 h-6" />
                <div>
                  <div className="text-sm text-muted-foreground">
                    Rain Intensity
                  </div>
                  <div className="text-xl font-bold">
                    {weatherData.locality_weather_data.rain_intensity} mm/h
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2">
                <ThermometerIcon className="w-6 h-6" />
                <div>
                  <div className="text-sm text-muted-foreground">
                    Rain Accumulation
                  </div>
                  <div className="text-xl font-bold">
                    {weatherData.locality_weather_data.rain_accumulation} mm
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CompassIcon className="w-6 h-6" />
                <div>
                  <div className="text-sm text-muted-foreground">
                    Wind Direction
                  </div>
                  <div className="text-xl font-bold">
                    {weatherData.locality_weather_data.wind_direction}°
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="flex items-center justify-center mt-6">
        <Link
          href="/"
          className="bg-blue-500 text-white px-4 py-2 rounded-full"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};
export default WeatherDetails;
