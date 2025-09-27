// import { GoogleGenerativeAI } from "@google/generative-ai";

// const API_KEY = ""; // bu yerga o'zingizning API keyingizni yozing
// const genAI = new GoogleGenerativeAI(API_KEY);

// export async function runChat(prompt) {
//   try {
//     // Modelni chaqiramiz
//     const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

//     // Prompt yuboramiz
//     const result = await model.generateContent(prompt);

//     // Natija olish
//     const response = result.response;
//     return response.text();

//   } catch (err) {
//     console.error("Xatolik:", err);
//     return "Xatolik yuz berdi.";
//   }
// }





const apiKey = 'AIzaSyADfUTyJxYSDevCcKdWt5j_i4q9lMtUd4k'

import { GoogleGenAI } from '@google/genai';


async function runChat(prompt) {
  try {
    const ai = new GoogleGenAI({ apiKey });

    const model = 'gemini-2.5-flash';
    const contents = [
      {
        role: 'user',
        parts: [{ text: prompt }], // SDK versiyasiga qarab ishlaydi
      },
    ];

    const response = await ai.models.generateContentStream({
      model,
      contents,
    });



    let finalText = '';
    for await (const chunk of response) {
      console.log(chunk.text);
      finalText += chunk.text;
    }

    return finalText;
  } catch (err) {
    console.error('Xatolik:', err);
    return 'Xatolik yuz berdi.';
  }
}

export default runChat;
