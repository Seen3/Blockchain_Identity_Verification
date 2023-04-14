pragma solidity ^0.8.18;
//SPDX-License-Identifier:MIT

contract MakeDetails {
    struct Person {
        string name;
        string dob;
        string add;
        string aadhar;
    }
    
    mapping(string => Person) private People;
    
    function setDetails(string memory name, string memory dob, string memory add, string memory aadhar) public {
        People[aadhar] = Person(name, dob, add, aadhar);
    }
    
    event PersonReturned(string json);
    
    function getDetails(string memory aadhar) public {
        Person memory man = People[aadhar];
        
        string memory json = string(abi.encodePacked(
            '{"name":"', man.name, '",',
            '"dob":"', man.dob, '",',
            '"add":"', man.add, '",',
            '"aadhar":"', man.aadhar, '"}'
        ));
        
        emit PersonReturned(json);
    }
}
