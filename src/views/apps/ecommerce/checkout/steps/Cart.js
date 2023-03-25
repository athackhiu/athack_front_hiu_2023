// ** React Imports
import { Link } from 'react-router-dom'

// ** Third Party Components
import classnames from 'classnames'
import InputNumber from 'rc-input-number'
import { X, Heart, Star, Plus, Minus } from 'react-feather'

// ** Reactstrap Imports
import { Card, CardBody, CardText, Button, Badge, InputGroup, Input, InputGroupText } from 'reactstrap'

// ** Styles
import '@styles/react/libs/input-number/input-number.scss'
import { useEffect, useState } from 'react'

const Cart = props => {
  // ** Props
  const { stepper, deleteCartItem, dispatch, addToWishlist, deleteWishlistItem, getCartItems } = props

  // ** Function to convert Date
  const formatDate = (value, formatting = { month: 'short', day: 'numeric', year: 'numeric' }) => {
    if (!value) return value
    return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value))
  }

  // ** Funciton Function to toggle wishlist item
  const handleWishlistClick = (id, val) => {
    if (val) {
      dispatch(deleteWishlistItem(id))
    } else {
      dispatch(addToWishlist(id))
    }
    dispatch(getCartItems())
  }

  // ** useEffect
  const [produit, setProduct] = useState();

  useEffect(() => {
    console.log("huhuhuhu");
    setProduct(JSON.parse(localStorage.getItem("cartlist")));
    //console.log(JSON.parse(localStorage.getItem("cartlist")));
    /*if (localStorage.getItem("cartlist")) {
      console.log("huhuhuhuhu");
      console.log(JSON.parse(localStorage.getItem("cartlist")));
      
    }*/
  }, [])


  // ** Render cart items
  const renderCart = () => {
    return produit.map(item => {
      return (
        <Card key={item.nom} className='ecommerce-card'>
          <div className='item-img'>
            <Link to={`/apps/ecommerce/product-detail/${item.slug}`}>
              <img className='img-fluid' src={item.image} alt={item.nom} />
            </Link>
          </div>
          <CardBody>
            <div className='item-name'>
              <h6 className='mb-0'>
                <Link to={`/apps/ecommerce/product-detail/${item.slug}`}>{item.nom}</Link>
              </h6>
             
              <div className='item-rating'>
                <ul className='unstyled-list list-inline'>
                  {new Array(5).fill().map((listItem, index) => {
                    return (
                      <li key={index} className='ratings-list-item me-25'>
                        <Star
                          className={classnames({
                            'filled-star': index + 1 <= item.rating,
                            'unfilled-star': index + 1 > item.rating
                          })}
                        />
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
            <span className='text-success mb-1'>In Stock</span>
            <div className='item-quantity'>
              <span className='quantity-title me-50'>Qty</span>
              <InputNumber
                min={1}
                max={10}
                upHandler={<Plus />}
                className='cart-input'
                defaultValue={item.qty}
                downHandler={<Minus />}
              />
            </div>
            <div className='delivery-date text-muted'>Delivery by, {formatDate(item.shippingDate)}</div>
            <span className='text-success'>
              {item.discountPercentage}% off {item.offers} offers Available
            </span>
          </CardBody>
          <div className='item-options text-center'>
            <div className='item-wrapper'>
              <div className='item-cost'>
                <h4 className='item-price'>${item.prix}</h4>
                {item.hasFreeShipping ? (
                  <CardText className='shipping'>
                    <Badge color='light-success' pill>
                      Free Shipping
                    </Badge>
                  </CardText>
                ) : null}
              </div>
            </div>
            <Button className='mt-1 remove-wishlist' color='light' onClick={() => dispatch(deleteCartItem(item.id))}>
              <X size={14} className='me-25' />
              <span>Remove</span>
            </Button>
            <Button
              className='btn-cart'
              color='primary'
              onClick={() => handleWishlistClick(item.id, item.isInWishlist)}
            >
              <Heart
                size={14}
                className={classnames('me-25', {
                  'fill-current': item.isInWishlist
                })}
              />
              <span className='text-truncate'>Wishlist</span>
            </Button>
          </div>
        </Card>
      )
    })
  }

  return (
    <div className='list-view product-checkout'>
      <div className='checkout-items'>{produit ? renderCart() : <h4>Your cart is empty</h4>}</div>
      <div className='checkout-options'>
        <Card>
          <CardBody>
            <label className='section-label mb-1'>Options</label>
            <InputGroup className='input-group-merge coupons'>
              <Input placeholder='Coupons' />
              <InputGroupText className='text-primary ms-0'>Apply</InputGroupText>
            </InputGroup>
            <hr />
            <div className='price-details'>
              <h6 className='price-title'>Price Details</h6>
              <ul className='list-unstyled'>
                <li className='price-detail'>
                  <div className='detail-title'>Total MRP</div>
                  <div className='detail-amt'>$598</div>
                </li>
                <li className='price-detail'>
                  <div className='detail-title'>Bag Discount</div>
                  <div className='detail-amt discount-amt text-success'>-25$</div>
                </li>
                <li className='price-detail'>
                  <div className='detail-title'>Estimated Tax</div>
                  <div className='detail-amt'>$1.3</div>
                </li>
                <li className='price-detail'>
                  <div className='detail-title'>EMI Eligibility</div>
                  <a href='/' className='detail-amt text-primary' onClick={e => e.preventDefault()}>
                    Details
                  </a>
                </li>
                <li className='price-detail'>
                  <div className='detail-title'>Delivery Charges</div>
                  <div className='detail-amt discount-amt text-success'>Free</div>
                </li>
              </ul>
              <hr />
              <ul className='list-unstyled'>
                <li className='price-detail'>
                  <div className='detail-title detail-total'>Total</div>
                  <div className='detail-amt fw-bolder'>$574</div>
                </li>
              </ul>
              <Button
                block
                color='primary'
                //disabled={!produit.length}
                onClick={() => stepper.next()}
                classnames='btn-next place-order'
              >
                Place Order
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default Cart
