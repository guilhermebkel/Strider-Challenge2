import React from 'react';
import Navbar from './components/navbar'

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

function App() {
  return (
    <Navbar />
  );
}

export default App;
