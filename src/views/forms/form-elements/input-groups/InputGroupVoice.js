import { Button, InputGroup, Input, Row, Col } from 'reactstrap'
import { Search } from 'react-feather'
import { useSkin } from "@hooks/useSkin";
import SpeechRecognition, {
    useSpeechRecognition,
} from "react-speech-recognition";
import { FaMicrophone } from 'react-icons/fa';
import { FaEllipsisH } from 'react-icons/fa';
import { useState } from 'react';
import { useEffect } from 'react';


const InputGroupVoice = () => {
    const  recognition = SpeechRecognition;
    const { transcript, resetTranscript, listening } = useSpeechRecognition();  
    const [open, setOpen] = useState(false);
    const [questionText, setQuestionText] = useState("");
    const skin = useSkin();

    const handleChangeTranscriptText = (newText) => {
        setQuestionText(newText);
    };

    useEffect(() => {
        if (!(open)){
          recognition.stopListening();
          resetTranscript();
        }
    }, [open]);

    useEffect(() => {
        setQuestionText(transcript);
      },[transcript]);

    return (
        <Row>
        <Col className='mb-1' md='6' sm='12'>
            <InputGroup>
            <Input type="text" name="inputval" value={questionText} onChange={(e) => {
                  handleChangeTranscriptText(e.target.value);
                }}/>
            {listening ? (
                <Button
                    color='primary'
                  onClick={() => {
                    recognition.stopListening();
                  }}
                >
                    <FaEllipsisH
                        className='beat'
                        style={{
                            marginLeft: 10,
                            marginRight: 10,
                            cursor: "pointer",
                            width: 40,
                        }}
                    size={15}
                    />
                </Button>
              ) : (
                <Button color='primary' outline>
                <FaMicrophone
                  style={{
                    marginLeft: 10,
                    marginRight: 10,
                    cursor: "pointer",
                    width: 40,
                  }}
                  onClick={() => {
                    recognition.startListening({
                        continuous: true,
                        language: 'fr-FR',
                      });
                  }}
                  size={15}
                  color="primary"
                />
                </Button>
            )}    
            </InputGroup>
        </Col>
        </Row>
    )
}

export default InputGroupVoice
