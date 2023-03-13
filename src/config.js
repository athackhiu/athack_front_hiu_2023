const one = `sk-3h3NWumvu2Bcjp`
const two = `CSQAjyT3BlbkFJmN`
const three = `wIdpXyzo2ZVC0iEYdj`
export const OPENAI_KEY = `${one}${two}${three}`
export const OPENAI_URL = `https://api.openai.com/v1/completions`
/*
curl https://api.openai.com/v1/chat/completions -H 'Content-Type: application/json' -H 'Authorization: Bearer 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' -d '{ "model": "gpt-3.5-turbo", "messages": [{"role": "user", "content": "Hi"}], "temperature": 0.7 }'
*/