import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const locality_id = searchParams.get("locality_id");
  console.log(locality_id);

  const apiKey = process.env.NEXT_PUBLIC_ZOMATO_API_KEY;
  const url = `https://www.weatherunion.com/gw/weather/external/v0/get_locality_weather_data?locality_id=${encodeURIComponent(
    locality_id as string
  )}`;

  try {
    const response = await fetch(url, {
      headers: {
        "X-Zomato-Api-Key": apiKey as string,
      },
    });
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch data" });
  }
}
