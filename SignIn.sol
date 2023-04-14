pragma solidity ^0.8.18;
//SPDX-License-Identifier:MIT

contract SignUpIn{
    mapping(string => string) public userPasswords;
    function setPassword(string memory username, string memory passwordHash) public{
        userPasswords[username] = passwordHash;
    }
    event PasswordReturned(string password);

    function getPassword(string memory username) public returns (string memory) {
        string memory password = userPasswords[username];
        emit PasswordReturned(password);
        return password;
    }
}
