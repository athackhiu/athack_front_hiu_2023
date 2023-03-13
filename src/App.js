import React, { Suspense, useEffect, useState } from "react";
import { Input, Modal, ModalBody, ModalHeader } from "reactstrap";
import { useSpeechSynthesis } from "react-speech-kit";
// ** Router Import
import Router from "./router/Router";
import LiliBotModal from "./views/components/lili-bot-modal/LiliBotModal";
import { OPENAI_KEY, OPENAI_URL } from "./config";
import Spinner from "./@core/components/spinner/Loading-spinner";

const App = () => {
  const Bot = () => {
    const [open, setOpen] = useState(false);
    const { speak } = useSpeechSynthesis();
    const greetingText = "Hi, how can I help you today ?";
    const [questionText, setBotText] = useState("");
    const [botResponse, setBotResponse] = useState("");
    const [isLoadingResponse, setIsLoadingResponse] = useState(false);

    useEffect(() => {
      if (botResponse) {
        speak({ text: `${botResponse}` });
        setBotResponse("");
      }
    }, [botResponse]);

    const handleChangeBotText = (newText) => {
      setBotText(newText);
    };

    useEffect(() => {
      if (open) {
        speak({ text: `${greetingText}` });
      }
    }, [open]);

    const getAiResponse = async () => {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_KEY}`,
      };
      const data = {
        model: "text-davinci-003",
        prompt: `${questionText}`,
        temperature: 1,
        max_tokens: 50,
        stop: ".",
      };
      const test = await fetch(`${OPENAI_URL}`, {
        method: "POST",
        headers,
        body: JSON.stringify(data),
      });
      return test;
    };

    const onSendMessage = async () => {
      setIsLoadingResponse(true);
      try {
        const resp = await getAiResponse();
        if (resp) {
          // const aiRespText = resp.choices[0].text
          resp
            .json()
            .then((jsonResp) => {
              setBotResponse(jsonResp.choices[0].text.trim());
            })
            .finally(() => {
              setIsLoadingResponse(false);
            });
        }
      } catch (err) {
        console.error(err);
      }
    };
    return (
      <div
        style={{
          zIndex: 999,
          width: 60,
          height: 60,
          backgroundColor: "blue",
          position: "fixed",
          bottom: 50,
          right: 50,
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={() => {
          setOpen(true);
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <g fill="none" fillRule="evenodd">
            <path
              stroke="white"
              strokeLinecap="round"
              d="M7.707 22.293A1 1 0 0 1 6 21.586V20H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H10l-2.293 2.293z"
            />
            <path stroke="white" strokeLinecap="square" d="M12.5 6.5v-1" />
            <circle cx="8.5" cy="13.5" r="1.5" fill="white" />
            <circle cx="16.5" cy="13.5" r="1.5" fill="white" />
            <circle cx="12.5" cy="3.5" r="1.5" stroke="white" />
            <rect
              width="4"
              height="1"
              x="10.5"
              y="17.5"
              stroke="white"
              rx=".5"
            />
            <path
              stroke="white"
              strokeLinecap="round"
              d="M8 17c-1.657 0-3-1.567-3-3.5S6.343 10 8 10h9c1.657 0 3 1.567 3 3.5S18.657 17 17 17"
            />
          </g>
        </svg>
        <Modal
          isOpen={open}
          toggle={() => {
            setOpen(!open);
          }}
        >
          <ModalHeader className="bg-transparent"></ModalHeader>
          <ModalBody>
            <center>
              <h1>Lili Assistant</h1>
              <br />
              <h5>{greetingText}</h5>
              <br />
              <Input
                type="text"
                onChange={(e) => {
                  handleChangeBotText(e.target.value);
                }}
              />
              <br />
              {isLoadingResponse ? (
                <Spinner />
              ) : (
                <button
                  className="btn btn-primary btn-lg"
                  onClick={async () => await onSendMessage()}
                >
                  Speak
                </button>
              )}
            </center>
          </ModalBody>
        </Modal>
      </div>
    );
  };
  return (
    <Suspense fallback={null}>
      <Bot />
      <Router />
    </Suspense>
  );
};

export default App;
