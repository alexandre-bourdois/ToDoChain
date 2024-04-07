// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

contract TaskContract {
    event AddTask(address recipient, uint taskId);
    event DeleteTask(uint taskId, bool isDeleted);
    event changeTask(uint taskId);
    event GetTask(uint taskId);

    struct Task {
        uint id;
        string text;
        bool isDeleted;
        uint timestamp;
    }

    Task[] private tasks;
    mapping(uint256 => address) taskToOwner;

    function addTask(string memory Text, bool IsDeleted) external {
        uint taskId = tasks.length;
        uint timestamp = block.timestamp;
        tasks.push(Task(taskId, Text, IsDeleted, timestamp)); // Ajoutez le timestamp dans votre struct Task
        taskToOwner[taskId] = msg.sender;
        emit AddTask(msg.sender, taskId);
    }
}
