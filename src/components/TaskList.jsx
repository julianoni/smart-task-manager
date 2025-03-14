const TaskList = ({ tasks, removeTask }) => {
    return (
        <div className="p-4">
            {tasks.length === 0 ? (
                <p className="text-gray-500">No tasks yet. Add one!</p>
            ) : (
                tasks.map((task, index) => (
                    <div key={index} className="flex justify-between items-center p-2 bg-gray-200 dark:bg-gray-700 rounded mb-2">
                        <span className="dark:text-white">{task}</span>
                        <button onClick={() => removeTask(index)} className="text-red-500">❌</button>
                    </div>
                ))
            )}
        </div>
    );
};

export default TaskList;
