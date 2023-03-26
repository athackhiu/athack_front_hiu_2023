
import { Card, CardHeader, CardTitle, CardBody, Col, Input, Form, Button, Label, Row } from 'reactstrap'

import { selectThemeColors } from '@utils'

import Select from 'react-select'

const types = [
  { value: 1, label: 'Produit' },
  { value: 2, label: 'Service' }
]

const AjoutProduit = () => {
  return (
    <Card>
        <CardHeader>
            <CardTitle tag='h4'>Insertion Produit</CardTitle>
        </CardHeader>

        <CardBody>
            <Form>
                <Row className='mb-1'>
                    <Label sm='3' for='nom'>
                    Nom
                    </Label>
                    <Col sm='9'>
                    <Input type='text' name='nom' id='nom' placeholder='Nom...' />
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
                    <Label sm='3' for='password'>
                    Type
                    </Label>
                    <Col sm='9' className='mb-1'>
                    <Select
                        theme={selectThemeColors}
                        className='react-select'
                        classNamePrefix='select'
                        defaultValue={types[0]}
                        options={types}
                        isClearable={false}
                    />
                    </Col>
                </Row>

                <Row className='mb-1'>
                    <Label sm='3' for='duree'  id='timepicker'>
                    Durée
                    </Label>
                    <Col sm='9'>
                    <Input type='time' name='duree' id='duree' placeholder='Duree..'/>  
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
                    <Label sm='3' for='prix'>
                    Prix
                    </Label>
                    <Col sm='9'>
                        <Input type='number' name='prix' id='prix' placeholder='Prix...' />
                    </Col>
                </Row>

                <Row>
                    <Col className='d-flex' md={{ size: 9, offset: 3 }}>
                        <Button className='me-1' color='primary' type='submit' onClick={e => e.preventDefault()}>
                            Enregistrer
                        </Button>
                    </Col>
                </Row>
            </Form>
        </CardBody>
    </Card>
  )
}

export default AjoutProduit;
