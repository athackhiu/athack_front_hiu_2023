// ** Icon Imports
import { useEffect, useState } from "react";
import { PlusCircle } from "react-feather";

// ** Reactstrap Imports
import {
  Row,
  Col,
  Form,
  Label,
  Input,
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardText,
  Spinner,
} from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Payment = ({ total }) => {
  const [isLoadingPaiement, setIsLoadingPaiement] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(`333005837`);
  const [transactionId, setTransactionId] = useState("");
  const notify = (message) => toast(`${message}`);
  const navigate = useNavigate()
  const handleProceedToPaiement = () => {
    setIsLoadingPaiement(true);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      msisdn: phoneNumber,
      amount: total,
      reference: "Paiement airtel api",
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://athack-back-hiu-2023.vercel.app/paiements/pay",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result.transaction_id);
        notify('Verifiez le push ussd envoyé vers votre téléphone')
        setTransactionId(result.transaction_id);
      })
      .catch((error) => {
        console.error(error);
        setIsLoadingPaiement(false);
      });
  };
  
  useEffect(() => {
    if (transactionId) {
      const intervalId = setInterval(() => {
        {
          const requestOptions = {
            method: "GET",
            redirect: "follow",
          };
          const PAIEMENT_STATUS = {
            EN_COURS: "TIP",
            SUCCESS: "TS",
            FAILED: "TF",
          };
          fetch(
            `https://athack-back-hiu-2023.vercel.app/paiements/${transactionId}`,
            requestOptions
          )
            .then((response) => response.json())
            .then((result) => {
              const status = result.status_code;
              console.log(status);
              if (status === PAIEMENT_STATUS.EN_COURS) {
                console.log("EN COURS");
              } else if (status === PAIEMENT_STATUS.SUCCESS) {
                console.log("SUCCESS");
                clearInterval(intervalId);
                setIsLoadingPaiement(false);
                notify("Paiement réussi avec succès.");
                setTimeout(() => {
                  navigate('/apps/ecommerce/checkout')
                }, 3000);
              }
            })
            .catch((error) => {
              console.log(error);
              clearInterval(intervalId);
              setIsLoadingPaiement(false);
              notify("Paiement annulé, veuillez contacter le service client.");
            });
        }
      }, 5000);
    }
  }, [transactionId]);
  return (
    <Form
      className="list-view product-checkout"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="payment-type">
        <Card>
          <CardHeader className="flex-column align-items-start">
            <CardTitle tag="h4">Options de paiement</CardTitle>
            <CardText className="text-muted mt-25">
              Be sure to click on correct payment option
            </CardText>
          </CardHeader>
          <CardBody>
            <h6 className="card-holder-name my-75">
              {JSON.parse(localStorage.getItem("userData")).prenom}{" "}
              {JSON.parse(localStorage.getItem("userData")).nom}
            </h6>
            <div className="form-check mb-2">
              <Input
                defaultChecked
                id="us-card"
                type="radio"
                name="paymentMethod"
              />
              <Label className="form-check-label" htmlFor="us-card">
                Ariary MGA Madagascar
              </Label>
            </div>
            <Row className="customer-cvv mt-1 row-cols-lg-auto">
              <Col xs={3} className="d-flex align-items-center">
                <Label className="mb-50" for="card-holder-cvv">
                  Entrez numero de telephone:
                </Label>
              </Col>
              <Col xs={4} className="p-0">
                <Input
                  className="input-cvv mb-50"
                  id="card-holder-cvv"
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                />
              </Col>
              <Col xs={3}>
                <ToastContainer />
                <Button
                  className="btn-cvv mb-50"
                  color="primary"
                  onClick={() => {
                    handleProceedToPaiement();
                  }}
                >
                  {isLoadingPaiement ? (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Spinner
                        style={{
                          marginRight: 10,
                        }}
                      />{" "}
                      {transactionId ? <>Traitement de votre paiement ...</> : <>Vous allez recevoir un push ussd ...</>}
                    </div>
                  ) : (
                    `Procéder au paiement`
                  )}
                </Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
      <div className="amount-payable checkout-options">
        <Card>
          <CardHeader>
            <CardTitle tag="h4">Price Details</CardTitle>
          </CardHeader>
          <CardBody>
            <ul className="list-unstyled price-details">
              <li className="price-detail">
                <div className="details-title">Charges de livraison</div>
                <div className="detail-amt discount-amt text-success">
                  Gratuit
                </div>
              </li>
            </ul>
            <hr />
            <ul className="list-unstyled price-details">
              <li className="price-detail">
                <div className="details-title">A payer</div>
                <div className="detail-amt fw-bolder">{total} Ar</div>
              </li>
            </ul>
          </CardBody>
        </Card>
      </div>
    </Form>
  );
};

export default Payment;
