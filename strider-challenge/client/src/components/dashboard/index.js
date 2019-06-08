import React, { Component } from 'react';
import TaskList from '../tasklist/index';
import './style.css';
import './responsive.css';

class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state = {
            selector: "Todos"
        }
        this.handleSelector = this.handleSelector.bind(this);
    }

    componentWillReceiveProps(){
        this.handleSelector(this.state.selector);
    }

    handleSelector(selector){
        this.setState({
            selector: selector
        }, () => {
            if(this.state.selector === "Todos"){
                const Todos = document.getElementsByClassName('left')[0];
                Todos.style.backgroundColor = "#072416";
                const Pendentes = document.getElementsByClassName('center')[0];
                Pendentes.style.backgroundColor = "#0e442b";
                const Feitos = document.getElementsByClassName('right')[0];
                Feitos.style.backgroundColor = "#0e442b";
            }
            else if(this.state.selector === "Pendentes"){
                const Todos = document.getElementsByClassName('left')[0];
                Todos.style.backgroundColor = "#0e442b";
                const Pendentes = document.getElementsByClassName('center')[0];
                Pendentes.style.backgroundColor = "#072416";
                const Feitos = document.getElementsByClassName('right')[0];
                Feitos.style.backgroundColor = "#0e442b";
            }
            else{
                const Todos = document.getElementsByClassName('left')[0];
                Todos.style.backgroundColor = "#0e442b";
                const Pendentes = document.getElementsByClassName('center')[0];
                Pendentes.style.backgroundColor = "#0e442b";
                const Feitos = document.getElementsByClassName('right')[0];
                Feitos.style.backgroundColor = "#072416";
            }    
        })     
    }

    render(){
        return(
            <React.Fragment>
                <div className="container">
                    <div className="selector">
                        <div className="left" onClick={() => {this.handleSelector("Todos")}}>
                            <h1 className="selector-title">Todos</h1>
                        </div>
                        <div className="center" onClick={() => {this.handleSelector("Pendentes")}}>
                            <h1 className="selector-title">Pendentes</h1>
                        </div>
                        <div className="right" onClick={() => {this.handleSelector("Feitos")}}>
                            <h1 className="selector-title">Feitos</h1>
                        </div>
                    </div>
                </div>   
                {
                    this.state.selector === "Todos"
                    ?<div>
                        {console.log(this.state.selector)}
                        {this.props.tasks.slice(0).reverse().map(tasks => (
                            <TaskList {...tasks} />
                        ))}
                    </div>

                    :this.state.selector === "Pendentes"
                    ?<div>
                        {this.props.incompleteTasks.slice(0).reverse().map(tasks => (
                            <TaskList {...tasks} />
                        ))}
                    </div>

                    :<div>
                        {console.log(this.props.completedTasks)}
                        {this.props.completedTasks.slice(0).reverse().map(tasks => (
                            <TaskList {...tasks} />
                        ))}
                    </div>
                }
            </React.Fragment>
        );
    }
}

export default Dashboard;