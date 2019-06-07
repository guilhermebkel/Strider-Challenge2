import React, { Component } from 'react';

import DeleteIcon from '../../resources/delete-icon.png'
import CompleteIcon from '../../resources/complete-icon.png'
import ResetIcon from '../../resources/reset-icon.png'

import './style.css';

import apiRoutes from '../../routes/api';
const api = new apiRoutes();

class TaskList extends Component{
    constructor(props){
        super(props);
        this.state = {
            state: ""
        }
    }

    deleteTask(id){
        this.setState({
            state: "loading"
        })

        new Promise((callback)=> {
            api.deleteTaskById(id, callback);
        }).then(()=>{
            this.setState({
                state: ""
            })
        })
        
    }

    resetTask(oldTask){
        
        this.setState({
            state: "loading"
        })

        const updatedTask = {
            "id": oldTask.id,
            "name": oldTask.name,
            "description": "false"
        }

        new Promise((callback)=> {
            api.updateTask(updatedTask, callback);
        }).then(()=>{
            this.setState({
                state: ""
            })
        })
    }

    completeTask(oldTask){

        this.setState({
            state: "loading"
        })
        
        const updatedTask = {
            "id": oldTask.id,
            "name": oldTask.name,
            "description": "true"
        }

        new Promise((callback)=> {
            api.updateTask(updatedTask, callback);
        }).then(()=>{
            this.setState({
                state: ""
            })
        })

    }

    render(){
        return(
            <div className="container">
                <div className="task-card">
                    {
                        this.props.description === "true"
                        ?<React.Fragment>
                            <h1 className="task-title" style={{textDecoration: "line-through"}}>{this.props.name}</h1>
                            <img className="complete-button" onClick={()=> {
                            this.resetTask(this.props)}
                            } src={ResetIcon} alt="complete-button" />  
                        </React.Fragment>

                        :<React.Fragment>
                            <h1 className="task-title">{this.props.name}</h1>
                            <img className="complete-button" onClick={()=> {
                            this.completeTask(this.props)}
                            } src={CompleteIcon} alt="complete-button" />  
                        </React.Fragment>
                    }
                   
                    <img className="delete-button" onClick={()=> {
                        this.deleteTask(this.props.id)}
                        } src={DeleteIcon} alt="delete-button" />  
                </div>
            </div>
        );
    }
}


export default TaskList;