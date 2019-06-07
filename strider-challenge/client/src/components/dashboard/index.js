import React, { Component } from 'react';
import TaskList from '../tasklist/index';
import './style.css';
import './responsive.css';

class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state = {
            tasks: []
        }
    }

    componentWillReceiveProps(){
        this.setState({
            tasks: this.props.tasks
        })
    }

    render(){
        return(
            <React.Fragment>
                <div className="container">
                    <div className="selector">
                        <div className="left">
                            <h1 className="selector-title">Todos</h1>
                        </div>
                        <div className="center">
                            <h1 className="selector-title">Pendentes</h1>
                        </div>
                        <div className="right">
                            <h1 className="selector-title">Feitos</h1>
                        </div>
                    </div>
                </div>   

                <div>
                    {this.state.tasks.reverse().map(tasks => (
                        <TaskList {...tasks} />
                    ))}
                </div>
            </React.Fragment>
        );
    }
}

export default Dashboard;