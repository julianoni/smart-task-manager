import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";

const PriorityAI = () => {
    const tasks = useSelector((state) => state.tasks.tasks);
    const [priority, setPriority] = useState("");

    const getPriority = async () => {
        const response = await axios.post("https://api.openai.com/v1/chat/completions", {
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: `Here are my tasks: ${tasks.join(", ")}. Which ones should I prioritize?` }],
        }, {
            headers: { "Authorization": `Bearer YOUR_OPENAI_API_KEY` }
        });

        setPriority(response.data.choices[0].message.content);
    };

    return (
        <div className="p-4">
            <button onClick={getPriority} className="bg-green-500 text-white p-2 rounded">Get AI Priority</button>
            {priority && <p className="mt-2">{priority}</p>}
        </div>
    );
};

export default PriorityAI;
