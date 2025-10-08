import OpenAI from 'openai';


const client = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_GPT_API_KEY, // This is the default and can be omitted
  dangerouslyAllowBrowser: true, // Allow usage in the browser (not recommended for production)
});


export default client;