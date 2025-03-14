import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/priority", async (req, res) => {
    try {
        const { tasks } = req.body;
        const response = await axios.post(
            "https://api.openai.com/v1/chat/completions",
            {
                model: "gpt-3.5-turbo",
                messages: [
                    { role: "system", content: "You are an AI assistant that helps prioritize tasks." },
                    { role: "user", content: `Here are my tasks: ${tasks.join(", ")}. Which ones should I prioritize?` }
                ]
            },
            {
                headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` }
            }
        );

        res.json({ priority: response.data.choices[0].message.content });
    } catch (error) {
        res.status(500).json({ error: "Error processing request" });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
