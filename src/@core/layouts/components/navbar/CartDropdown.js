// ** React Imports
import { Link } from "react-router-dom";
import { useEffect, Fragment, useState } from "react";

// ** Third Party Components
import InputNumber from "rc-input-number";
import PerfectScrollbar from "react-perfect-scrollbar";
import { ShoppingCart, X, Plus, Minus } from "react-feather";

// ** Reactstrap Imports
import {
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  Badge,
  Button,
} from "reactstrap";

// ** Store & Actions
import { useDispatch, useSelector } from "react-redux";
import {
  getCartItems,
  deleteCartItem,
  getProduct,
} from "@src/views/apps/ecommerce/store";

// ** Styles
import "@styles/react/libs/input-number/input-number.scss";
import { BASE_URL } from "../../../../configs/api/url";

const CartDropdown = () => {
  // ** State
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // ** Store Vars
  const dispatch = useDispatch();
  const store = useSelector((state) => state.ecommerce);

  // ** ComponentDidMount
  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  // ** Function to toggle Dropdown
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  // ** Function to call on Dropdown Item Click
  const handleDropdownItemClick = (id) => {
    dispatch(getProduct(id));
    toggle();
  };

  const [cartState, setCartState] = useState({});

  const initializeCart = () => {
    const token = localStorage.getItem("token");

    const myHeaders = new Headers();
    myHeaders.append("x-auth-token", token);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(`${BASE_URL}/paniers`, requestOptions)
      .then((response) => response.json())
      .then((result) => setCartState(result))
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    if (dropdownOpen) {
      initializeCart();
    }
  }, [dropdownOpen]);
  // ** Loops through Cart Array to return Cart Items
  const renderCartItems = () => {
    if (cartState?.panierProduit && cartState?.panierProduit.length > 0) {
      let total = 0;
      return (
        <Fragment>
          <PerfectScrollbar
            className="scrollable-container media-list"
            options={{
              wheelPropagation: false,
            }}
          >
            {cartState?.panierProduit.map((item) => {
              total += item.prix;
              const produit = item.produit;
              console.log(produit);
              return (
                <div key={produit._id} className="list-item align-items-center">
                  <img
                    className="d-block rounded me-1"
                    src={produit.image}
                    alt={produit.name}
                    width="62"
                  />
                  <div className="list-item-body flex-grow-1">
                    <X
                      size={14}
                      className="cart-item-remove"
                      // onClick={() => dispatch(deleteCartItem(produit._id))}
                    />
                    <div className="media-heading">
                      <h6 className="cart-item-title">{produit.nom}</h6>
                      {/* <small className="cart-item-by">by {item.brand}</small> */}
                    </div>
                    <div className="cart-item-qty">
                      <InputNumber
                        min={1}
                        max={10}
                        upHandler={<Plus />}
                        className="cart-input"
                        defaultValue={item.quantite}
                        downHandler={<Minus />}
                      />
                    </div>
                    <h5 className="cart-item-price">{produit.prix * item.quantite} Ar</h5>
                  </div>
                </div>
              );
            })}
          </PerfectScrollbar>
          <li className="dropdown-menu-footer">
            <div className="d-flex justify-content-between mb-1">
              <h6 className="fw-bolder mb-0">Total:</h6>
              <h6 className="text-primary fw-bolder mb-0">
                ${Number(total.toFixed(2))}
              </h6>
            </div>
            <Button
              tag={Link}
              to="/apps/ecommerce/checkout"
              color="primary"
              block
              onClick={toggle}
            >
              Checkout
            </Button>
          </li>
        </Fragment>
      );
    } else {
      return <p className="m-0 p-1 text-center">Your cart is empty</p>;
    }
  };

  return (
    <Dropdown
      isOpen={dropdownOpen}
      toggle={toggle}
      tag="li"
      className="dropdown-cart nav-item me-25"
    >
      <DropdownToggle tag="a" className="nav-link position-relative">
        <ShoppingCart className="ficon" />
        {store.cart.length > 0 ? (
          <Badge pill color="primary" className="badge-up">
            {store.cart.length}
          </Badge>
        ) : null}
      </DropdownToggle>
      <DropdownMenu
        end
        tag="ul"
        className="dropdown-menu-media dropdown-cart mt-0"
      >
        <li className="dropdown-menu-header">
          <DropdownItem tag="div" className="d-flex" header>
            <h4 className="notification-title mb-0 me-auto">My Cart</h4>
            <Badge color="light-primary" pill>
              {store.cart.length || 0} Items
            </Badge>
          </DropdownItem>
        </li>
        {renderCartItems()}
      </DropdownMenu>
    </Dropdown>
  );
};

export default CartDropdown;
