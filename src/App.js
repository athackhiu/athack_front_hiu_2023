import React, { Suspense } from "react";
// import { useSpeechSynthesis } from "react-speech-kit";
// ** Router Import
import Router from "./router/Router";
import LiliBotModal from "./views/components/lili-bot-modal/LiliBotModal";
// import botImage from "./images/git_bot_chat_2.gif";

// import { useSkin } from "@hooks/skin";

const App = () => {
  return (
    <Suspense fallback={null}>
      <LiliBotModal />
      <Router />
    </Suspense>
  );
};

export default App;
