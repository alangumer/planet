import dynamic from "next/dynamic";

const MapPage = dynamic(() => import("../../components/Map"), {
  ssr: false,
});

export default MapPage;
