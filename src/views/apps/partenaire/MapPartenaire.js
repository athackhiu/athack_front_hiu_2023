
import { Fragment, useEffect, useState } from 'react'
import { Row, Col, CardBody, CardText , CardTitle, Modal, ModalHeader, ModalBody, Label, ModalFooter, Input, Button } from 'reactstrap'
import GoogleMapReact from 'google-map-react';

import Card from '@components/card-snippet'


const MapPartenaire = () => {

  const [modal, setModal] = useState(null);
  const [directions,setDirections] = useState(null);
  const [currentShop,setCurrentShop] = useState(null);

  const [tabMarkers,setTabMarkers] = useState([
]);

  const toggleModal = id => {
    if (modal !== id) {
      setModal(id)
    } else {
      setModal(null)
    }
  }


  const renderAllMarkers = (map, maps, shops) => {
    if (!shops || shops.length === 0) return; // Add this line to handle empty or null shops array
   
  
    shops.forEach(shop => {
    
      console.log(shop);
      const marker = new maps.Marker({
        position: { lat: parseFloat(shop.latitude), lng: parseFloat(shop.longitude) },
        map,
        title: shop.nom,
        label: {
          text: shop.nom,
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
  


  useEffect(() => {
      fetchPartenairesAPI().then(e=>{
        setTabMarkers(e)
      })
  }, []);


  async function fetchPartenairesAPI() {
    try {
      const response = await fetch('https://athack-back-hiu-2023.vercel.app/partenaires/');

      if (!response.ok) {
        const error = await response.json();
        console.error('Error:', error);
        return [];
      }
      const data = await response.json();
      // console.log(data);
      return data;
    } catch (err) {
      console.error('Error:', err);
      return [];
    }
  }



  return (
    <div>
    <Row>
      <Col md='12' sm='12'>
        <Card title={"Avec nous payez vos factures en ligne"} >
          <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyBStuzSA7bW5n2wddHiCSNBG-TPWh-sd64" }}
            yesIWantToUseGoogleMapApiInternals={true}
            defaultCenter={{ lat: -20.933333, lng: 47.516667 }}
            defaultZoom={7}
            onGoogleApiLoaded={({ map, maps }) => {
              fetchPartenairesAPI().then(e => {
                return renderAllMarkers(map, maps,e)
              })
            }}
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
