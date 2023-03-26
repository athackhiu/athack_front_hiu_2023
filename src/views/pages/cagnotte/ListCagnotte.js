import { Link } from 'react-router-dom'
import { Fragment, useState, useEffect } from 'react'

// ** Third Party Components
import axios from 'axios'
import classnames from 'classnames'
import { MessageSquare } from 'react-feather'

// ** Custom Components
import Avatar from '@components/avatar'
import Breadcrumbs from '@components/breadcrumbs'

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
import CardCagnotte from './CardCagnotte'
import BlogSidebar from '../blog/BlogSidebar'
import MySideBar from './MySidebar'


const dataCagnotte=[
    {
        id:1,
        utilisateur:{nom:"Doe",prenom:"John"},
        montant:100,
        titre:"Cagnotte 1",
        description:"Cagnotte 1",
        image:"",
        estValide:true
    },
    {
        id:2,
        utilisateur:{nom:"Doe",prenom:"John"},
        montant:100,
        titre:"Cagnotte 2",
        description:"Cagnotte 2",
        image:"",
        estValide:true
    },
    {
        id:3,
        utilisateur:{nom:"Doe",prenom:"John"},
        montant:300,
        titre:"Cagnotte 3",
        description:"Cagnotte 3",
        image:"",
        estValide:true
    },
    {
        id:4,
        utilisateur:{nom:"Doe",prenom:"John"},
        montant:400,
        titre:"Cagnotte 4",
        description:"Cagnotte 4",
        image:"",
        estValide:true
    },
    {
        id:5,
        utilisateur:{nom:"Doe",prenom:"John"},
        montant:500,
        titre:"Cagnotte 5",
        description:"Cagnotte 5",
        image:"",
        estValide:true
    }
]

const ListCagnotte=()=>{
    return (
        <Fragment>
            <Breadcrumbs title='Cagnotte' data={[{ title: 'Pages' }, { title: 'Liste' }]} />
            <div className='blog-wrapper'>
                <div className='content-detached content-left'>
                    <div className='content-body'>
                        <Row>
                        {dataCagnotte.map(item => {
                            return (
                                <CardCagnotte item={item}/>
                            )
                        })}
                        </Row>
                    </div>
                </div>
                <MySideBar/>
            </div>
        </Fragment>
    )
}

export default ListCagnotte;