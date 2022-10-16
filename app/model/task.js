const fs = require("fs");

const readAllTask = () => {
  const buffer = fs.readFileSync("task.json");
  // chuyen sang chuoi
  const taskString = buffer.toString();
  // chuyen sang json
  const taskJson = JSON.parse(taskString);
  return taskJson;
};

const createTask = (title, description) => {
  let taskList = readAllTask();
  let id = Math.random().toString(16).slice(2);
  const newTask = {
    id: id,
    title,
    description,
  };
  //   taskList.push(newTask);
  taskList = [...taskList, newTask];
  fs.writeFileSync("task.json", JSON.stringify(taskList));
  return newTask;
};

const readDetailTask = (id) => {
  let taskList = readAllTask();
  const task = taskList.find((task) => id === task.id);
  return task;
};

const updateTask = (id, title, description) => {
  let taskList = readAllTask();
  const index = taskList.findIndex((task) => id === task.id);
  if (index !== -1) {
    // thuc hien update
    const oldTask = taskList[index];
    const newTask = { ...oldTask, title, description };
    taskList[index] = newTask;
    fs.writeFileSync("task.json", JSON.stringify(taskList));
    return newTask;
  } else {
    // thong bao ko tim thay
    return false;
  }
};

const deleteTask = (id) => {
  let taskList = readAllTask();
  const index = taskList.findIndex((task) => id === task.id);
  if (index !== -1) {
    const task = taskList[index];
    taskList = taskList.filter((task) => task.id !== id);
    fs.writeFileSync("task.json", JSON.stringify(taskList));
    return task;
  } else {
    return false;
  }
};

module.exports = {
  readAllTask,
  createTask,
  readDetailTask,
  updateTask,
  deleteTask,
};
