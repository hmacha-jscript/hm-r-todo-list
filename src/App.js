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
    handleChange = (e) => { 
        const val = e.target.value;
        this.setState(()=>{
            return { item: val}
        })
     }
    handleSubmit = (e) => { 
        let {id,item,editItem,items} = this.state;
        e.preventDefault();
        let oldItems = [...items];

        if(editItem){   
            let newItems = oldItems.map(todo=>{
                if(todo.id===id){
                    todo.title = item;
                }
                return todo
            })
            this.setState(()=>{
                return {item:"", items: newItems, editItem: false}
            })
        } else {
            let workItem = {id: uuid(), title: this.state.item}
            oldItems.push(workItem);
            this.setState(()=>{
                return { items: oldItems, item: ""}
            })
        }
    }
    clearList = () => { 
        this.setState(()=>{
            return {items: [], item:"", editItem: false}
        })
    }
    handleDelete = (id) => { 
        let items = [...this.state.items];
        let newItems = items.filter(item=>item.id!==id)
        this.setState(()=>{
            return {items: newItems}
        })
    }
    handleEdit = (id) => { 
        let item = this.state.items.find(item=>item.id===id).title
        this.setState(()=>{
            return {item, editItem: true, id }
        })
    }

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