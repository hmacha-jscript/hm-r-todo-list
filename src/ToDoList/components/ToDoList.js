import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

class ToDoList extends Component {
    render() {
        return (
            <div>
                <ToDoItem />
            </div>
        )
    }
}

export default ToDoList;