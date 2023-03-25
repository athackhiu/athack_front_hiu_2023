// ** React Imports
import { Link } from 'react-router-dom'

// ** Reactstrap Imports
import { Card, CardBody, Button } from 'reactstrap'
import ModalPaiement from './ModalPaiement'

const MyAction = ({ id }) => {
  return (
    <Card className='invoice-action-wrapper'>
      <CardBody>
            <ModalPaiement/>
      </CardBody>
    </Card>
  )
}

export default MyAction
