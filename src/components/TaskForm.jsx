import { useState } from "react";

const TaskForm = ({ addTask }) => {
    const [task, setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!task.trim()) return;
        addTask(task);
        setTask("");
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 p-4">
            <input
                type="text"
                placeholder="New task..."
                value={task}
                onChange={(e) => setTask(e.target.value)}
                className="border p-2 w-full rounded dark:bg-gray-700 dark:text-white"
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add</button>
        </form>
    );
};

export default TaskForm;
