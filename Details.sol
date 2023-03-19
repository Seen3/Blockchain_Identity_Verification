pragma solidity ^0.8.18;
//SPDX-License-Identifier:MIT

contract MakeDetails{
    struct Person{
    string name;
    string dob;
    string add;
    string aadhar;
}
    mapping(string => Person) private People;
    function setDetails(string memory name, string memory dob, string memory add,string memory aadhar) public {
        People[aadhar] = Person(name,dob,add,aadhar);
    }
    function getDetails(string memory aadhar) public view returns (Person memory) {
        return People[aadhar];
    }
}
