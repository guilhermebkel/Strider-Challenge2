import React from 'react';
import Navbar from './components/navbar';
import TaskBar from './components/taskbar';
import Dashboard from './components/dashboard';

import apiRoutes from './routes/api';
const api = new apiRoutes();

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

  render(){
    return (
      <React.Fragment>
        <Navbar />
        <TaskBar />
        <Dashboard tasks={this.state.tasks} />
      </React.Fragment>
    );
  }

}

export default App;
