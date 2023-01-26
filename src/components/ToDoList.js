import '../styles/todolist.css';
import ToDoItem from './ToDoItem';

const ToDoList = (props) => {
    if (!props.todos) return null;
    return ( 
        <div className="todolist">
          {props.todos.map((task) => {
            <ToDoItem
              key={props.task.id}
              task={task}
              onDeleteTask={props.deleteTask}
              onToggleTask={props.onToggleTask}
            />
          })}
        </div>
     );
}
 
export default ToDoList;