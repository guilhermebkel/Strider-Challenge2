import React, { Component } from 'react';
import Dashboard from '../dashboard/index';
import './style.css'

// REST API
import apiRoutes from '../../routes/api';
const api = new apiRoutes();

class TaskBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            newTask: "",
            loading: {},
            placeholder: "O que precisa ser feito?",
            tasks: []
        }
        this.handleNewTask = this.handleNewTask.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.addNewTask = this.addNewTask.bind(this);
    }

    // Since app starts, it sends a request to database
    // in order to retrieve data.
    componentDidMount(){

        this.setState({
            loading: {animation: "loading 1s infinite", pointerEvents: "none"},
            placeholder: "Conectando ao servidor..."
        })

        new Promise((callback) => {
          
          api.getAllTasksFromDatabase(callback);
    
        }).then((tasks) => {
          this.sortTasks(tasks);
        })
    }

    // Sorts out the tasks by order state -
    // Descending from incomplete to complete.
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
            loading: {},
            placeholder: "O que precisa ser feito?"
        })
    }

    addNewTask(){

        const newTask = {
            "name": this.state.newTask,
            "active": "false",
            "image": "null"
        }

        // Verifies if there's an existing task
        for(let i=0; i<this.state.tasks.length; i++){
            if(this.state.tasks[i].name === this.state.newTask){
                this.setState({
                    newTask: "",
                    placeholder: "Essa tarefa já existe!"
                })
                return;
            }
        }

        this.setState({
            loading: {animation: "loading 1s infinite", pointerEvents: "none"}
        })

        // Sends a request to add the new task
        // on database.
        new Promise((callback) => {
            api.addTask(newTask, callback);
        }).then((newTask) => {
            this.setState({
                tasks: [newTask, ...this.state.tasks],
                newTask: "",
                loading: {},
                placeholder: "O que precisa ser feito?"
            })
        })
    }

    // Automatically updates current state
    // with new data typed by user.
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
            <>
                <container>
                    <div className="search-bar" style={this.state.loading}>
                        <input value={this.state.newTask} placeholder={this.state.placeholder} 
                        onChange={this.handleNewTask} onKeyPress={this.handleKeyPress} />
                        <button onClick={this.addNewTask}><h1>Adicionar</h1></button>
                    </div>
                </container>

                <Dashboard tasks={this.state.tasks} />  
            </>
        );
    }
}

export default TaskBar;