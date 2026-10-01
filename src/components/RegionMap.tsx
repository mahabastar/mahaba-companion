import { useEffect, useRef, useState } from "react";

export type MapSpot = {
  name: string;
  to: string;
  lat: number;
  lng: number;
  blurb: string;
};

export type MapLink = { title: string; to: string };

declare global {
  interface Window {
    google?: any;
    __initRegionMaps?: () => void;
  }
}

let mapsLoaderPromise: Promise<void> | null = null;

function loadMapsApi(): Promise<void> {
  if (mapsLoaderPromise) return mapsLoaderPromise;
  mapsLoaderPromise = new Promise((resolve, reject) => {
    if (window.google?.maps) {
      resolve();
      return;
    }
    const key = import.meta.env["VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_BROWSER_KEY"] as string | undefined;
    const channel = import.meta.env["VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_TRACKING_ID"] as string | undefined;
    if (!key) {
      reject(new Error("Google Maps browser key is not configured"));
      return;
    }
    window.__initRegionMaps = () => resolve();
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${key}&loading=async&callback=__initRegionMaps${channel ? `&channel=${channel}` : ""}`;
    script.async = true;
    script.onerror = () => reject(new Error("Failed to load Google Maps"));
    document.head.appendChild(script);
  });
  return mapsLoaderPromise;
}

export function RegionMap({
  spots,
  journeys,
  experiences,
}: {
  spots: MapSpot[];
  journeys: MapLink[];
  experiences: MapLink[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    loadMapsApi()
      .then(() => {
        if (cancelled || !containerRef.current || !window.google?.maps) return;
        const g = window.google;
        const bounds = new g.maps.LatLngBounds();
        spots.forEach((s) => bounds.extend({ lat: s.lat, lng: s.lng }));
        const map = new g.maps.Map(containerRef.current, {
          clickableIcons: false,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: true,
          zoomControl: true,
        });
        map.fitBounds(bounds, 60);

        const infoWindow = new g.maps.InfoWindow();
        spots.forEach((s) => {
          const marker = new g.maps.Marker({ position: { lat: s.lat, lng: s.lng }, map, title: s.name });
          marker.addListener("click", () => {
            const links = [
              `<a href="${s.to}" style="color:#1d4d33;font-weight:600;text-decoration:underline">About ${s.name}</a>`,
              ...journeys.map(
                (j) => `<a href="${j.to}" style="color:#1d4d33;text-decoration:underline">Trip: ${j.title}</a>`,
              ),
              ...experiences.map(
                (e) => `<a href="${e.to}" style="color:#1d4d33;text-decoration:underline">Experience: ${e.title}</a>`,
              ),
            ];
            infoWindow.setContent(
              `<div style="max-width:260px;font-family:inherit;padding:4px">
                <div style="font-size:15px;font-weight:700;color:#222">${s.name}</div>
                <p style="font-size:13px;color:#555;margin:6px 0 8px">${s.blurb}</p>
                <div style="display:flex;flex-direction:column;gap:4px;font-size:13px">${links.join("")}</div>
              </div>`,
            );
            infoWindow.open({ map, anchor: marker });
          });
        });
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });
    return () => {
      cancelled = true;
    };
  }, [spots, journeys, experiences]);

  if (failed) {
    return (
      <div className="flex aspect-[16/9] w-full items-center justify-center rounded-3xl bg-charcoal/5 text-sm text-charcoal/60">
        The map couldn't load right now — the destinations are listed below instead.
      </div>
    );
  }

  return <div ref={containerRef} className="aspect-[16/9] w-full rounded-3xl" aria-label="Map of destinations in this region" />;
}
