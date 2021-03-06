import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

class ToDoList extends Component {
    render() {
        const { items, clearList, handleDelete, handleEdit } = this.props;
        return (
            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">todo list</h3>
                {
                    items.map(item => (
                        <ToDoItem
                            key={item.id}
                            item={item}
                            handleDelete={() => handleDelete(item.id)}
                            handleEdit={() => handleEdit(item.id)}
                        />
                    ))
                }
                <button
                    type="button"
                    className="btn btn-danger btn-block text-uppercase mt-5"
                    onClick={clearList}>Clear List</button>
            </ul>
        )
    }
}

export default ToDoList;