import React from 'react';
import ToDoInput from './ToDoList/components/ToDoInput';
import ToDoList from './ToDoList/components/ToDoList';
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <div>
            <div className="conatainer">
            <div className="row">
            <ToDoInput/>
            <ToDoList/>
            </div>
            </div>
        </div>
    )
}

export default App;