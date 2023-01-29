import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import '../styles/createtask.css';

const CreateTask = () => {
    const [task, setTask] = useState({
        title: '',
        details: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            title: task.title,
            details: task.details,
            complete: false,
            id: Math.floor(Math.random() * 1000)
        }
        console.log('new task', newTask);
        fetch('http://localhost:4321/todos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newTask)
        }).then(() => {
            navigate('/');
        }).catch((err) => {
            console.log(err);
        })
    }

    return ( 
        <div>
          <Link to={`/`}><span className="back-home">&#8592; back home</span></Link>
          <br />
          <form 
          onSubmit={handleSubmit}
        >
          <div className="input-group">
          <label>Title</label>
          <br />
            <input 
              type="text"
              name="title"
              onChange={handleChange}
              value={task.title}
              maxLength={37}
              size={32}
              required
            />
    
            
          </div>
          
          <br />
          <label>Details</label>
          <br />
          <textarea 
            name="details" 
            cols="50"
            rows="10"
            onChange={handleChange}
            value={task.details}
            required
            >
          </textarea>
          <br />
          <button className="add-task">Add Task</button>
        </form>
        </div>
        
     );
}
 
export default CreateTask;