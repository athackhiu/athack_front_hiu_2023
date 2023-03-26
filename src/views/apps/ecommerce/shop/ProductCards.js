// ** React Imports
import { Link } from "react-router-dom";

// ** Third Party Components
import classnames from "classnames";
import { Star, ShoppingCart, Heart } from "react-feather";

// ** Reactstrap Imports
import { Card, CardBody, CardText, Button, Badge } from "reactstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../../configs/api/url";

const ProductCards = (props) => {
  // ** Props
  const {
    store,
    products,
    dispatch,
    addToCart,
    activeView,
    getProducts,
    getCartItems,
  } = props;

  // ** Handle Move/Add to cart
  const handleCartBtn = (id, val) => {
    if (val === false) {
      dispatch(addToCart(id));
    }
    dispatch(getCartItems());
    dispatch(getProducts(store.params));
  };

  const [productsState, setProductsState] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const initializeProducts = async () => {
    try {
      const requestOptions = {
        method: "GET",
        redirect: "follow",
      };
      const produits = await fetch(`${BASE_URL}/produits`, requestOptions);
      const datas = await produits.json();
      // console.log(datas)
      if (datas) {
        setProductsState([...datas]);
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    initializeProducts()
  }, []);
  // ** Renders products
  const renderProducts = () => {
    // console.log(productsState);
    if (productsState.length) {
      return productsState.map((item) => {
        const CartBtnTag = item.isInCart ? Link : "button";

        return (
          <Card className="ecommerce-card" key={item.nom}>
            <div className="item-img text-center mx-auto">
              <Link
                to={`/apps/ecommerce/product-detail/${item._id}`}
                state={{ product: item }}
              >
                <img
                  style={{
                    width: 150
                  }}
                  className="img-fluid card-img-top"
                  src={item.image}
                  alt={item.nom}
                />
              </Link>
            </div>
            <CardBody>
              <div className="item-wrapper">
                <div className="item-rating">
                  <ul className="unstyled-list list-inline"></ul>
                </div>
                <div className="item-cost">
                  <h6 className="item-price">{item.prix}Ar</h6>
                </div>
              </div>
              <h6 className="item-name">
                <Link
                  className="text-body"
                  to={`/apps/ecommerce/product-detail/${item.slug}`}
                >
                  {item.nom}
                </Link>
                <CardText tag="span" className="item-company">
                  By{" "}
                  <a
                    className="company-name"
                    href="/"
                    onClick={(e) => e.preventDefault()}
                  >
                    {item.brand}
                  </a>
                </CardText>
              </h6>
              <CardText className="item-description">
                {item.description}
              </CardText>
            </CardBody>
            <div className="item-options text-center">
              <div className="item-wrapper">
                <div className="item-cost">
                  <h4 className="item-price">${item.prix}</h4>
                  {item.hasFreeShipping ? (
                    <CardText className="shipping">
                      <Badge color="light-success">Free Shipping</Badge>
                    </CardText>
                  ) : null}
                </div>
              </div>

              <Button
                color="primary"
                tag={CartBtnTag}
                className="btn-cart move-cart"
                onClick={() => handleCartBtn(item.id, item.isInCart)}
                /*eslint-disable */
                {...(item.isInCart
                  ? {
                      to: "/apps/ecommerce/checkout",
                    }
                  : {})}
                /*eslint-enable */
              >
                <ShoppingCart className="me-50" size={14} />
                <span>{item.isInCart ? "View In Cart" : "Voir panier"}</span>
              </Button>
            </div>
          </Card>
        );
      });
    }
  };

  return (
    <div
      className={classnames({
        "grid-view": activeView === "grid",
        "list-view": activeView === "list",
      })}
    >
      {renderProducts()}
    </div>
  );
};

export default ProductCards;
