import { useState } from "react";
import { Button, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const ModalPaiement=()=>{
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
            <Button color={'primary'} onClick={async () => toggleModal(1)} key={"Paiement"} block>
                {"Paiement"}
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
                <div className='mb-2'>
                    <Label className='form-label' for='numero'>
                        Numero de téléphone:
                    </Label>
                    <Input type='text' id='numero' placeholder='033 XX XXX XX' />
                </div>
                <div className='mb-2'>
                    <Label className='form-label' for='montant'>
                        Montant:
                    </Label>
                    <Input type='number' id='montant' placeholder='.......... Ar' />
                </div>   
                          
            </ModalBody>
            <ModalFooter>
                <Button color="primary">Payer</Button>
            </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalPaiement;