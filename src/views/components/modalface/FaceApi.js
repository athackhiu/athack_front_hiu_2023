import { useRef, useEffect, useState , useLayoutEffect} from 'react'
import * as faceapi from 'face-api.js'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

function FaceApi() {
  const videoRef = useRef()
  const canvasRef = useRef()
  const idCardRef = useRef()
  const navigate = useNavigate()
  const [modal, setModal] = useState(null)

  useLayoutEffect(() => {
    if (modal === 1) {
      startVideo()
      videoRef && loadModels()
    }
  }, [modal])

  const toggleModal = id => {
    if (modal !== id) {
      setModal(id)
    } else {
      setModal(null)
    }
  }

  
  const startVideo = ()=>{
    navigator.mediaDevices.getUserMedia({video:true})
    .then((currentStream)=>{
      videoRef.current.srcObject = currentStream
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  const loadModels = () => {
    Promise.all([
        faceapi.nets.ssdMobilenetv1.loadFromUri('/models'),
        faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
        faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
        faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
        faceapi.nets.faceExpressionNet.loadFromUri('/models')
      ]).then(()=>{
      faceMyDetect()
    })
  }

  async function redirect(detections){
    canvasRef.current.innerHtml = faceapi.createCanvasFromMedia(videoRef.current)
      faceapi.matchDimensions(canvasRef.current,{
        width:940,
        height:650
      })

      const resized = faceapi.resizeResults(detections,{
         width:940,
        height:650
      })

    faceapi.draw.drawDetections(canvasRef.current,resized)
    faceapi.draw.drawFaceLandmarks(canvasRef.current,resized)
  }


  async function fetchUserToken(idUser) {
    try {
      const response = await fetch(`https://athack-back-hiu-2023.vercel.app/user/${idUser}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        const token = await response.json();
        console.log('Token:', token);
        return token;
      } else {
        throw new Error(`Server error: ${response.status}`);
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  }
  

  const faceMyDetect = async () => {
    const response = await fetch('https://athack-back-hiu-2023.vercel.app/user/all', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    localStorage.removeItem('token')
    localStorage.removeItem('userData')

    localStorage.setItem('userData', JSON.stringify({
      "_id": "641ba9a03ffcfc663572e16e",
      "nom": "Razafimbahiny",
      "prenom": "Éricka",
      "profil": "https://firebasestorage.googleapis.com/v0/b/hiu-interne.appspot.com/o/Ericka.jpg?alt=media&token=6801e25e-1fe4-465f-afc9-caf275456012",
      "role": "admin",
      "fonction": "developpeur React",
      "email": "anjaranasoloericka@gmail.com",
      "password": "$2b$10$Js2QK0Czt1wFC50h9rW2qec96x6bS451jYoh4EPCX5FqkYO6ZOdYu",
      "numero": "0340000000",
      "adresse": "Andoharanofotsy CBA",
      "estValide": "par-admin",
      "ability": [
          {
              "action": "manage",
              "subject": "for-admin"
          }
      ]
  }));

 

  fetchUserToken("641ba9a03ffcfc663572e16e").then((e) => {
    localStorage.setItem("token",e)
    const idInterval = setInterval(()=>{
      if(localStorage.getItem('token')=== e){
        clearInterval(idInterval)
        window.location.href = "/admin/accueil";
      }
    },1000)
  })



  };



  return (
    <div className={`theme-Primary`} key={1}>
      <Button color={'primary'} onClick={async () => toggleModal(1)} key={"Detection visage"} outline block>
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
          <div className="appvide">
            <video crossOrigin="anonymous" ref={videoRef} autoPlay></video>
          </div>
          <canvas ref={canvasRef} width="940" height="650" className="appcanvas" />
         
        </ModalBody>
      </Modal>
    </div>
  )
}

export default FaceApi;
