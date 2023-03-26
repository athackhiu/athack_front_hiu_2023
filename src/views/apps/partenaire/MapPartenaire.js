
import { Fragment, useEffect, useState } from 'react'
import { Row, Col, CardBody, CardText , CardTitle, Modal, ModalHeader, ModalBody, Label, ModalFooter, Input, Button } from 'reactstrap'
import GoogleMapReact from 'google-map-react';

import Card from '@components/card-snippet'

const tabMarkers=[
  { id:1, lat: 37.820197, lng: -122.419416 ,title: "Origin"},
  { id:2,lat: 37.8199286, lng: -122.4782551 ,title: "Destination"},
  { id:3,lat: 37.8199300, lng: -122.419500 ,title: "Destination2"}
]

const MapPartenaire = () => {
  const [modal, setModal] = useState(null);
  const [directions,setDirections] = useState(null);
  const [currentShop,setCurrentShop]=useState(null);

  const toggleModal = id => {
    if (modal !== id) {
      setModal(id)
    } else {
      setModal(null)
    }
  }
  // const renderMarker = (array,mark,map,maps) => {
  //   array.push(new maps.Marker({
  //     position: { lat: mark.lat, lng: mark.lng },
  //     map,
  //     title: mark.title
  //   }));
  // }

  const renderAllMarkers = (map, maps, shops) => {
    shops.forEach(shop => {
      const marker = new maps.Marker({
        position: { lat: parseFloat(shop.lat), lng: parseFloat(shop.lng) },
        map,
        title: shop.title,
        label: {
          text: shop.title,
          color: "white",
          strokeWeight: 1,
          fontWeight: "bold",
        }
      });
  
      marker.addListener('click', () => {
        setCurrentShop(shop);
        toggleModal(1);
      });
    });
  }


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

  return (
    <div>
    <Row>
      <Col md='12' sm='12'>
        <Card title={"Avec nous payez vos factures en ligne"} >
          <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyBStuzSA7bW5n2wddHiCSNBG-TPWh-sd64" }}
            yesIWantToUseGoogleMapApiInternals={true}
            defaultCenter={{ lat: 37.774929, lng: -122.419416 }}
            defaultZoom={12}
            onGoogleApiLoaded={({ map, maps }) => renderAllMarkers(map, maps,tabMarkers)}
          >
          </GoogleMapReact>

          </div>
        </Card>
      </Col>
    </Row>
        <Modal
                isOpen={modal === 1}
                toggle={() => toggleModal(1)}
                className='modal-dialog-centered modal-lg'
                modalClassName={'modal-primary'}
                key={1}
            >
            <ModalHeader toggle={() => toggleModal(1)}>Paiement Partenaire</ModalHeader>
            <ModalBody>
                <div className='mb-2'>
                    <Label className='form-label' for='numero'>
                        Motif:
                    </Label>
                    <Input type='text' id='numero' placeholder='....' />
                </div>
                <div className='mb-2'>
                    <Label className='form-label' for='montant'>
                        Montant:
                    </Label>
                    <Input type='number' id='montant' placeholder='.......... Ar' />
                </div>    
            </ModalBody>
            <ModalFooter>
                <Button color='primary'>Payer</Button>
            </ModalFooter>
            </Modal>
    
    </div>
    
  )
}

export default MapPartenaire;
