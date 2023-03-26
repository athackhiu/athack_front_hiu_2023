// ** React Imports
import { Fragment, useEffect, useRef, useState } from "react";

// ** Custom Components
import Wizard from "@components/wizard";
import BreadCrumbs from "@components/breadcrumbs";

// ** Steps
import Cart from "./steps/Cart";
import Address from "./steps/Address";
import Payment from "./steps/Payment";

// ** Third Party Components
import { ShoppingCart, Home, CreditCard } from "react-feather";

// ** Store & Actions
import { useDispatch, useSelector } from "react-redux";
import {
  getCartItems,
  deleteCartItem,
  deleteWishlistItem,
  addToWishlist,
} from "../store";

// ** Styles
import "@styles/base/pages/app-ecommerce.scss";
import { BASE_URL } from "../../../../configs/api/url";

const Checkout = () => {
  // ** Ref & State
  const ref = useRef(null);
  const [stepper, setStepper] = useState(null);

  // ** Store Vars
  const dispatch = useDispatch();
  const store = useSelector((state) => state.ecommerce);

  // ** Get Cart Items on mount
  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  const [produit, setProduct] = useState();
  const [total, setTotal] = useState(0);

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
      .then((result) => {
        setProduct(result.panierProduit);
        let temp_total = 0;
        result.panierProduit.forEach((produit_obj) => {
          const prix_produit = produit_obj.produit.prix * produit_obj.quantite;
          temp_total += prix_produit;
        });
        setTotal(temp_total);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    initializeCart();
  }, []);
  const steps = [
    {
      id: "cart",
      title: "Cart",
      subtitle: "Your Cart Items",
      icon: <ShoppingCart size={18} />,
      content: (
        <Cart
          stepper={stepper}
          dispatch={dispatch}
          products={produit}
          getCartItems={getCartItems}
          addToWishlist={addToWishlist}
          deleteCartItem={deleteCartItem}
          deleteWishlistItem={deleteWishlistItem}
          total = {total}
        />
      ),
    },
    // {
    //   id: 'Address',
    //   title: 'Address',
    //   subtitle: 'Enter Your Address',
    //   icon: <Home size={18} />,
    //   content: <Address stepper={stepper} />
    // },
    {
      id: "payment",
      title: "Payment",
      subtitle: "Select Payment Method",
      icon: <CreditCard size={18} />,
      content: <Payment stepper={stepper} />,
    },
  ];

  return (
    <Fragment>
      <BreadCrumbs
        title="Checkout"
        data={[{ title: "eCommerce" }, { title: "Checkout" }]}
      />
      <Wizard
        ref={ref}
        steps={steps}
        className="checkout-tab-steps"
        instance={(el) => setStepper(el)}
        options={{
          linear: false,
        }}
      />
    </Fragment>
  );
};

export default Checkout;
