const express = require("express");
const Groq = require("groq-sdk");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
const port = 3000;

app.use(cors());

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function getGroqChatCompletion(prompt) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
    model: "llama3-8b-8192",
  });
}

// Handle GET request with query parameter
app.get("/chat", async (req, res) => {
  const { prompt } = req.query;

  if (!prompt) {
    return res.status(400).send("Missing prompt query parameter");
  }

  try {
    const chatCompletion = await getGroqChatCompletion(prompt);
    res.send(chatCompletion.choices[0]?.message?.content || "");
  } catch (error) {
    console.error("Error querying Groq AI:", error);
    res.status(500).send("Error querying Groq AI");
  }
});

// Handle POST request
app.post("/chat", async (req, res) => {
  const { prompt } = req.query;

  if (!prompt) {
    return res.status(400).send("Missing prompt query parameter");
  }

  try {
    const chatCompletion = await getGroqChatCompletion(prompt);
    res.send(chatCompletion.choices[0]?.message?.content || "");
  } catch (error) {
    console.error("Error querying Groq AI:", error);
    res.status(500).send("Error querying Groq AI");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});