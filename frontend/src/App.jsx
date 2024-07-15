import React, { useState } from 'react';
//components
import MapView from './components/Mapview/mapview';
import CurrentLocation from './components/CurrentLocation/CurrentLocation';
//styles
import './App.css';

function App() {
    const [location, setLocation] = useState({ lat: null, lng: null });

    const handleLocationUpdate = (newLocation) => {
        setLocation(newLocation);
    };

    return (
        <>
            <div id="map">
                <CurrentLocation onLocationUpdate={handleLocationUpdate} />
                <MapView location={location} />
            </div>
        </>
    );
}

export default App;
