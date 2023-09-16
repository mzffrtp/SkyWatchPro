import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { useSelector } from 'react-redux';
import Leaflet from "leaflet"
import icon from "../../assets/plane-icon.png"

export default function MapView () {
    const flightsSlice = useSelector((state)=>state.reducer)
    const planeIcon = Leaflet.icon ({
        iconUrl:icon,
        iconSize:[50,50]
    })
    return (
        <div>
            <h3>Map View</h3>
            <div className='map-wrapper'>
                <MapContainer center={[59.21865, 15.00065 ]} zoom={6} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                   {
                    flightsSlice.flights.map((flight)=> (
                        <Marker
                        icon={planeIcon}
                        key={flight.id}
                        position={[flight.lat, flight.lng]}>
                    <Popup>
                    <div className='popup'>
                        <span>Code:{flight.code}</span>
                        <button>Details</button>
                    </div>
                    </Popup>
                    </Marker>
                    ))
                   }
                    
                </MapContainer>
            </div>
        </div>
    )
}