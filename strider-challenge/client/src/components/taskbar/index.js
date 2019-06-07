import React, { Component } from 'react';
import './style.css'

import apiRoutes from '../../routes/api';
const api = new apiRoutes();

class TaskBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            newTask: ""
        }
        this.handleNewTask = this.handleNewTask.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.addNewTask = this.addNewTask.bind(this)
    }

    // Makes a request to add new task to database
    addNewTask(){

        const newTask = {
            "name": this.state.newTask,
            "description": "false"
        }

        new Promise((callback) => {

            api.addTask(newTask, callback);

        }).then(() => {

            this.setState({
                newTask: ""
            })

        })
    }

    // Automatically updates current state
    // with new data typed by user
    handleNewTask(event){
        this.setState({
            newTask: event.target.value
        })
    }

    // When user press enter inside input
    // field, it triggers the action of 'New Task'
    handleKeyPress(event){
        if(event.key === 'Enter'){
            this.addNewTask();
        }
    }

    render(){
        return(
            <div className="search-bar">
                <div className="search-bar-container">
                    <input value={this.state.newTask} placeholder="O que precisa ser feito?" onChange={this.handleNewTask} onKeyPress={this.handleKeyPress}></input>
                    <div className="button" onClick={this.addNewTask}><h1>Adicionar</h1></div>
                </div>
            </div>
        );
    }
}

export default TaskBar;