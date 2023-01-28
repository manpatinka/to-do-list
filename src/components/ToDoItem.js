import '../styles/todoitem.css';
import { Link } from 'react-router-dom';

//npx json-server --watch src/store/data.json --port 4444 (any number different than 3000)
//to fetch the data

const ToDoItem = (props) => {
    const performDeleteTask = () => {
        fetch(`http://localhost:4321/todos/${props.task.id}`, {
            method: 'DELETE'
        }).then(() => {
            props.onDeleteTask(props.task.id);
        }).catch((err) => console.log(err));
    };

    const performToggleTask = () => {
        fetch(`http://localhost:4321/todos/${props.task.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ complete: !props.task.complete })
        }).then(() => {
            props.onToggleTask(props.task.id);
        }).catch((err) => console.log(err));
    };

    const classes = ['task'];
    if (props.task.complete) {
        classes.push('complete');
    }

    return ( 
        <div className={classes.join(' ')}>


          <div className="buttons">
            <button><Link to={`/todos/${props.task.id}`}>edit</Link></button>
            <button onClick={performDeleteTask}>delete</button>
          </div>


          <div className="details">
            <label className="switch">
            <input 
              type="checkbox" 
              id="checkbox"
              onClick={performToggleTask} 
            />
            <div className="slider"></div>
            <div className="slider-card">
              <div className="slider-card-face slider-card-front"></div>
              <div className="slider-card-face slider-card-back"></div>
            </div>
            </label>
           <div className="todo">
            <h4>{props.task.title}</h4>
            <p>{props.task.details}</p>
          </div>
          </div>
         
        </div>
     );
}
 
export default ToDoItem;