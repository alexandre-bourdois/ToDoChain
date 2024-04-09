const TaskContract = artifacts.require("TaskContract");

contract("TaskContract", (accounts) => {
  let taskContract;

  before(async () => {
    taskContract = await TaskContract.deployed();
  });

  it("should add a new task", async () => {
    const initialTasks = await taskContract.getTasks({ from: accounts[0] });
    const initialTasksCount = initialTasks.length;

    await taskContract.addTask("Task 1", { from: accounts[0] });

    const updatedTasks = await taskContract.getTasks({ from: accounts[0] });
    const updatedTasksCount = updatedTasks.length;

    assert.equal(updatedTasksCount, initialTasksCount + 1, "Task count should increase by 1");
  });

  it("should delete a task", async () => {
    // Add a task first
    await taskContract.addTask("Task to delete", { from: accounts[0] });

    const initialTasks = await taskContract.getTasks({ from: accounts[0] });
    const initialTasksCount = initialTasks.length;

    // Get the task ID of the last added task
    const taskIdToDelete = initialTasks[initialTasks.length - 1].id;

    await taskContract.deleteTask(taskIdToDelete, { from: accounts[0] });

    const updatedTasks = await taskContract.getTasks({ from: accounts[0] });
    const updatedTasksCount = updatedTasks.length;

    assert.equal(updatedTasksCount, initialTasksCount - 1, "Task count should decrease by 1");
  });

  it("should change a task", async () => {
    // Add a task first
    await taskContract.addTask("Task to change", { from: accounts[0] });

    const initialTasks = await taskContract.getTasks({ from: accounts[0] });
    const taskIdToChange = initialTasks[initialTasks.length - 1].id;

    const newText = "New text for the task";

    await taskContract.changeTask(taskIdToChange, newText, { from: accounts[0] });

    // Get the task details after changing
    const changedTask = await taskContract.getTasks({ from: accounts[0] });

    // Find the changed task in the list of tasks
    const changedTaskDetails = changedTask.find(task => task.id === taskIdToChange);

    assert.equal(changedTaskDetails.text, newText, "Task text should be updated");
  });
});