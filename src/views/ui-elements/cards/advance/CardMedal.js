// ** Reactstrap Imports
import { Card, CardBody, CardText, Button } from 'reactstrap'

// ** Images
import medal from '@src/assets/images/illustration/badge.svg'

const CardMedal = () => {
  return (
    <Card className='card-congratulations-medal'>
      <CardBody>
        <h5>Felicitation Liantsoa !! 🎉 </h5>
        <CardText className='font-small-3'> Vous avec obtenu <strong>50.%</strong> de bonus money grace a votre derniere transactions</CardText>
        <h3 className='mb-75 mt-2 pt-50'>
          <a href='/' onClick={e => e.preventDefault()}>
            120.000 Ar
          </a>
        </h3>
        <Button color='primary'>View Sales</Button>
        
      </CardBody>
    </Card>
  )
}

export default CardMedal
