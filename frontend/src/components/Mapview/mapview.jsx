import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MapView = ({ location }) => {
    if (!location || location.lat === null || location.lng === null) {
        return <p>Loading map...</p>;
    }

    return (
        <div>
            <MapContainer center={[location.lat, location.lng]} zoom={13} style={{ height: "400px", width: "100%" }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[location.lat, location.lng]}>
                    <Popup>
                        Your location
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default MapView;
