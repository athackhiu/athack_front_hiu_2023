// ** React Imports
import { useEffect, Fragment, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

// ** Product detail components
import ItemFeatures from "./ItemFeatures";
import ProductDetails from "./ProductDetails";
import RelatedProducts from "./RelatedProducts";

// ** Custom Components
import BreadCrumbs from "@components/breadcrumbs";

// ** Reactstrap Imports
import { Card, CardBody } from "reactstrap";

// ** Store & Actions
import { useDispatch, useSelector } from "react-redux";
import {
  getProduct,
  deleteWishlistItem,
  addToWishlist,
  addToCart,
} from "../store";

import "@styles/base/pages/app-ecommerce-details.scss";
import { BASE_URL } from "../../../../configs/api/url";

const Details = () => {
  // ** Vars
  const params = useParams().product;
  const productId = params.substring(params.lastIndexOf("-") + 1);

  // ** Store Vars
  const dispatch = useDispatch();
  const store = useSelector((state) => state.ecommerce);

  const location = useLocation();
  const [prd, setPrd] = useState(location.state.product);

  // ** ComponentDidMount : Get product
  useEffect(() => {
    // dispatch(getProduct(productId));
    // console.log(location.state.product);
    // //  setPrd(location.state.product);
    // console.log(prd);

    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`${BASE_URL}/produits/${params}`, requestOptions)
      .then((data) => {
        return data.json();
      })
      .then((e) => {
        // console.log(e);
        setPrd(e)
      });
  }, []);

  return (
    <Fragment>
      <BreadCrumbs
        title="Product Details"
        data={[{ title: "eCommerce" }, { title: "Details" }]}
      />
      <div className="app-ecommerce-details">
        {/* <h1>Hey</h1> */}
          <Card>
            <CardBody>
              <ProductDetails
                dispatch={dispatch}
                addToCart={addToCart}
                productId={prd._id}
                getProduct={getProduct}
                data={prd}
                addToWishlist={addToWishlist}
                deleteWishlistItem={deleteWishlistItem}
              />
            </CardBody>
            <ItemFeatures />
            <CardBody>
              <RelatedProducts />
            </CardBody>
          </Card>
      </div>
    </Fragment>
  );
};

export default Details;
