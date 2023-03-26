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
    const users = await response.json();
    const detectorOptions = new faceapi.TinyFaceDetectorOptions({ inputSize: 224 });
    const intervalId = setInterval(async () => {
      const videoFacedetection = await faceapi
        .detectSingleFace(videoRef.current, detectorOptions)
        .withFaceLandmarks()
        .withFaceDescriptor();
  
      if (videoFacedetection) {
        redirect(videoFacedetection);
  
        for (const user of users) {
          const idCardImg = new Image();
          idCardImg.src = user.profil;
          idCardImg.crossOrigin = 'anonymous';
  
          const idCardFacedetection = await faceapi.detectSingleFace(idCardImg, detectorOptions).withFaceLandmarks().withFaceDescriptor();
  
          if (idCardFacedetection) {
            localStorage.setItem('token', JSON.stringify(fetchUserToken(user._id)));
            const distance = faceapi.euclideanDistance(
              idCardFacedetection.descriptor,
              videoFacedetection.descriptor
            );
  
            if (distance <= 0.5) {
              console.log(`Match found for user: ${user.prenom} ${user.nom}`);
              console.log(`Distance: ${distance}`);
              console.log(user);
              localStorage.setItem('userData', JSON.stringify(user));
            
              if (user.role === "superadmin")  navigate("/user/page1");
              if (user.role === "user")  navigate("/user/accueil");
              if (user.role === "admin")  navigate("/extensions/aproduct-list");
  
              clearInterval(intervalId);
              break;
            }
          }
        }
      }
    }, 200); // Decreased interval to 200ms
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
