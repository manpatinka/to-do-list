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
        fetch(`http://localhost:4321/todos/${taskId}`)
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
        fetch(`http://localhost:4321/todos/${taskId}`, {
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
        <Link to={`/`}><span className="back-home">&#8592; back home</span></Link>
        <br />
          <form 
            onSubmit={handleUpdate}
          >
          <div className="input-group">
            <label>Title</label>
            <br />
            <input 
              type="text"
              name="title"
              onChange={handleChange}
              value={task.title}
              maxLength={40}
              size={32}
              required
            />
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
            </div>
            <br />
            <button className="add-edit-button">Edit Task</button>
          </form>
        </div>
        
     );
}
 
export default EditTask;