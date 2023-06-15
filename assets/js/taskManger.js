
class TaskManager {
    constructor() {
        this.tasks = [];
        this.currentId = 1;
    }   

    addTask(name, description, assignedTo) {
    const task = {
        id: this.currentId,
        name: name,
        description: description,
        assignedTo: assignedTo
        //status: 'To Do',
    };

    this.tasks.push(task);
    this.currentId++;
    }

}

console.log(TaskManager.addTask);
