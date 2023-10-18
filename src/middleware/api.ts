import axios from 'axios';

export async function translateText(text: string, sourceLang: string = 'en', targetLang: string = 'id'): Promise<any> {
  const encodedParams = new URLSearchParams();
  encodedParams.set('source_language', sourceLang);
  encodedParams.set('target_language', targetLang);
  encodedParams.set('text', text);

  const options = {
    method: 'POST',
    url: 'https://text-translator2.p.rapidapi.com/translate',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': import.meta.env.VITE_APP_X_RapidAPI_Key, 
      'X-RapidAPI-Host': import.meta.env.VITE_APP_X_RapidAPI_Host
    },
    data: encodedParams,
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
