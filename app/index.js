const yargs = require("yargs");
const fs = require("fs"); //file system (build in nodejs)
const task = require("./model/task");

// console.log("day la code");

// test
yargs.command({
  command: "test",
  handler: () => {
    console.log("test");
  },
});

// crud
// create
yargs.command({
  command: "create",
  builder: {
    title: {
      type: "string",
    },
    description: {
      type: "string",
    },
  },
  handler: (args) => {
    const { title, description } = args;
    const newTask = task.createTask(title, description);
    console.log("đã tạo mới thành công: ", newTask);
  },
});

// read-all
yargs.command({
  command: "read-all",
  handler: () => {
    const readAll = task.readAllTask();
    console.log("all task: ", readAll);
  },
});

// read-detail
yargs.command({
  command: "read-detail",
  builder: {
    id: {
      type: "string",
    },
  },
  handler: (args) => {
    const { id } = args;
    const taskDetail = task.readDetailTask(id);
    if (taskDetail) {
      console.log("task: ", taskDetail);
    } else {
      console.log("Not found!");
    }
  },
});

// update
yargs.command({
  command: "update",
  builder: {
    id: {
      type: "string",
    },
    title: {
      type: "string",
    },
    description: {
      type: "string",
    },
  },
  handler: (args) => {
    const { id, title, description } = args;
    const updateTask = task.updateTask(id, title, description);
    if (updateTask) {
      console.log("task updated: ", updateTask);
    } else {
      console.log("Not found!");
    }
  },
});

// delete
yargs.command({
  command: "delete",
  builder: {
    id: {
      type: "string",
    },
  },
  handler: (args) => {
    const { id } = args;
    const deleteTask = task.deleteTask(id);
    if (deleteTask) {
      console.log("delete task: ", deleteTask);
    } else {
      console.log("Not found!");
    }
  },
});

// luu lai cac lenh vua tao
yargs.parse();
