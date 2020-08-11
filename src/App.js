import React, {Component} from 'react';
import {v4 as uuid} from 'uuid';
import ToDoInput from './ToDoList/components/ToDoInput';
import ToDoList from './ToDoList/components/ToDoList';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    state = {
        items: [{ id: 1, title: 'wake up' }, { id: 2, title: 'break-fast' }],
        id: uuid(),
        item: '',
        editItem: false
    }
    handleChange = (e) => { console.log('handle change') }
    handleSubmit = (e) => { console.log('handle submit') }
    clearList = () => { console.log('clear list') }
    handleDelete = (id) => { console.log('handle delete') }
    handleEdit = (id) => { console.log('handle edit') }

    render(){
    return (
        <div>
            <div className="conatainer">
                <div className="row">
                    <div className="col-10 mx-auto col-md-8 mt-5">
                        <h3 className="text-capitalize text-center">
                            Todo Input
                        </h3>
                        <ToDoInput 
                            item={this.state.item} 
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                            editItem = {this.state.editItem}
                        />
                        <ToDoList
                            items={this.state.items}
                            clearList={this.clearList}
                            handleDelete={this.handleDelete}
                            handleEdit={this.handleEdit}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
    }
}

export default App;