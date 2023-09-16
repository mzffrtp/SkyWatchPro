import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { useSelector } from 'react-redux';

export default function MapView () {
    const flightsSlice = useSelector((state)=>state.reducer)
    console.log(flightsSlice);
    return (
        <div>
            <h3>Map View</h3>
            <div className='map-wrapper'>
                <MapContainer center={[59, 15]} zoom={6} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {
                        console.table("flights",flightsSlice.flights)
                    }
                    <Marker position={[59, 15]}>
                    <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    )
}