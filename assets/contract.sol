pragma solidity ^0.8.18;
//SPDX-License-Identifier:MIT

contract SignUpIn{
    mapping(string => string) private userPasswords;
    function setPassword(string memory username, string memory passwordHash) public {
        userPasswords[username] = passwordHash;
    }
    function getPassword(string memory username) public view returns (string memory) {
        return userPasswords[username];
    }
}
contract CheckAAdhar{
    struct Person{
        uint _id;
        string name;
        string aadhar;
        string dob;
        string addr;
    }
    
    mapping(string => Person) public people;

    function addPerson(uint _id, string memory name, string memory aadhar, string memory dob, string memory addr) public {
        Person memory newPerson = Person(_id, name, aadhar, dob, addr);
        people[aadhar] = newPerson;
    }

    function getPerson(string memory aadhar) public view returns (uint, string memory, string memory, string memory, string memory) {
        Person memory person = people[aadhar];
        return (person._id, person.name, person.dob, person.addr, person.aadhar);
    }
}