const APILink = 'https://strider-server.herokuapp.com/tasks/';

module.exports = function(){

    this.getAllTasksFromDatabase = (callback) => {
        fetch(APILink, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(tasks => {
            callback(tasks);
        });
    }

    this.getTaskById = (id, callback) => {
        fetch(APILink + id, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(task => {
            callback(task);
        });
    }

    this.deleteTaskById = (id) => {
        fetch(APILink + id, {
            method: 'DELETE'
        })
        .then(response => console.log(response))
    }

    this.addTask = (newTask) => {
        fetch(APILink, {
            method: 'POST',
            body: JSON.stringify(newTask)
        })
        .then(response => console.log(response))
    }

    this.updateTask = (existingTask) => {
        fetch(APILink, {
            method: 'PUT',
            body: JSON.stringify(existingTask)
        })
        .then(response => console.log(response))
    }

}