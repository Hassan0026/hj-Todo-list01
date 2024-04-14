#! /usr/bin/env node
import inquirer from "inquirer";
let todoList = [];
let conditions = true;
//while(condition)
//{
//let addTask = await inquirer.prompt(
//    [
//        {
//            name: "todo",
//            type: "input",
//            message: "what you want to add in you todos?"   
//        },
//        {
//            name: "addMore",
//            type: "confirm",
//            message: "Do you want to add more ?",
//            default: "false"
//        }
//    ]
//);
//todos.push(addTask.todo);
//condition = addTask.addMore
//console.log(todos)
//}
let main = async () => {
    while (conditions) {
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "Select an option you want to do",
                choices: ["Add Task", "Delete Task", "update Task", "View todo-list", "Exit"],
            }
        ]);
        if (option.choice === "Add Task") {
            await addTask();
        }
        else if (option.choice === "Delete Task") {
            await deleteTask();
        }
        else if (option.choice === "update Task") {
            await updateTask();
        }
        else if (option.choice === "View todo-list") {
            await viewTask();
        }
        else if (option.choice === "Exit") {
            conditions = false;
        }
    }
};
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your new task :"
        }
    ]);
    todoList.push(newTask.task);
    console.log(`\n ${newTask.task} task added successfully in todo-list`);
};
let viewTask = () => {
    console.log("\n Your todo-list: \n");
    todoList.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
    });
};
let deleteTask = async () => {
    await viewTask();
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the index no. of the task you want to delete :",
        }
    ]);
    let deletedTask = todoList.splice(taskIndex.index - 1, 1);
    console.log(`\n ${deletedTask} this task has been deleted successfully from your todo-list`);
};
let updateTask = async () => {
    await viewTask();
    let update_task_index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the index no. of the task you want to update :"
        },
        {
            name: "new_task",
            type: "inpur",
            message: "Now enter your new task :",
        }
    ]);
    todoList[update_task_index.index - 1] = update_task_index.new_task;
    console.log(`\n Task at index no. ${update_task_index.index - 1} updated successfully [for updated list check "View todo-list"]`);
};
main();
