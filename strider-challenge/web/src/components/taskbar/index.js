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
            loading: {},
            tasks: []
        }
        this.handleNewTask = this.handleNewTask.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.addNewTask = this.addNewTask.bind(this)
    }

    // Since app starts, it sends a request to database
    // in order to retrieve data.
    componentDidMount(){

        this.setState({
            loading: {animation: "loading 1s infinite", pointerEvents: "none"}
        })

        new Promise((callback) => {
          
          api.getAllTasksFromDatabase(callback);
    
        }).then((tasks) => {
          this.sortTasks(tasks);
        })
    }

    sortTasks(tasks){
        let sortedTasks = [];

        for(let i=0; i<tasks.length; i++){
            if(tasks[i].active === "true"){
                sortedTasks.push(tasks[i]);
            }
        }

        for(let i=0; i<tasks.length; i++){
            if(tasks[i].active === "false"){
                sortedTasks.push(tasks[i]);
            }
        }

        this.setState({
            tasks: sortedTasks,
            loading: {}
        })
    }

    // Makes a request to add new task to database
    addNewTask(){

        const newTask = {
            "name": this.state.newTask,
            "active": "false",
            "image": "null"
        }

        this.setState({
            loading: {animation: "loading 1s infinite", pointerEvents: "none"}
        })

        new Promise((callback) => {
            api.addTask(newTask, callback);
        }).then((newTask) => {
            this.setState({
                tasks: [newTask, ...this.state.tasks],
                newTask: "",
                loading: {}
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
                        <input style={this.state.loading} value={this.state.newTask} 
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