// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

contract TaskContract {
    event AddTask(address recipient, uint taskId);
    event DeleteTask(uint taskId, bool isDeleted);
    event changeTask(uint taskId);
    event GetTask(uint taskId);

    struct Task {
        uint Id;
        string Text;
        bool IsDeleted;
    }
}
