'use client'

import React, { useRef, useEffect, useState } from 'react';
import 'maplibre-gl/dist/maplibre-gl.css';
import './map.css';
import maplibregl from 'maplibre-gl';

const Map: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<maplibregl.Map | null>(null);
  const [lat] = useState<number>(-1.313333);
  const [lng] = useState<number>(36.7365);
  const [zoom] = useState<number>(9);
  const [API_KEY] = useState<string>(process.env.NEXT_PUBLIC_MAPTILER_API_KEY as string);  

  useEffect(() => {
    if (map.current) return; // stops map from initializing more than once

    if (mapContainer.current) {
        
      map.current = new maplibregl.Map({
        container: mapContainer.current,
        style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
        center: [lng, lat],
        zoom: zoom,
      });
    }
  }, [API_KEY, lng, lat, zoom]);

  return (
    <div className="map-wrap my-3">
      <div ref={mapContainer} className="map" />
    </div>
  );
};

export default Map;
