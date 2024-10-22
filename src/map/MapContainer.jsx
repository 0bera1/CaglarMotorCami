import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '1600px',
    height: '220px'
  };
  
  // Filiz Sk. No:9, 35330 Balçova/İzmir için koordinatlar
  const storeLocation = {
    lat: 38.38854, // Enlem
    lng: 27.05778  // Boylam
  };
  

const MapContainer = () => {
    return (
        <LoadScript googleMapsApiKey="AIzaSyDX2tVBt_g-hLCzzBourCF7XwDLVGCz2uE"> {/* Buraya Google API anahtarını ekle */}
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={storeLocation}
            zoom={19} // Haritanın yakınlaştırma düzeyi
          >
            {/* Dükkan konumu için bir işaretçi */}
            <Marker position={storeLocation} />
          </GoogleMap>
        </LoadScript>
      );
};

export default MapContainer;


// api : AIzaSyDX2tVBt_g-hLCzzBourCF7XwDLVGCz2uE