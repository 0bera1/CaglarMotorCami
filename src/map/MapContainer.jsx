import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const storeLocation = {
  lat: 38.38854,
  lng: 27.05778,
};

const MapContainer = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyDX2tVBt_g-hLCzzBourCF7XwDLVGCz2uE">
      <GoogleMap
        mapContainerClassName="w-full h-[540px] rounded-xl " // Tüm genişlik ve yükseklik için
        center={storeLocation}
        zoom={19} // Yakınlaştırma seviyesi
      >
        <Marker position={storeLocation} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;

// api : AIzaSyDX2tVBt_g-hLCzzBourCF7XwDLVGCz2uE
