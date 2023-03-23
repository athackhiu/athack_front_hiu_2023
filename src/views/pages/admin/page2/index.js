
import { Fragment, useEffect } from 'react'
import { Row, Col, CardBody, CardText , CardTitle } from 'reactstrap'
import GoogleMapReact from 'google-map-react';

import Card from '@components/card-snippet'


const Page2 = () => {
  return (
    <Row>
      <Col md='6' sm='12'>
        <Card title={"go"} >
          <h1>Map</h1>
          <div style={{ height: '100vh', width: '100%' , borderRadius : '50%' }} >
              <GoogleMapReact   bootstrapURLKeys = {{ key:  'AIzaSyBStuzSA7bW5n2wddHiCSNBG-TPWh-sd64' }} defaultCenter = {{ lat: -18.933333, lng: 47.516667 }} center = {{ lat: -18.933333, lng: 47.516667 }}  defaultZoom = {10} options = {{ mapTypeControlOptions: {  mapTypeId: "hybrid" }}}  >
               
              </GoogleMapReact>
            </div>
        </Card>
      </Col>
    </Row>
  )
}

export default Page2;
