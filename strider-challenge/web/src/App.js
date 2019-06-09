import React from 'react';
import Navbar from './components/navbar';
import TaskBar from './components/taskbar';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){
    return (
      <React.Fragment>
        <Navbar />
        <TaskBar />
      </React.Fragment>
    );
  }

}

export default App;
