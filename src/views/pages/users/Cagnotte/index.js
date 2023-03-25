
import { Fragment, useEffect } from 'react'
import { Row, Col, CardBody, CardText , CardTitle } from 'reactstrap'

import Card from '@components/card-snippet'
import CagnotteCard from './CagnotteCard'


const Cagnotte = () => {
  return (
    <Row>
      <Col md='10' sm='12'>
        <CagnotteCard/>
      </Col>
    </Row>
  )
}

export default Cagnotte;
