import React, { Component } from 'react';

import DeleteIcon from '../../resources/delete-icon.png'
import CompleteIcon from '../../resources/complete-icon.png'
import ResetIcon from '../../resources/reset-icon.png'

import './style.css';

class TaskCard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="task-card">
                {
                    this.props.active === "true"
                        ?
                        <>
                            <h1 className="task-title" style={{ textDecoration: "line-through" }}>
                                {this.props.name}
                            </h1>
                            <img className="state-button" 
                            onClick={() => {this.props.resetTask(this.props)}} 
                            src={ResetIcon} alt="state-button" />
                        </>

                        :
                        <>
                            <h1 className="task-title">{this.props.name}</h1>
                            <img className="state-button" 
                            onClick={() => {this.props.completeTask(this.props)}} 
                            src={CompleteIcon} alt="state-button" />
                        </>
                }
                <img className="delete-button" onClick={() => {this.props.deleteTask(this.props.id)}} 
                src={DeleteIcon} alt="delete-button" />
            </div>
        )
    }
}

export default TaskCard;