pragma solidity ^0.8.18;
//SPDX-License-Identifier:MIT

contract SignUpIn{
    mapping(string => string) private userPasswords;
    function setPassword(string memory username, string  memory passwordHash) public{
        userPasswords[username] = passwordHash;
    }
    function getPassword(string memory username) public view returns (string memory) {
        return userPasswords[username];
    }
}
