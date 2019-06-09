import React, { Component } from 'react';
import Swipe from 'react-easy-swipe';
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
        this.onSwipeMove = this.onSwipeMove.bind(this);
    }
 
    // Changes the sorting method by swiping
    // the screen on mobile devices.
    onSwipeMove(position) {
        if(position.x < -100){
            switch(this.state.selector){
                case "Todos": 
                    this.handleSelector("Pendentes");
                    break;

                case "Pendentes": 
                    this.handleSelector("Feitos");
                    break;
                    
                case "Feitos": 
                    this.handleSelector("Todos");
                    break;

                default: 
                    break;
            }
        }
        if(position.x > 100){
            switch(this.state.selector){
                case "Todos": 
                    this.handleSelector("Feitos");
                    break;

                case "Feitos": 
                    this.handleSelector("Pendentes");
                    break;
                    
                case "Pendentes": 
                    this.handleSelector("Todos");
                    break;
                
                default: 
                    break;
            }
        }
    }

    componentWillReceiveProps(){
        this.handleSelector(this.state.selector);
    }

    // Changes the method for sorting out the tasks
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
            <Swipe onSwipeMove={this.onSwipeMove}>
        
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

                <div>
                    {this.props.tasks.slice(0).reverse().map(tasks => (
                            <TaskList {...tasks} selector={this.state.selector} />
                    ))}
                </div>

            </Swipe>
        );
    }
}

export default Dashboard;