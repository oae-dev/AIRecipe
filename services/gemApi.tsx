import axios from 'axios';
import { GOOGLE_GENI_API } from './constants';

const ModalAI = async (input: string) => {
  try {
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'openai/gpt-3.5-turbo',
        messages: [
          {
            role: 'user',
            content: input,
          },
        ],
      },
      {
        headers: {
          'Authorization': `Bearer ${GOOGLE_GENI_API}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data;
  } catch (error: any) {
    console.error('🔥 OpenRouter Error:', error.response?.data || error.message);
    throw error;
  }
};

export default ModalAI;
