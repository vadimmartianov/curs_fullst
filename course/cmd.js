#! /usr/bin/env node

const {updateTodo, deleteTodo, addTodo, getTodos, set, all, find} = require("./todos");

function displayTodos(todos) {
    
    console.table(todos);
}

function actionTodos(command_line) {
    if (command_line.length > 3) {

        const [ , , command, ...text] = command_line;

        try {
            console.log(command);
            console.log(text);
            eval(`${command}(text)`);
        }
        catch(error) {
            console.log("Sorry, something went wrong");
        }
/*
        if (command =='set') {
    
            setTodos(text.join('\n')); return
        }
        if (command == 'add') {
            addTodo(text.join(' '));  return
        }
        if (command == "upd") {
            let index = text[0];
            let temp = text.splice(1).join(' ');
            updateTodo(index, temp);
            return
        }
        if (command == 'del') {
            deleteTodo(parseInt(text)); return
        }
        console.log('Sorry, we dont know what do you want')
    }
    else {
    
        displayTodos(getTodos());
    }*/
    }
}
actionTodos( process.argv )