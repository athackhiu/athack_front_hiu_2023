export const OPENAI_KEY = `${import.meta.env.VITE_OPENAI_KEY}`;
export const OPENAI_URL = `https://api.openai.com/v1/completions`;
const node_bot_host = `${import.meta.env.VITE_SERVER_URL}` || `https://athack-back-hiu-2023.vercel.app`
export const NODE_BOT_URL = `${node_bot_host}/chatbot/chat`
// export const deploy = true;
/*
curl https://api.openai.com/v1/chat/completions -H 'Content-Type: application/json' -H 'Authorization: Bearer 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' -d '{ "model": "gpt-3.5-turbo", "messages": [{"role": "user", "content": "Hi"}], "temperature": 0.7 }'
*/
