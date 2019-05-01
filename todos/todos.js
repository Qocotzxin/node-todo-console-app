const fs = require("fs");
const color = require("colors");

let todoList;

const loadDb = () => {
  try {
    todoList = require("../db/data.json");
  } catch (err) {
    todoList = [];
  }
};

const showList = () => {
  for (let todo of todoList) {
    console.log("=====TO DO=====".green);
    console.log(`${todo.description}`.yellow);
    console.log(`Status: ${todo.completed}`.blue);
    console.log("===============".green);
  }
}

const saveDb = () => {
  let data = JSON.stringify(todoList);

  fs.writeFile("db/data.json", data, err => {
    if (err) console.log("Information could not be stored");
  });
};

const create = description => {
  loadDb();

  todo = {
    description,
    completed: false
  };

  todoList = [...todoList, todo];

  saveDb();

  showList();
};

const list = () => {
  loadDb();
  showList();
};


const update = (description, completed = true) => {
  loadDb();
  
  let index = todoList.findIndex(todo => todo.description === description);
  
  if (index !== -1) {
    todoList[index].completed = completed;
    saveDb();
    showList();
  } else {
    console.log("No task could be found".red);
  }
};

const remove = (description) => {
  loadDb();

  let newTodoList = todoList.filter(todo => todo.description !== description);

  if (newTodoList.length !== todoList.length) {
    todoList = newTodoList;
    saveDb();
    showList();
  } else {
    console.log('No task could be found to be removed'.red);
  }
}

module.exports = {
  create,
  list,
  update,
  remove
};
