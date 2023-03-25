import {
    Row,
    Col,
    Card,
    CardBody,
    CardText,
    CardTitle,
    CardImg,
    Badge,
    Pagination,
    PaginationItem,
    PaginationLink
  } from 'reactstrap'

import '@styles/base/pages/page-blog.scss'
import { Link } from 'react-router-dom';
  


const CardCagnotte=({item})=>{
    return (
        <Col key={item.titre} md='6'>
          <Card>
            <Link to={`/user/detailcagnotte/${item.id}`}>
              <CardImg className='img-fluid' src={item.image} alt={item.titre} top />
            </Link>
            <CardBody>
              <CardTitle tag='h4'>
                <Link className='blog-title-truncate text-body-heading' to={`/user/detailcagnotte/${item.id}`}>
                  {item.titre}
                </Link>
              </CardTitle>
              <div className='d-flex'>
                <div>
                  <small className='text-muted me-25'>Par </small>
                  <small>
                    <a className='text-body' href='/' onClick={e => e.preventDefault()}>
                      {item.utilisateur.nom} {item.utilisateur.prenom}
                    </a>
                  </small>
                  <span className='text-muted ms-50 me-25'>|</span>
                </div>
              </div>
              <hr />
              <div className='d-flex justify-content-between align-items-center'>
                <Link className='fw-bold' to={`/user/detailcagnotte/${item.id}`} state={{cagnotte:item}}>
                    En savoir plus
                </Link>
              </div>
            </CardBody>
          </Card>
        </Col>
    );
}

export default CardCagnotte;