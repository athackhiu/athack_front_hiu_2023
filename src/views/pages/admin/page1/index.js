
import { Fragment, useEffect } from 'react'
import { Row, Col, CardBody, CardText , CardTitle } from 'reactstrap'

import Card from '@components/card-snippet'


const Page1 = () => {
  return (
    <Row>
      <Col md='6' sm='12'>
        <Card title={"go"} >
          <h1>Page1</h1>
        </Card>
      </Col>
    </Row>
  )
}

export default Page1;
