import { FaEdit, FaTrash } from 'react-icons/fa';


function Task({ task, complete, toggleTask, deleteTask, editTask }) {
    return (
        <div className="task">
            <input type="checkbox" checked={complete} onChange={toggleTask} />
            <label style={{ textDecoration: complete ? 'line-through' : 'none' }}>{task}</label>
            <FaEdit onClick={editTask} />
            <FaTrash onClick={deleteTask} />
        </div>
    );
}
export default Task;
