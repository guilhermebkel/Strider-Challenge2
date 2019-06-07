import React, { Component } from 'react';
import DeleteIcon from '../../resources/delete-icon.png'
import './style.css';

import apiRoutes from '../../routes/api';
const api = new apiRoutes();

class TaskList extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    deleteTask(id){
        api.deleteTaskById(id);
    }

    render(){
        return(
            <div className="container">
                <div className="task-card">
                    <h1 className="task-title">{this.props.name}</h1>
                    <img className="delete-button" onClick={()=> {
                        this.deleteTask(this.props.id)}
                        } src={DeleteIcon} alt="delete-button" />
                </div>
            </div>
        );
    }
}


export default TaskList;