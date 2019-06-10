import React, { Component } from 'react';
import TaskCard from '../taskcard/index';

import './style.css';

// REST API
import apiRoutes from '../../routes/api';
const api = new apiRoutes();

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDeleted: false,
            name: this.props.name,
            active: this.props.active,
            image: this.props.image
        }

        this.deleteTask = this.deleteTask.bind(this);
        this.resetTask = this.resetTask.bind(this);
        this.completeTask = this.completeTask.bind(this);
    }

    deleteTask(id) {

        api.deleteTaskById(id);

        this.setState({
            isDeleted: true
        })
    }

    // Turns task state to
    // incomplete.
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

    // Turns task state to
    // complete.
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
                        this.state.isDeleted === false
                            ?
                            <TaskCard {...this.props}
                                name={this.state.name}
                                active={this.state.active}
                                id={this.props.id}
                                resetTask={this.resetTask}
                                completeTask={this.completeTask}
                                deleteTask={this.deleteTask} />

                            :
                            <div />
                        :
                        <div />
                }

                {
                    this.props.selector === "Pendentes" && this.state.active === "false"
                        ?
                        this.state.isDeleted === false
                            ?
                            <TaskCard {...this.props}
                                name={this.state.name}
                                active={this.state.active}
                                id={this.props.id}
                                resetTask={this.resetTask}
                                completeTask={this.completeTask}
                                deleteTask={this.deleteTask} />

                            :
                            <div />
                        :
                        <div />
                }

                {
                    this.props.selector === "Feitos" && this.state.active === "true"
                        ?
                        this.state.isDeleted === false
                            ?
                            <TaskCard {...this.props}
                                name={this.state.name}
                                active={this.state.active}
                                id={this.props.id}
                                resetTask={this.resetTask}
                                completeTask={this.completeTask}
                                deleteTask={this.deleteTask} />

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