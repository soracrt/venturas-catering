import { NextRequest, NextResponse } from "next/server";

const VENTURAS_ORIGIN = "Shah Alam, Selangor, Malaysia";
const BASE_FEE        = 80;   // RM within 20km
const RATE_PER_KM     = 5;    // RM per km beyond 20km
const FREE_KM         = 20;
const MAX_FEE         = 350;  // cap

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const destination = searchParams.get("destination");

  if (!destination) {
    return NextResponse.json({ error: "destination required" }, { status: 400 });
  }

  const apiKey = process.env.GOOGLE_MAPS_SERVER_KEY;

  // No key configured — return estimated flat rate
  if (!apiKey || apiKey === "your_server_key_here") {
    return NextResponse.json({
      distanceKm: null,
      durationMin: null,
      transportFee: BASE_FEE,
      breakdown: "Flat rate (map API not configured)",
      note: "Add GOOGLE_MAPS_SERVER_KEY to .env.local for live distance pricing.",
    });
  }

  try {
    const url = new URL("https://maps.googleapis.com/maps/api/distancematrix/json");
    url.searchParams.set("origins", VENTURAS_ORIGIN);
    url.searchParams.set("destinations", destination);
    url.searchParams.set("units", "metric");
    url.searchParams.set("region", "my");
    url.searchParams.set("key", apiKey);

    const res  = await fetch(url.toString(), { next: { revalidate: 3600 } });
    const data = await res.json();

    if (data.status !== "OK" || data.rows?.[0]?.elements?.[0]?.status !== "OK") {
      return NextResponse.json({ error: "Could not calculate distance", raw: data.status }, { status: 422 });
    }

    const element    = data.rows[0].elements[0];
    const distanceKm = Math.round(element.distance.value / 1000);
    const durationMin = Math.round(element.duration.value / 60);

    const extraKm     = Math.max(0, distanceKm - FREE_KM);
    const fee         = Math.min(BASE_FEE + extraKm * RATE_PER_KM, MAX_FEE);

    return NextResponse.json({
      distanceKm,
      durationMin,
      transportFee: fee,
      breakdown:
        distanceKm <= FREE_KM
          ? `Flat rate (within ${FREE_KM}km)`
          : `RM ${BASE_FEE} base + ${extraKm}km × RM${RATE_PER_KM}`,
    });
  } catch {
    return NextResponse.json({ error: "Distance lookup failed" }, { status: 500 });
  }
}
