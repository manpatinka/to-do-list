import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import MainFilter from '../components/MainFilter';
import ToDoList from '../components/ToDoList';

//npx json-server --watch src/store/data.json --port 4321

const HomePage = () => {
    const [ todos, setTodos ] = useState();
    const [ currentFilter, setCurrentFilter ] = useState('all');

    const updateFilterHandler = (newFilter) => {
        setCurrentFilter(newFilter);
    }

    useEffect (() => {
        async function fetchTodos() {
            try {
                const response = await fetch(`http://localhost:4321/todos`);
                const fetchedTodos = await response.json();
                console.log(fetchedTodos);
                setTodos(fetchedTodos);
            } catch(err) {
                console.log(err)
            }
        }
        fetchTodos();
    }, []);

    const handleDelete = (id) => {
        const newList = todos.filter((task) => task.id !== id);
        setTodos(newList);
    }

    const handleToggleComplete = (id) => {
        const copyList = [...todos];
        const clickedTaskIndex = copyList.findIndex((task) => task.id === id);
        const clickedTask = copyList[clickedTaskIndex];
        clickedTask.complete = !clickedTask.complete;
        setTodos(copyList);
    }

    let toDoList = ( 
        <ToDoList 
          todos={todos}
          onDeleteTask={handleDelete}
          onToggleTask={handleToggleComplete}
        /> 
    );

    if(currentFilter === 'completed') {
        toDoList = (
            <ToDoList
              todos={todos.filter((task) => task.complete)}
              onDeleteTask={handleDelete}
              onToggleTask={handleToggleComplete}
            />
        )
    } else if (currentFilter === 'pending') {
          toDoList = (
            <ToDoList
              todos={todos.filter((task) => !task.complete)}
              onDeleteTask={handleDelete}
              onToggleTask={handleToggleComplete}
            />
        )
    }
    

    return ( 
        <div>
          <h1>To Do List</h1>
          <Link to={`/createtask`}>CreateTask</Link>
          <MainFilter 
            onUpdate={updateFilterHandler}
            current={currentFilter}
          />
          {toDoList}
        </div> 
    );
}
 
export default HomePage;