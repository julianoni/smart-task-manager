import { useSelector, useDispatch } from "react-redux";
import { addTask, removeTask } from "../store/taskSlice";
import Header from "../components/Header";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import PriorityAI from "../components/PriorityAI";

const Home = () => {
    const tasks = useSelector((state) => state.tasks.tasks);
    const dispatch = useDispatch();

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
            <Header />
            <div className="max-w-lg mx-auto p-4">
                <TaskForm addTask={(task) => dispatch(addTask(task))} />
                <TaskList tasks={tasks} removeTask={(index) => dispatch(removeTask(index))} />
                <PriorityAI />
            </div>
        </div>
    );
};

export default Home;

