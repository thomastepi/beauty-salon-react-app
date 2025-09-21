import React, { useState } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { Box, Heading } from "@chakra-ui/react";
import "../assets/css/mapStyle.css";

function MapWithInfoWindow({ w = "100%", h = "400px" }) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const [selectedMarker, setSelectedMarker] = useState(null);

  const containerStyle = {
    width: w,
    height: h,
  };

  const center = {
    lat: 5.976,
    lng: 10.166,
  };

  const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${center.lat},${center.lng}`;

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
  };

  const handleInfoWindowClose = () => {
    setSelectedMarker(null);
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      mapContainerClassName="black-and-white-map"
    >
      {selectedMarker && (
        <InfoWindow
          position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
          onCloseClick={handleInfoWindowClose}
        >
          <Box color="black" textAlign="center">
            <Heading size="sm">{selectedMarker.title}</Heading>
            <a
              style={{
                textDecoration: "underline",
                cursor: "pointer",
              }}
              aria-label="Get Directions"
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {selectedMarker.description}
            </a>
          </Box>
        </InfoWindow>
      )}
      <Marker
        position={{ lat: 5.976, lng: 10.166 }}
        onClick={() =>
          handleMarkerClick({
            lat: 5.976,
            lng: 10.166,
            title: "Annette's Beauty & SPA",
            description: "Get Directions",
          })
        }
      />
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MapWithInfoWindow);
