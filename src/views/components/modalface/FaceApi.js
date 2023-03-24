// ** React Imports
import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import * as faceapi from 'face-api.js'


// ** Reactstrap Imports
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'


const FaceApi=()=>{
    const [modal, setModal] = useState(null)

    const toggleModal = id => {
        if (modal !== id) {
            setModal(id)
        } else {
        setModal(null)
        }
    }

    return (
        <div className={`theme-Primary`} key={1}>
          <Button color={'primary'} onClick={async() => toggleModal(1)} key={"Detection visage"} outline block> 
            {"Detection visage"}
          </Button>
          <Modal
            isOpen={modal === 1}
            toggle={() => toggleModal(1)}
            className='modal-dialog-centered modal-lg'
            modalClassName={'modal-primary'}
            key={1}
          >
            <ModalHeader toggle={() => toggleModal(1)}>Detection de visage</ModalHeader>
            <ModalBody>
              Video
            </ModalBody>
          </Modal>
        </div>
      )
}

export default FaceApi;