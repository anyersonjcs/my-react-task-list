import { useState } from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';
import './App.css'

function App() {
    const [tasks, setTasks] = useState([
        { task: 'Tarea 1', complete: false },
        { task: 'Tarea 2', complete: true },
    ]);
    const [newTask, setNewTask] = useState('');

    const addTask = (event) => {
        event.preventDefault();
        if (newTask.trim() !== '') {
            setTasks([...tasks, { task: newTask, complete: false }]);
            setNewTask('');
        }
    };

    const toggleTask = (index) => {
        const newTasks = [...tasks];
        newTasks[index].complete = !newTasks[index].complete;
        setTasks(newTasks);
    };

    const deleteTask = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    const editTask = (index) => {
        const newTasks = [...tasks];
        const task = prompt('Editar tarea', newTasks[index].task);
        if (task !== null && task.trim() !== '') {
            newTasks[index].task = task;
            setTasks(newTasks);
        }
    };

    const deleteAllTasks = () => {
        setTasks([]);
    };

return (
<div className="App">
<Header />
<form onSubmit={addTask}>
<input value={newTask} onChange={(e) => setNewTask(e.target.value)} />
<button type="submit">Añadir tarea</button>
</form>
<button onClick={deleteAllTasks}>Borrar todas las tareas</button>
<TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} editTask={editTask} />
</div>
);
}

export default App;
