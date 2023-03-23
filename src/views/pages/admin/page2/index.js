
import { Fragment, useEffect, useState } from 'react'
import { Row, Col, CardBody, CardText , CardTitle } from 'reactstrap'
import GoogleMapReact from 'google-map-react';
import { DirectionsRenderer, Marker } from "react-google-maps";

import Card from '@components/card-snippet'

const Page2 = () => {

  const [directions,setDirections] = useState(null);

  useEffect(()=> {

    const directionsService = new window.google.maps.DirectionsService();
    const origin = new window.google.maps.LatLng(37.774929, -122.419416);
    const destination = new window.google.maps.LatLng(37.8199286,-122.4782551);
    
    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: window.google.maps.TravelMode.DRIVING
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          setDirections(result);
        } else {
          console.error(`error fetching directions \${result}`);
        }
      }
    );
  }, []);

  const renderMarkers = (map, maps) => {
    new maps.Marker({
      position: { lat: 37.774929, lng: -122.419416 },
      map,
      title: 'Origin'
    });
    new maps.Marker({
      position: { lat: 37.8199286, lng: -122.4782551 },
      map,
      title: 'Destination'
    });
  }


  return (
    <Row>
      <Col md='12' sm='12'>
        <Card title={"go"} >
          <h1>Map</h1>
          <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: 'AIzaSyBStuzSA7bW5n2wddHiCSNBG-TPWh-sd64', libraries: ['directions'] }}
              defaultCenter={{ lat: 37.774929, lng: -122.419416 }}
              defaultZoom={12}
              yesIWantToUseGoogleMapApiInternals={true}
              onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
            >
               
              
              {directions && <DirectionsRenderer directions={directions} />}
            </GoogleMapReact>
          </div>
        </Card>
      </Col>
    </Row>
  )
}

export default Page2;
