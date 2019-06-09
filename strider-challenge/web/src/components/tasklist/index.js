import React, { Component } from 'react';

import DeleteIcon from '../../resources/delete-icon.png'
import CompleteIcon from '../../resources/complete-icon.png'
import ResetIcon from '../../resources/reset-icon.png'

import './style.css';

import apiRoutes from '../../routes/api';
const api = new apiRoutes();

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: this.props.name,
            active: this.props.active,
            image: this.props.image
        }
    }

    deleteTask(id) {

        api.deleteTaskById(id);

        this.setState({
            id: id
        })
    }

    resetTask(oldTask) {

        const updatedTask = {
            id: oldTask.id,
            name: oldTask.name,
            active: "false",
            image: oldTask.image
        }

        api.updateTask(updatedTask);

        this.setState({
            active: "false"
        })

    }

    completeTask(oldTask) {

        const updatedTask = {
            id: oldTask.id,
            name: oldTask.name,
            active: "true",
            image: oldTask.image
        }

        api.updateTask(updatedTask);

        this.setState({
            active: "true"
        })

    }

    render() {
        return (
            <div className="container">
                {
                    this.props.selector === "Todos"
                        ?
                        this.state.id === ""
                            ?
                            <div className="task-card">
                                {
                                    this.state.active === "true"
                                        ?
                                        <React.Fragment>
                                            <h1 className="task-title" style={{ textDecoration: "line-through" }}>{this.state.name}</h1>
                                            <img className="state-button" onClick={() => {
                                                this.resetTask(this.props)
                                            }} src={ResetIcon} alt="state-button" />
                                        </React.Fragment>

                                        :
                                        <React.Fragment>
                                            <h1 className="task-title">{this.state.name}</h1>
                                            <img className="state-button" onClick={() => {
                                                this.completeTask(this.props)
                                            }} src={CompleteIcon} alt="state-button" />
                                        </React.Fragment>
                                }
                                <img className="delete-button" onClick={() => {
                                    this.deleteTask(this.props.id)
                                }} src={DeleteIcon} alt="delete-button" />
                            </div>

                            :
                            <div />
                        :
                        <div />
                }

                {
                    this.props.selector === "Pendentes" && this.state.active === "false"
                    ?
                        this.state.id === ""
                            ?
                            <div className="task-card">
                                {
                                    this.state.active === "true"
                                        ?
                                        <React.Fragment>
                                            <h1 className="task-title" style={{ textDecoration: "line-through" }}>{this.state.name}</h1>
                                            <img className="state-button" onClick={() => {
                                                this.resetTask(this.props)
                                            }} src={ResetIcon} alt="state-button" />
                                        </React.Fragment>

                                        :
                                        <React.Fragment>
                                            <h1 className="task-title">{this.state.name}</h1>
                                            <img className="state-button" onClick={() => {
                                                this.completeTask(this.props)
                                            }
                                            } src={CompleteIcon} alt="state-button" />
                                        </React.Fragment>
                                }
                                <img className="delete-button" onClick={() => {
                                    this.deleteTask(this.props.id)
                                }} src={DeleteIcon} alt="delete-button" />
                            </div>

                            :
                            <div />
                        :
                        <div />
                }

                {
                    this.props.selector === "Feitos" && this.state.active === "true"
                    ?
                        this.state.id === ""
                            ?
                            <div className="task-card">
                                {
                                    this.state.active === "true"
                                        ?
                                        <React.Fragment>
                                            <h1 className="task-title" style={{ textDecoration: "line-through" }}>{this.state.name}</h1>
                                            <img className="state-button" onClick={() => {
                                                this.resetTask(this.props)
                                            }} src={ResetIcon} alt="state-button" />
                                        </React.Fragment>

                                        :
                                        <React.Fragment>
                                            <h1 className="task-title">{this.state.name}</h1>
                                            <img className="state-button" onClick={() => {
                                                this.completeTask(this.props)
                                            }
                                            } src={CompleteIcon} alt="state-button" />
                                        </React.Fragment>
                                }
                                <img className="delete-button" onClick={() => {
                                    this.deleteTask(this.props.id)
                                }} src={DeleteIcon} alt="delete-button" />
                            </div>

                            :
                            <div />
                        :
                        <div />
                }
            </div>
        );
    }
}


export default TaskList;