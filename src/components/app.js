import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import TodoList from './todo_list'
import AddForm from './add_form'

const App = () => (
    <div className="container">
        <h1 className="center-align">To Do List</h1>
        <hr/>
        <AddForm/>
        <hr/>
        <TodoList/>
    </div>
);

export default App;
