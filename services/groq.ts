import Groq from "groq-sdk";

const test = new Groq({ apiKey: process.env.EXPO_PUBLIC_GROQ_KEY });

export async function getGroqCompletion() {
  const completion = await test.chat.completions.create({
    messages: [
      {
        role: "user",
        content: "Hello, how are you?",
      },
    ],
    model: "deepseek-r1-distill-llama-70b",
    temperature: 0.7,
    max_tokens: 100,
  });

  return completion.choices[0].message.content;
}
