// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

contract TaskContract {
    event AddTask(address indexed recipient, uint256 indexed taskId);
    event DeleteTask(uint256 indexed taskId, bool isDeleted);
    event GetTask(uint256 indexed taskId);
    event ChangeTask(uint256 indexed taskId, string newText, uint256 timestamp);

    struct Task {
        uint256 id;
        string text;
        bool isDeleted;
        uint256 timestamp;
    }

    Task[] private tasks;
    mapping(uint256 => address) taskToOwner;

    function addTask(string memory text) external {
        uint256 taskId = tasks.length;
        uint256 timestamp = block.timestamp;
        tasks.push(Task(taskId, text, false, timestamp));
        taskToOwner[taskId] = msg.sender;
        emit AddTask(msg.sender, taskId);
    }

    function getTasks() external view returns (Task[] memory) {
        uint256 counter = 0;
        for (uint256 i = 0; i < tasks.length; i++) {
            if (taskToOwner[i] == msg.sender && !tasks[i].isDeleted) {
                counter++;
            }
        }
        Task[] memory result = new Task[](counter);
        counter = 0;
        for (uint256 i = 0; i < tasks.length; i++) {
            if (taskToOwner[i] == msg.sender && !tasks[i].isDeleted) {
                result[counter] = tasks[i];
                counter++;
            }
        }
        return result;
    }

    function deleteTask(uint256 taskId) external {
        require(taskId < tasks.length, "Task does not exist");
        require(
            taskToOwner[taskId] == msg.sender,
            "You are not the owner of this task"
        );
        tasks[taskId].isDeleted = true;
        emit DeleteTask(taskId, true);
    }

    function changeTask(uint256 taskId, string memory newText) external {
        require(taskId < tasks.length, "Task does not exist");
        require(
            taskToOwner[taskId] == msg.sender,
            "You are not the owner of this task"
        );

        tasks[taskId].text = newText;
        tasks[taskId].timestamp = block.timestamp;

        emit ChangeTask(taskId, newText, block.timestamp);
    }
}
