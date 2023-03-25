// ** React Imports
import { Fragment, useState, useEffect } from 'react'

// ** Third Party Components
import axios from 'axios'
import classnames from 'classnames'
import {
  Share2,
  GitHub,
  Gitlab,
  Twitter,
  Bookmark,
  Facebook,
  Linkedin,
  CornerUpLeft,
  MessageSquare
} from 'react-feather'

// ** Utils
import { kFormatter } from '@utils'

// ** Custom Components
import Avatar from '@components/avatar'
import Breadcrumbs from '@components/breadcrumbs'

// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  Form,
  Badge,
  Input,
  Label,
  Button,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown
} from 'reactstrap'

// ** Styles
import '@styles/base/pages/page-blog.scss'

// ** Images
import cmtImg from '@src/assets/images/portrait/small/avatar-s-6.jpg'
import MySideBar from './MySidebar'
import { useLocation } from 'react-router-dom'

const DetailCagnotte = ({}) => {
    const [data, setData] = useState(null);
    const location=useLocation();

    useEffect(() => {
        setData(location.state.cagnotte);
    },[])

  const badgeColorsArr = {
    Quote: 'light-info',
    Fashion: 'light-primary',
    Gaming: 'light-danger',
    Video: 'light-warning',
    Food: 'light-success'
  }

  return (
    <Fragment>
      <Breadcrumbs title='Cagnotte' data={[{ title: 'Pages' }, { title: 'Details' }]} />
      <div className='blog-wrapper'>
        <div className='content-detached content-left'>
          <div className='content-body'>
            {data !== null ? (
              <Row>
                <Col sm='12'>
                  <Card className='mb-3'>
                    <CardImg src={data.image} className='img-fluid' top />
                    <CardBody>
                      <CardTitle tag='h4'>{data.titre}</CardTitle>
                      <div className='d-flex'>
                        <div>
                          <small className='text-muted me-25'>Par</small>
                          <small>
                            <a className='text-body' href='/' onClick={e => e.preventDefault()}>
                              {data.utilisateur.nom} {data.utilisateur.prenom}
                            </a>
                          </small>
                        </div>
                      </div>
                      <div className='d-flex'>
                        <div>
                          <h6 className='fw-bolder'>{data.titre}</h6>
                          <CardText className='mb-0'>
                                {data.description}
                          </CardText>
                        </div>
                      </div>
                      <hr className='my-2' />
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            ) : null}
          </div>
        </div>
        <MySideBar />
      </div>
    </Fragment>
  )
}

export default DetailCagnotte
