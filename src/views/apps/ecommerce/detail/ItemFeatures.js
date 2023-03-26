// ** Icon Imports
import { Award, Clock, Shield } from 'react-feather'
// ** Reactstrap Imports
import { Row, Col, CardText } from 'reactstrap'

const ItemFeatures = () => {
  return (
    <div className='item-features'>
      <Row className='text-center'>
        <Col className='mb-4 mb-md-0' md='4' xs='12'>
          <div className='w-75 mx-auto'>
            <Award />
            <h4 className='mt-2 mb-1'>Original</h4>
            <CardText>Une idée novatrice qui apporte une approche unique et nouvelle.</CardText>
          </div>
        </Col>
        <Col className='mb-4 mb-md-0' md='4' xs='12'>
          <div className='w-75 mx-auto'>
            <Clock />
            <h4 className='mt-2 mb-1'>Rapide</h4>
            <CardText>Une solution efficace qui permet d'obtenir des résultats rapidement.</CardText>
          </div>
        </Col>
        <Col className='mb-4 mb-md-0' md='4' xs='12'>
          <div className='w-75 mx-auto'>
            <Shield />
            <h4 className='mt-2 mb-1'>Securisé</h4>
            <CardText>Une méthode fiable et sûre qui garantit la protection des données confidentielles.</CardText>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default ItemFeatures
