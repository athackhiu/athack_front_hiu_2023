import React, { Fragment, Suspense, useEffect, useState } from "react";
import "regenerator-runtime";
import { Button, Input, Modal, ModalBody, ModalHeader } from "reactstrap";
import { useSpeechSynthesis } from "react-speech-kit";
// ** Router Import
import { OPENAI_KEY, OPENAI_URL } from "../../../config";
import Spinner from "../../../@core/components/spinner/Loading-spinner";
import botImageLight from "../../../images/gif_bot_chat_light.gif";
import botImageDark from "../../../images/gif_bot_chat_dark.gif";
import { useSkin } from "@hooks/useSkin";
// import mic_animation from "../../../images/mic_animation.gif";
import mic_animation_light from "../../../images/mic_animation_light.gif";
import mic_animation_dark from "../../../images/mic_animation_dark.gif";
import ReactLoading from "react-loading";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { FaMicrophone } from "react-icons/fa";
import { AiOutlineSend } from "react-icons/ai";

const LiliBotModal = () => {
  const recognition = SpeechRecognition;
  const { transcript, resetTranscript, listening } = useSpeechRecognition();
  const [isHover, setIsHover] = useState(false);
  const [open, setOpen] = useState(false);
  const { speak, cancel, voices } = useSpeechSynthesis();
  const [greetingText, setGreetingText] = useState("");
  const [questionText, setQuestionText] = useState("");
  const [botResponse, setBotResponse] = useState("");
  const [isLoadingResponse, setIsLoadingResponse] = useState(false);
  const skin = useSkin();
  const [lang, setLang] = useState(navigator.language);
  const [
    speakSpeechSynthesisVoiceOptions,
    setSpeackSpeechSynthesisVoiceOptions,
  ] = useState(null);

  // setting the language
  useEffect(() => {
    setLang(navigator.language);
  }, []);

  // setting greeting text
  useEffect(() => {
    const GRETTING = {
      FR: "Bonjour , je suis Lili, votre assitant vocal, comment puis-je vous aider ?",
      ENG: "Hello , I am Lili, your vocal assistant, how can I help you today ? ",
    };
    if (lang) {
      if (/.*fr.*/.test(lang)) {
        setGreetingText(GRETTING.FR);
      } else {
        setGreetingText(GRETTING.ENG);
      }
    }
  }, [lang]);

  // setting the voice setting based on the language
  useEffect(() => {
    if (voices.length > 0) {
      const res = [...voices].filter((voice) => new RegExp(`.*${lang}.*`).test(voice.lang)
      );
      if (res.length > 0) {
        const newVoice = res[0];
        setSpeackSpeechSynthesisVoiceOptions(newVoice);
      } else {
        setSpeackSpeechSynthesisVoiceOptions(voices[0]);
      }
    }
  }, [voices, lang]);

  // stop the mic if it's not opened
  useEffect(() => {
    if (open) {
    } else {
      recognition.stopListening();
      resetTranscript();
    }
  }, [open]);

  useEffect(() => {
    setQuestionText(transcript);
  }, [transcript]);

  if (!recognition.browserSupportsSpeechRecognition()) {
    return (
      <Fragment>
        <p>Le navigateur ne supporte pas cette fonctionnalite</p>
      </Fragment>
    );
  }
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  useEffect(() => {
    if (botResponse && speakSpeechSynthesisVoiceOptions) {
      speak({
        text: `${botResponse}`,
        voice: speakSpeechSynthesisVoiceOptions,
      });
      setBotResponse("");
    }
  }, [botResponse]);

  const handleChangeTranscriptText = (newText) => {
    resetTranscript();
    setQuestionText(newText);
  };

  // Greeting vocal
  useEffect(() => {
    if (open && speakSpeechSynthesisVoiceOptions) {
      speak({
        text: `${greetingText}`,
        voice: speakSpeechSynthesisVoiceOptions,
      });
    }
  }, [open, speakSpeechSynthesisVoiceOptions]);

  const getAiResponse = async () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENAI_KEY}`,
    };
    const data = {
      model: "text-davinci-003",
      prompt: `Answer this question : ${questionText}`,
      temperature: 0.75,
      max_tokens: 1000,
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
    resetTranscript();
    setQuestionText("");
    recognition.stopListening();
    // console.log(questionText);
    setIsLoadingResponse(true);
    try {
      const resp = await getAiResponse();
      if (resp) {
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
        bottom: 30,
        right: 30,
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        transition: "all linear .1s",
        transform: isHover ? `scale(1.2)` : `scale(1)`,
      }}
      onClick={() => {
        setOpen(true);
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
          <rect width="4" height="1" x="10.5" y="17.5" stroke="white" rx=".5" />
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
          cancel();
          setOpen(!open);
        }}
        style={{
          borderRadius: 50,
        }}
        className="modal-dialog-centered"
      >
        <ModalHeader className="bg-transparent"></ModalHeader>
        <ModalBody
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <center
            style={{
              width: 350,
              maxWidth: "100%",
            }}
          >
            <h1>Your assistant</h1>
            <br />
            <img
              style={{
                borderRadius: 50,
                maxWidth: "90%",
              }}
              src={skin.skin === "light" ? botImageLight : botImageDark}
              alt="bot"
              width={250}
            />
            <br />
            <br />
            <h5
              style={{
                maxWidth: 200,
                // textAlign:
              }}
            >
              {greetingText}
            </h5>
            <br />
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Input
                type="textaera"
                name="text"
                placeholder="Type or use the voice recognition ..."
                value={questionText}
                onChange={(e) => {
                  handleChangeTranscriptText(e.target.value);
                }}
              />
              {listening ? (
                <img
                  src={
                    skin.skin === "light"
                      ? mic_animation_light
                      : mic_animation_dark
                  }
                  style={{
                    width: 30,
                    cursor: "pointer",
                    marginLeft: 10,
                    marginRight: 10,
                  }}
                  onClick={() => {
                    recognition.stopListening();
                  }}
                />
              ) : (
                <FaMicrophone
                  style={{
                    marginLeft: 10,
                    marginRight: 10,
                    cursor: "pointer",
                    width: 40,
                  }}
                  onClick={() => {
                    recognition.startListening({
                      language: lang,
                      continuous: false
                    });
                  }}
                  size={20}
                  color="purple"
                />
              )}
              {isLoadingResponse ? (
                <div>
                  <ReactLoading
                    type="bubbles"
                    color="#218190"
                    height={30}
                    width={30}
                  />
                </div>
              ) : (
                <AiOutlineSend
                  style={{}}
                  onClick={async () => await onSendMessage()}
                  size={30}
                  color={"#218190"}
                  cursor="pointer"
                />
              )}
              {/* <Button onClick={() => resetTranscript()}>Reset</Button> */}
            </div>
            <br />
          </center>
        </ModalBody>
      </Modal>
    </div>
  );
};
export default LiliBotModal;
