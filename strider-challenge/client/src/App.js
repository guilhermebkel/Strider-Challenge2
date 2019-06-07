import React from 'react';
import Navbar from './components/navbar';
import TaskBar from './components/taskbar';
import Dashboard from './components/dashboard';

import apiRoutes from './routes/api';
const api = new apiRoutes();

//const get = api.getAllTasksFromDatabase();
//const getById = api.getTaskById(10);
//const deleteById = api.deleteTaskById(10);
/*const newTask = {
	"name": "Teste2aaa23",
	"description": "TESTANDO123"
}
const addTask = api.addTask(newTask);
const existingTask = {
  "id": "11",
	"name": "Teste223testeaaa",
	"description": "TESTANDO123"
}
const updateTask =  api.updateTask(existingTask);*/

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      tasks: []
    }
  }

  componentDidMount(){
    new Promise((callback) => {
      
      api.getAllTasksFromDatabase(callback);

    }).then((tasks) => {
      this.setState({
        tasks: tasks
      })
    })
  }

  componentDidUpdate(){
    new Promise((callback) => {
      
      api.getAllTasksFromDatabase(callback);

    }).then((tasks) => {
      this.setState({
        tasks: tasks
      })
    })
  }

  render(){
    return (
      <React.Fragment>
        <Navbar />
        <TaskBar />
        <Dashboard tasks={this.state.tasks}/>
      </React.Fragment>
    );
  }

}

export default App;
