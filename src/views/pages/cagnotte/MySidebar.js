import { Link } from 'react-router-dom'
import { useEffect, useState, Fragment } from 'react'

import * as Icon from 'react-feather'

import { InputGroup, Input, InputGroupText } from 'reactstrap'

const MySideBar = ({}) => {

  const CategoryColorsArr = {
    Quote: 'light-info',
    Fashion: 'light-primary',
    Gaming: 'light-danger',
    Video: 'light-warning',
    Food: 'light-success'
  }

  return (
    <div className='sidebar-detached sidebar-right'>
      <div className='sidebar'>
        <div className='blog-sidebar right-sidebar my-2 my-lg-0'>
          <div className='right-sidebar-content'>
            <div className='blog-search'>
              <InputGroup className='input-group-merge'>
                <Input placeholder='Search here' />
                <InputGroupText>
                  <Icon.Search size={14} />
                </InputGroupText>
              </InputGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MySideBar
