import React, { Component } from 'react';
import DeleteIcon from '../../resources/delete-icon.png'
import './style.css';

class TaskList extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    deleteTask(id){

    }

    render(){
        return(
            <div className="container">
                <div className="task-card">
                    <h1 className="task-title">{this.props.name}</h1>
                    <img className="delete-button" onClick={()=> {
                        
                    }} src={DeleteIcon} alt="delete-button"></img>
                </div>
            </div>
        );
    }
}


export default TaskList;