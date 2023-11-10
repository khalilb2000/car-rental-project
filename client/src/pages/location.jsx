
import { useState, useEffect } from 'react';
import {
    GoogleMap,
    useJsApiLoader,
    Marker
} from '@react-google-maps/api';

const LocationPage = () => {
    const [selectedLocation, setSelectedLocation] = useState({
        lat: 32.7767,
        lng: -96.7970
    });

    const [userLocation, setUserLocation] = useState({
        lat: 32.7767,
        lng: -96.7970
    });

    const [pickupLocation, setPickupLocation] = useState('');
    const [pickupDate, setPickupDate] = useState('');
    const [time, setTime] = useState('');
    const [dropOffDate, setDropOffDate] = useState('');
    const [setChooseCar] = useState(null);

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyB_5zs__O1tCWMXp1-Pxty1D6cZ0JK3eo8",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'pickupLocation':
                setPickupLocation(value);
                break;
            case 'pickupDate':
                setPickupDate(value);
                break;
            case 'time':
                setTime(value);
                break;
            case 'dropOffDate':
                setDropOffDate(value);
                break;
            default:
                break;
        }
    };

    const handleGoToCars = (car) => {
        setChooseCar(car);
    }

    const onMapClick = (event) => {
        setSelectedLocation({
            lat: event.latLng.lat(),
            lng: event.latLng.lng(),
        });
    };

    const containerStyle = {
        width: '400px',
        height: '400px'
    };

    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
    };

    const success = (pos) => {
        const crd = pos.coords;
        console.log("Your current position is:");
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
        const coords = {
            lat: crd.latitude,
            lng: crd.longitude,
        };

        setUserLocation(coords);
        setSelectedLocation(coords)
    }

    const errors = (err) => {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.permissions
                .query({ name: "geolocation" })
                .then(function (result) {
                    console.log(result);
                    if (result.state === "granted") {
                        //If granted then you can directly call your function here
                        navigator.geolocation.getCurrentPosition(success, errors, options);
                    } else if (result.state === "prompt") {
                        //If prompt then the user will be asked to give permission
                        navigator.geolocation.getCurrentPosition(success, errors, options);
                    } else if (result.state === "denied") {
                        //If denied then you have to show instructions to enable location
                        console.log("Location permission denied.");
                    }
                });
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }, []);

    return (
        <div>
            <h2>Location Picker</h2>

            <div>
                <label>Pick-up location or Zip Code:</label>
                <input
                    type="text"
                    name="pickupLocation"
                    value={pickupLocation}
                    onChange={handleInputChange}
                />
            </div>

            <div>
                <label>Pick-up date:</label>
                <input
                    type="date"
                    name="pickupDate"
                    value={pickupDate}
                    onChange={handleInputChange}
                />
            </div>

            <div>
                <label>Time:</label>
                <input
                    type="time"
                    name="time"
                    value={time}
                    onChange={handleInputChange}
                />
            </div>

            <div>
                <label>Drop-off date:</label>
                <input
                    type="date"
                    name="dropOffDate"
                    value={dropOffDate}
                    onChange={handleInputChange}
                />
            </div>

            {isLoaded ? <GoogleMap
                center={selectedLocation}
                zoom={15}
                onClick={onMapClick}
                mapContainerStyle={containerStyle}
            >
                <Marker position={userLocation} />
            </GoogleMap> : <></>
            }

            <div>
                <h3>Select Your Car Now</h3>
                <button onClick={() => handleGoToCars('Car')}>Car</button>
            </div>
        </div>
    );
};

export default LocationPage;
