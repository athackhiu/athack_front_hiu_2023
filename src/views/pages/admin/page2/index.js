
import { Fragment, useEffect } from 'react'
import { Row, Col, CardBody, CardText , CardTitle } from 'reactstrap'

import Card from '@components/card-snippet'


const Page2 = () => {
  return (
    <Row>
      <Col md='6' sm='12'>
        <Card title={"go"} >
          <h1>Page2</h1>
        </Card>
      </Col>
    </Row>
  )
}

export default Page2;
