const fs = require('fs');


function getTodos() {

    let data = fs.readFileSync('todos.json').toString();
    data = JSON.parse(data)
    return data
}

all = () => {
    let data = fs.readFileSync('todos.json').toString();
    data = JSON.parse(data)
    return data
}

find = (text) => {
    text.split(' ');
    ob = JSON.parse(text);
    console.log(ob);
}

set = (text) => {

    fs.writeFileSync('todos.json', JSON.stringify(text))
}

function addTodo(text){

    let todos = getTodos();
    todos.push({
        id: Math.random().toString().slice(3, 8),
        task: text,
        created: new Date(),
        isDone: false
    })
    set(todos)
    console.log('Your task was added!')
}

updateTodo = (index, text) => {

    let todos = getTodos();
    todos[index] = {
        id: Math.random().toString().slice(3, 8),
        task: text,
        created: new Date(),
        isDone: false
    };
    set(todos);
}

function deleteTodo(index) {

    let todos = getTodos();
    todos = todos.filter( (i,x) => { return x.id != index } )
    set(todos);
}

module.exports = {
    getTodos: getTodos,
    all: all,
    set: set,
    find: find,
    addTodo: addTodo,
    deleteTodo: deleteTodo,
    updateTodo: updateTodo
}


//SH.B. CREATE POSTGRES>SQL< LOLb