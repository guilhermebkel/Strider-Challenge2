const APILink = 'https://strider-server.herokuapp.com/tasks';

module.exports = function(){

    this.getAllDataFromDatabase = () => {
        fetch(APILink)
        .then(response => response.json())
        .then(tasks => {
            console.log(tasks);
        });
    }

}