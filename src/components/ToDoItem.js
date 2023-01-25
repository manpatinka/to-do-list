import '../styles/todoitem.css';
import { json, Link } from 'react-router-dom';

//npx json-server --watch src/store/data.json --port 4000 (any number different than 3000)
//to fetch the data

const ToDoItem = (props) => {
    const deleteItem = () => {
        fetch(`http://localhost:4000/todos/${props.todos.id}`, {
            method: 'DELETE'
        }).then(() => {
            props.onDeleteItem(props.todos.id);
        }).catch((err) => console.log(err));
    };

    const todoToggle = (props) => {
        fetch(`http://localhost:4000/todos/${props.todos.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ complete: !props.todos.complete })
        }).then(() => {
            props.onToggleItem(props.todos.id);
        }).catch((err) => console.log(err));
    };

    const classes = ['item'];
    if (props.item.complete) {
        classes.push('complete');
    }

    return ( 
        <div className={classes.join(' ')}>
          <div className="actions">
            <h4>{props.item.title}</h4>
            
          </div>
        </div>
     );
}
 
export default ToDoItem;