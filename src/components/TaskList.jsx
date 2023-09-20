import Task from './Task';

function TaskList({ tasks, toggleTask, deleteTask, editTask }) {
    return (
        <div className="task-list">
            {tasks.map((task, index) => (
                <Task
                    key={index}
                    {...task}
                    toggleTask={() => toggleTask(index)}
                    deleteTask={() => deleteTask(index)}
                    editTask={() => editTask(index)}
                />
            ))}
        </div>
    );
}
export default TaskList;
