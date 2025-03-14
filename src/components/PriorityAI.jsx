import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const PriorityAI = () => {
    const tasks = useSelector((state) => state.tasks.tasks);
    const [priority, setPriority] = useState("");

    const getPriority = async () => {
        try {
            const response = await axios.post("https://your-backend-url.com/api/priority", { tasks });
            setPriority(response.data.priority);
        } catch (error) {
            console.error("Error fetching priority:", error);
        }
    };

    return (
        <div className="p-4">
            <button onClick={getPriority} className="bg-green-500 text-white p-2 rounded">Get AI Priority</button>
            {priority && <p className="mt-2">{priority}</p>}
        </div>
    );
};

export default PriorityAI;

