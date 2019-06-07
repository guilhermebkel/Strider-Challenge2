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
            id: "",
            name: this.props.name,
            description: this.props.description
        }
    }

    deleteTask(id){
        
        api.deleteTaskById(id);
        
        this.setState({
            id: id
        })
    }

    resetTask(oldTask){
        
        const updatedTask = {
            id: oldTask.id,
            name: oldTask.name,
            description: "false"
        }
        
        api.updateTask(updatedTask);

        this.setState({
            description: "false"
        })
     
    }

    completeTask(oldTask){
        
        const updatedTask = {
            id: oldTask.id,
            name: oldTask.name,
            description: "true"
        }

        api.updateTask(updatedTask);

        this.setState({
            description: "true"
        })
   
    }

    render(){
        return(
            <div className="container">
                {
                    this.state.id === ""
                    ?<div className="task-card">
                    {
                        this.state.description === "true"
                        ?<React.Fragment>
                            <h1 className="task-title" style={{textDecoration: "line-through"}}>{this.state.name}</h1>
                            <img className="complete-button" onClick={()=> {
                            this.resetTask(this.props)}
                            } src={ResetIcon} alt="complete-button" />  
                        </React.Fragment>

                        :<React.Fragment>
                            <h1 className="task-title">{this.state.name}</h1>
                            <img className="complete-button" onClick={()=> {
                            this.completeTask(this.props)}
                            } src={CompleteIcon} alt="complete-button" />  
                        </React.Fragment>
                    }
                   
                        <img className="delete-button" onClick={()=> {
                            this.deleteTask(this.props.id)}
                            } src={DeleteIcon} alt="delete-button" />  
                    </div>

                :<div></div>
                }
                
            </div>
        );
    }
}


export default TaskList;