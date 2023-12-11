// import { Link, useNavigate } from 'react-router-dom'
// import { Container, Button, Form, Row, Col } from 'react-bootstrap';
// import ProgressBar from 'react-bootstrap/ProgressBar';
// import { useState, useEffect, } from 'react';
// import {
//     GoogleMap,
//     useJsApiLoader,
//     Marker
// } from '@react-google-maps/api';



// const containerStyle = {
//     width: '25rem',
//     height: '25rem',
//     border: "5px solid gray"
// };

// const LocationPage = (props) => {

//     const navigate = useNavigate();
//     //This is all google map realte data and variables
//     ///////////////////////////////////////////////////////////////////////////////////////
//     const [selectedLocation, setSelectedLocation] = useState({
//         lat: 32.7767,
//         lng: -96.7970
//     });

//     const [userLocation, setUserLocation] = useState({
//         lat: 32.7767,
//         lng: -96.7970
//     });
//     const { isLoaded } = useJsApiLoader({
//         id: 'google-map-script',
//         googleMapsApiKey: "AIzaSyB_5zs__O1tCWMXp1-Pxty1D6cZ0JK3eo8",
//     });
//     const onMapClick = (event) => {
//         setSelectedLocation({
//             lat: event.latLng.lat(),
//             lng: event.latLng.lng(),
//         });
//     };
//     const options = {
//         enableHighAccuracy: true,
//         timeout: 5000,
//         maximumAge: 0,
//     };
//     const success = (pos) => {
//         const crd = pos.coords;
//         const coords = {
//             lat: crd.latitude,
//             lng: crd.longitude,
//         };

//         setUserLocation(coords);
//         setSelectedLocation(coords)
//     }
//     const errors = (err) => {
//         console.warn(`ERROR(${err.code}): ${err.message}`);
//     }
//     useEffect(() => {
//         if (navigator.geolocation) {
//             navigator.permissions
//                 .query({ name: "geolocation" })
//                 .then(function (result) {
//                     console.log(result);
//                     if (result.state === "granted") {
//                         //If granted then you can directly call your function here
//                         navigator.geolocation.getCurrentPosition(success, errors, options);
//                     } else if (result.state === "prompt") {
//                         //If prompt then the user will be asked to give permission
//                         navigator.geolocation.getCurrentPosition(success, errors, options);
//                     } else if (result.state === "denied") {
//                         //If denied then you have to show instructions to enable location
//                         console.log("Location permission denied.");
//                     }
//                 });
//         } else {
//             console.log("Geolocation is not supported by this browser.");
//         }
//     }, []);

//     ///////////////////////////////////////////////////////////////////////////////////////

//     const [zipCode, setZipCode] =useState('');
//     const [pickupDate, setPickup] = useState('');
//     const [dropOffDate, setDropOff] = useState('');


//     return (

//         <>


//             {/* /////////////////////////////////////////////////////////////////////////////////////// */}
//             {/* This is progress bar  */}
//             <Container className=''>
//                 <h1>Step:1 </h1>
//                 <ProgressBar animated now={33} />
//             </Container>
//             {/* /////////////////////////////////////////////////////////////////////////////////////// */}
//             {/* This is form for the user info */}

//             <Form as={Row} className="mb-5 mt-5">
//                 <Col className="mb-3 col-lg-12 col-sm-2 m-2">
//                     <Form.Group as={Row} controlId="formGridLocation">
//                         <Form.Label>Zip Code</Form.Label>
//                         <Form.Control
//                             type="text"
//                             placeholder="Enter location"
//                             name="zipCode"
//                             onChange={(event)=> setZipCode(event.target.value)}
//                         />
//                     </Form.Group>

//                     <Form.Group as={Row} controlId="formGridDate">
//                         <Form.Label>Pick-up date</Form.Label>
//                         <Form.Control
//                             type="date"
//                             name="pickupDate"
//                             onChange={(event)=> setPickup(event.target.value)}
//                         />
//                     </Form.Group>

//                     <Form.Group as={Row} controlId="formGridDropOffDate">
//                         <Form.Label>Drop-off date</Form.Label>
//                         <Form.Control
//                             type="date"
//                             name="dropOffDate"
//                             onChange={(event)=> setDropOff(event.target.value)}
//                         />
//                     </Form.Group>
//                 </Col>

//                 <Button
//                     onClick={()=>{navigate('/product-info', {replace: true, state:{zipCode, pickupDate, dropOffDate}})}}
//                     variant="primary"
//                     type="submit"
//                     className='col-lg-2 m-4'
//                 >

//                     Submit
//                 </Button>
//             </Form>

//             {/* /////////////////////////////////////////////////////////////////////////////////////// */}
//             <div className="col-4 d-none d-md-block">
//                 {
//                     isLoaded ?
//                         <GoogleMap
//                             center={selectedLocation}
//                             zoom={15}
//                             onClick={onMapClick}
//                             mapContainerStyle={containerStyle}>
//                             <Marker position={userLocation} />
//                         </GoogleMap> : <></>
//                 }
//             </div>
//             {/* /////////////////////////////////////////////////////////////////////////////////////// */}

//         </>
//     );
// };

// export default LocationPage;
