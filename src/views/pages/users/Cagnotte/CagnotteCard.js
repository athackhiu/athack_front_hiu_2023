
import { Card, CardHeader, CardTitle, CardBody, Col, Input, Form, Button, Label, Row } from 'reactstrap'

const CagnotteCard = () => {
  return (
    <Card>
        <CardHeader>
            <CardTitle tag='h4'>Cagnotte</CardTitle>
        </CardHeader>

        <CardBody>
            <Form>
                <Row className='mb-1'>
                    <Label sm='3' for='titre'>
                    Titre
                    </Label>
                    <Col sm='9'>
                    <Input type='text' name='titre' id='titre' placeholder='Titre...' />
                    </Col>
                </Row>

                <Row className='mb-1'>
                    <Label sm='3' for='description'>
                    Description
                    </Label>
                    <Col sm='9'>
                    <Input type='textarea' name='description' id='exampleText' rows='3' placeholder='Description...' />
                    </Col>
                </Row>
                
                <Row className='mb-1'>
                    <Label sm='3' for='montant'>
                    Montant
                    </Label>
                    <Col sm='9'>
                    <Input type='number' name='montant' id='montant' placeholder='Montant...' />
                    </Col>
                </Row>

                <Row className='mb-1'>
                    <Label sm='3' for='image'>
                    Image
                    </Label>
                    <Col sm='9'>
                    <Input type='file' name='image' id='image' placeholder='Image...' />
                    </Col>
                </Row>

                <Row className='mb-1'>
                </Row>

                <Row>
                    <Col className='d-flex' md={{ size: 9, offset: 3 }}>
                        <Button className='me-1' color='primary' type='submit' onClick={e => e.preventDefault()}>
                            Valider
                        </Button>
                    </Col>
                </Row>
            </Form>
        </CardBody>
    </Card>
  )
}

export default CagnotteCard;
