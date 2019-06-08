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
            tasks: [],
            incompleteTasks: [],
            completedTasks: []
        }
        this.handleNewTask = this.handleNewTask.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.addNewTask = this.addNewTask.bind(this)
    }

    sortTasks(tasks){
        const incompleteTasks = [];
        const completedTasks = [];

        for(let i=0; i<tasks.length; i++){
            if(tasks[i].description === "false"){
                incompleteTasks.push(tasks[i]);
            }
            else if(tasks[i].description === "true"){
                completedTasks.push(tasks[i]);
            }
        }

        this.setState({
            incompleteTasks: incompleteTasks,
            completedTasks: completedTasks
        }) 

    }

    componentDidMount(){
        new Promise((callback) => {
          
          api.getAllTasksFromDatabase(callback);
    
        }).then((tasks) => {
          this.setState({
            tasks: tasks
          })
          this.sortTasks(this.state.tasks);
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
                tasks: [...this.state.tasks, newTask],
                newTask: "",
                isActive: {}
            })
            this.sortTasks(this.state.tasks);
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

                <Dashboard tasks={this.state.tasks} incompleteTasks={this.state.incompleteTasks} 
                completedTasks={this.state.completedTasks} />
            </React.Fragment>
        );
    }
}

export default TaskBar;