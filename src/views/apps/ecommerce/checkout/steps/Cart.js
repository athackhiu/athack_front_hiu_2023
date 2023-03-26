// ** React Imports
import { Link } from "react-router-dom";

// ** Third Party Components
import classnames from "classnames";
import InputNumber from "rc-input-number";
import { X, Heart, Star, Plus, Minus } from "react-feather";

// ** Reactstrap Imports
import {
  Card,
  CardBody,
  CardText,
  Button,
  Badge,
  InputGroup,
  Input,
  InputGroupText,
} from "reactstrap";

// ** Styles
import "@styles/react/libs/input-number/input-number.scss";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../../../../configs/api/url";

const Cart = (props) => {
  // ** Props
  const {
    stepper,
    deleteCartItem,
    dispatch,
    addToWishlist,
    deleteWishlistItem,
    getCartItems,
    products,
    total
  } = props;

  // ** Function to convert Date
  const formatDate = (
    value,
    formatting = { month: "short", day: "numeric", year: "numeric" }
  ) => {
    if (!value) return value;
    return new Intl.DateTimeFormat("en-US", formatting).format(new Date(value));
  };

  // ** Funciton Function to toggle wishlist item
  const handleWishlistClick = (id, val) => {
    if (val) {
      dispatch(deleteWishlistItem(id));
    } else {
      dispatch(addToWishlist(id));
    }
    dispatch(getCartItems());
  };

  // ** useEffect

  // ** Render cart items
  const renderCart = () => {
    return products.map((item, key) => {
      const item_produit = item.produit;
      return (
        <Card key={key} className="ecommerce-card">
          <div className="item-img">
            <Link to={`/apps/ecommerce/product-detail/${item_produit._id}`}>
              <img
                style={{
                  margin: 20,
                  width: "75%",
                }}
                className="img-fluid"
                src={item_produit.image}
                alt={item_produit.nom}
              />
            </Link>
          </div>
          <CardBody>
            <div className="item-name">
              <h6 className="mb-0">
                <Link to={`/apps/ecommerce/product-detail/${item_produit._id}`}>
                  {item_produit.nom}
                </Link>
              </h6>
            </div>
            {/* <span className="text-success mb-1">In Stock</span> */}
            <div className="item-quantity">
              <span className="quantity-title me-50">Quantite</span>
              <InputNumber
                min={1}
                max={10}
                upHandler={<Plus />}
                className="cart-input"
                defaultValue={item.quantite}
                downHandler={<Minus />}
              />
            </div>
            <div className="delivery-date text-muted">
              Delivery by, {formatDate(item.shippingDate)}
            </div>
            <span className="text-success">
              {item.discountPercentage}% off {item.offers} offers Available
            </span>
          </CardBody>
          <div className="item-options text-center">
            <div className="item-wrapper">
              <div className="item-cost">
                <h4 className="item-price">
                  ${item_produit.prix * item.quantite}
                </h4>
                {item.hasFreeShipping ? (
                  <CardText className="shipping">
                    <Badge color="light-success" pill>
                      Free Shipping
                    </Badge>
                  </CardText>
                ) : null}
              </div>
            </div>
            <Button
              className="mt-1 remove-wishlist"
              color="light"
              onClick={() => dispatch(deleteCartItem(item.id))}
            >
              <X size={14} className="me-25" />
              <span>Remove</span>
            </Button>
            <Button
              className="btn-cart"
              color="primary"
              onClick={() => handleWishlistClick(item.id, item.isInWishlist)}
            >
              <Heart
                size={14}
                className={classnames("me-25", {
                  "fill-current": item.isInWishlist,
                })}
              />
              <span className="text-truncate">Wishlist</span>
            </Button>
          </div>
        </Card>
      );
    });
  };

  return (
    <div className="list-view product-checkout">
      <div className="checkout-items">
        {products ? renderCart() : <h4>Your cart is empty</h4>}
      </div>
      <div className="checkout-options">
        <Card>
          <CardBody>
            <label className="section-label mb-1">Options</label>
            <InputGroup className="input-group-merge coupons">
              <Input placeholder="Total" />
              <InputGroupText className="text-primary ms-0">
                {total} Ar
              </InputGroupText>
            </InputGroup>
            <hr />
            <div className="price-details">
              <Button
                block
                color="primary"
                //disabled={!produit.length}
                onClick={() => stepper.next()}
                classnames="btn-next place-order"
              >
                Place Order
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Cart;
