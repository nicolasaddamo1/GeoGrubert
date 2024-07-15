import React, { useState, useEffect } from 'react';

const CurrentLocation = ({ onLocationUpdate }) => {
    const [location, setLocation] = useState({ lat: null, lng: null });
    const [error, setError] = useState(null);

    useEffect(() => {
        if (navigator.geolocation) {
            const watchId = navigator.geolocation.watchPosition(
                (position) => {
                    const newLocation = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                        accuracy: position.coords.accuracy
                    };
                    setLocation(newLocation);
                    onLocationUpdate(newLocation);
                },
                (err) => {
                    setError(err.message);
                },
                {
                    enableHighAccuracy: true,
                    timeout: 10000,
                    maximumAge: 0
                }
            );

            return () => {
                navigator.geolocation.clearWatch(watchId);
            };
        } else {
            setError("Geolocation is not supported by this browser.");
        }
    }, [onLocationUpdate]);

    return (
        <div>
            <h2>Current Location</h2>
            {error ? (
                <p>Error: {error}</p>
            ) : location.lat && location.lng ? (
                <div>
                    <p>Latitude: {location.lat}</p>
                    <p>Longitude: {location.lng}</p>
                    <p>Accuracy: {location.accuracy} meters</p>
                </div>
            ) : (
                <p>Getting location...</p>
            )}
        </div>
    );
};

export default CurrentLocation;
