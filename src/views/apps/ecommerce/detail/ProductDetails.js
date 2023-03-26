// ** React Imports
import { Link, useNavigate } from "react-router-dom";

// ** Third Party Components
import classnames from "classnames";
import {
  Star,
  ShoppingCart,
  DollarSign,
  Heart,
  Share2,
  Facebook,
  Twitter,
  Youtube,
  Instagram,
} from "react-feather";

// ** Reactstrap Imports
import {
  Row,
  Col,
  Button,
  CardText,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledButtonDropdown,
  Spinner,
} from "reactstrap";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../../../configs/api/url";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = (props) => {
  //**  function ajout panier

  // ** Props
  const { data } = props;
  // useEffect(() => {
  //   console.log(props.data)
  //   // console.log("details");
  // }, [props]);

  // ** Condition btn tag
  const navigate = useNavigate();
  const CartBtnTag = data.isInCart ? Link : "button";
  const [isLoadingAddCart, setIsLoadingAddCart] = useState(false);
  const [quantite, setQuantite] = useState(0);

  function addCard() {
    setIsLoadingAddCart(true);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      panierId: "641fd2a5596a2e26aed5aa25",
      produit: data._id,
      quantite: 1,
    });
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${BASE_URL}/paniers/add`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        toast.success("Ajouté au panier avec succès.");
        setTimeout(() => {
          navigate(`/apps/ecommerce/shop`);
        }, 2000);
      })
      .catch((error) => {
        toast.error("Une erreur est survenue lors de l'ajout au panier.");
      })
      .finally(() => {
        setIsLoadingAddCart(false);
      });
  }
  return (
    <Row className="my-2">
      <ToastContainer />
      <Col
        className="d-flex align-items-center justify-content-center mb-2 mb-md-0"
        md="5"
        xs="12"
      >
        <div className="d-flex align-items-center justify-content-center">
          <img
            style={{
              width: 200,
            }}
            className="img-fluid product-img"
            src={data.image}
            alt={data.nom}
          />
        </div>
      </Col>
      <Col md="7" xs="12">
        <h4>{data.nom}</h4>
        <small>{data._id}</small>
        <div className="ecommerce-details-price d-flex flex-wrap mt-1">
          <h4 className="item-price me-1">{data.prix}Ar</h4>
          <ul className="unstyled-list list-inline">
            {new Array(5).fill().map((listItem, index) => {
              return (
                <li key={index} className="ratings-list-item me-25">
                  <Star
                    className={classnames({
                      "filled-star": index + 1 <= data.rating,
                      "unfilled-star": index + 1 > data.rating,
                    })}
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <CardText>
          Available -<span className="text-success ms-25">In stock</span>
        </CardText>
        <CardText>{data.description}</CardText>
        <ul className="product-features list-unstyled">
          {data.hasFreeShipping ? (
            <li>
              <ShoppingCart size={19} />
              <span>Free Shipping</span>
            </li>
          ) : null}
          <li>
            {/* <DollarSign size={19} /> */}
            <span>EMI options available</span>
          </li>
        </ul>
        <hr />

        <hr />
        <div className="d-flex flex-column flex-sm-row pt-1">
          <Button
            className="btn-cart me-0 me-sm-1 mb-1 mb-sm-0"
            color="primary"
            onClick={() => addCard(data)}
          >
            {isLoadingAddCart ? <Spinner /> : `Ajouter au panier`}
          </Button>

          <UncontrolledButtonDropdown className="dropdown-icon-wrapper btn-share">
            <DropdownToggle
              className="btn-icon hide-arrow"
              color="secondary"
              caret
              outline
            >
              <Share2 size={14} />
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem
                tag="a"
                href="/"
                onClick={(e) => e.preventDefault()}
              >
                <Facebook size={14} />
              </DropdownItem>
              <DropdownItem
                tag="a"
                href="/"
                onClick={(e) => e.preventDefault()}
              >
                <Twitter size={14} />
              </DropdownItem>
              <DropdownItem
                tag="a"
                href="/"
                onClick={(e) => e.preventDefault()}
              >
                <Youtube size={14} />
              </DropdownItem>
              <DropdownItem
                tag="a"
                href="/"
                onClick={(e) => e.preventDefault()}
              >
                <Instagram size={14} />
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown>
        </div>
      </Col>
    </Row>
  );
};

export default Product;
