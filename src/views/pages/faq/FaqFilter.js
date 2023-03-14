// ** Icons Imports
import { Search } from 'react-feather'

// ** Reactstrap Imports
import { Card, CardBody, CardText, Form, Input, InputGroup, InputGroupText } from 'reactstrap'

const FaqFilter = ({ searchTerm, setSearchTerm, getFAQData }) => {
  const handleFaqFilter = e => {
    setSearchTerm(e.target.value)
    getFAQData(e.target.value)
  }

  return (
    <div id='faq-search-filter'>
      <Card
        className='faq-search'
        style={{
          backgroundImage: `url('@src/assets/images/banner/banner.png')`
        }}
      >
        <CardBody className='text-center'>
          <h2 className='text-primary'>Répondons à quelques questions</h2>
          <CardText className='mb-2'>ou choisissez une catégorie pour trouver rapidement l’aide dont vous avez besoin</CardText>
          <Form className='faq-search-input' onSubmit={e => e.preventDefault()}>
            <InputGroup className='input-group-merge'>
              <InputGroupText>
                <Search size={14} />
              </InputGroupText>
              <Input value={searchTerm} onChange={e => handleFaqFilter(e)} placeholder='recherche faq...' />
            </InputGroup>
          </Form>
        </CardBody>
      </Card>
    </div>
  )
}

export default FaqFilter
