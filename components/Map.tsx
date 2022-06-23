import React from "react";
import "leaflet/dist/leaflet.css";
import {
  MapContainer as RLMapContainer,
  TileLayer,
  GeoJSON,
} from "react-leaflet";
import { useQuery } from "react-query";
import { CircularProgress } from "@mui/material";
import { getTract } from "../utils/api";
import { useRouter } from "next/router";

type Props = {
  id: number;
};

export default function Map(): JSX.Element {
  const router = useRouter();

  if (!router.isReady) return <CircularProgress />;

  return <MapContainer id={parseInt(router.query.id as string)} />;
}

function MapContainer({ id }: Props): JSX.Element {
  const { isLoading, error, data } = useQuery<any, Error>("tract", () =>
    getTract(id)
  );

  if (isLoading) return <CircularProgress />;

  if (error) return <div>An error has occurred: {error.message}</div>;

  const center = { lat: data!.INTPTLAT, lng: data!.INTPTLON };

  return (
    <RLMapContainer center={center} zoom={14}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <GeoJSON data={data.geom} />
    </RLMapContainer>
  );
}
