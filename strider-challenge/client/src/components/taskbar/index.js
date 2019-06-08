import React, { Component } from 'react';
import Dashboard from '../dashboard/index';
import './style.css'

import apiRoutes from '../../routes/api';
const api = new apiRoutes();

class TaskBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            newTask: "",
            isActive: {},
            tasks: []
        }
        this.handleNewTask = this.handleNewTask.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.addNewTask = this.addNewTask.bind(this)
    }

    // Since app starts, it send a request to database
    // in order to retrieve data.
    componentDidMount(){
        new Promise((callback) => {
          
          api.getAllTasksFromDatabase(callback);
    
        }).then((tasks) => {
          this.setState({
            tasks: tasks
          })
        })
    }

    // Makes a request to add new task to database
    addNewTask(){

        const newTask = {
            "name": this.state.newTask,
            "description": "false"
        }

        this.setState({
            isActive: {animation: "loading 1s infinite", pointerEvents: "none"}
        })

        new Promise((callback) => {
            api.addTask(newTask, callback);
        }).then((newTask) => {
            this.setState({
                tasks: [newTask, ...this.state.tasks],
                newTask: "",
                isActive: {}
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
            <React.Fragment>

                <div className="search-bar">
                    <div className="search-bar-container">
                        <input style={this.state.isActive} value={this.state.newTask} 
                        placeholder="O que precisa ser feito?" onChange={this.handleNewTask} 
                        onKeyPress={this.handleKeyPress}>
                        </input>
                        <div className="button" onClick={this.addNewTask}><h1>Adicionar</h1></div>
                    </div>
                </div>

                <Dashboard tasks={this.state.tasks} />
                
            </React.Fragment>
        );
    }
}

export default TaskBar;