export const GenrateImage = async (prompt: string): Promise<string> => {
  try {
    const response = await axios.post(
      'https://api-inference.huggingface.co/models/CompVis/stable-diffusion-v1-4',
      { inputs: prompt },
      {
        headers: {
          Authorization: `Bearer ${HUGGING_FACE_API_TOKEN}`,
          'Content-Type': 'application/json',
        },
        responseType: 'arraybuffer',
      }
    );

    // Convert binary data to base64 (browser-safe)
    const base64 = `data:image/png;base64,${btoa(
      new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
    )}`;

    return base64;
  } catch (error: any) {
    console.error('❌ Hugging Face error:');

    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Headers:', error.response.headers);
      console.error('Data:', error.response.data);
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Error message:', error.message);
    }

    console.error('Full error object:', error);
    throw error;
  }
};
