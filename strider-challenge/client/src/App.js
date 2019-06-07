import React from 'react';
import API from './routes/api';
const api = new API();
//const get = api.getAllTasksFromDatabase();
//const getById = api.getTaskById(10);
//const deleteById = api.deleteTaskById(10);
const newTask = {
	"name": "Teste223",
	"description": "TESTANDO123"
}
const addTask = api.addTask(newTask);
/*const existingTask = [{
  "id": "11",
	"name": "Teste223",
	"description": "TESTANDO123"
}]
const updateTask =  api.updateTask(existingTask);*/


function App() {
  return (
    <div>
      {addTask}
    </div>
  );
}

export default App;
