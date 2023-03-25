import { useState } from "react";
import { Badge, Button, Card, Col, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from "reactstrap";

const ModalDetail=({item})=>{
    const [modal, setModal] = useState(null);
    const [loading,setLoading]=useState(false);

    const toggleModal = id => {
        if (modal !== id) {
          setModal(id)
        } else {
          setModal(null)
        }
    }

    return (
        <div className={`theme-Primary`} key={1}>
            <Button color={'primary'} onClick={async () => toggleModal(1)} key={"Détails"} outline>
                {"Détails"}
            </Button>
            <Modal
                isOpen={modal === 1}
                toggle={() => toggleModal(1)}
                className='modal-dialog-centered modal-lg'
                modalClassName={'modal-primary'}
                key={1}
            >
            <ModalHeader toggle={() => toggleModal(1)}>Paiement</ModalHeader>
            <ModalBody>
                {item?.panier.panierproduit.map((tabproduit,index)=>{
                    const produit= tabproduit.produit
                    return (
                        <Card>
                            <Row>
                                <Col md="4">
                                    <img src={produit.image} height="50px" alt="image-produit"/>
                                </Col>
                                <Col md="6">
                                    <br/>
                                    <h6><strong>{produit.nom}</strong></h6>
                                    <Badge color="info">{produit.type}</Badge>
                                    <small>{produit.description}</small>
                                </Col>
                            </Row>
                            <div className='mb-2'>
                            </div>
                        </Card> 
                    )
                })}
                 
                          
            </ModalBody>
            <ModalFooter>
                <Button color="primary">Payer</Button>
            </ModalFooter>
            </Modal>
        </div>
    )
}

export default ModalDetail;