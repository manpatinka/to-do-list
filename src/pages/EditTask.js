import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

import '../styles/createtask.css';

const EditTask = () => {
    const [task, setTask] = useState({
        title: '',
        details: ''
    });
    
    const params = useParams();
    const taskId = params.id;
    const navigate = useNavigate();

    const handleChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    };

    useEffect(() => {
        fetch(`http://localhost:4444/todos/${taskId}`)
        .then((response) => {
            return response.json();
        }).then(data => {
            setTask({
                title: data.title,
                details: data.details
            });
        }).catch((err) => {
            console.log(err);
        })
    }, [taskId]);

    const handleUpdate= (e) => {
        e.preventDefault();
        fetch(`http://localhost:4444/todos/${taskId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(task)
        }).then(() => {
            navigate('/');
        }).catch((err) => {
            console.log(err);
        })
    }

    return ( 
        <div>
        <Link to={`/`}>Home</Link>
          <form 
            onSubmit={handleUpdate}
          >
            <label>Title</label>
            <input 
              type="text"
              name="title"
              onChange={handleChange}
              value={task.title}
              maxLength={22}
              required
            />
            <label>Details</label>
            <textarea 
              name="details" 
              cols="30"
              rows="10"
              onChange={handleChange}
              value={task.details}
              required
              >
            </textarea>
            <button className="add-edit-buttons">Edit Task</button>
          </form>
        </div>
        
     );
}
 
export default EditTask;