pragma solidity ^0.8.0;

contract IdentityVerification {
    struct User {
        string name;
        string email;
        string phone;
        string Address;
        bool verified;
    }
    
    mapping (Address => User) public users;
    
    function addUser(string memory _name, string memory _email, string memory _phone, string memory _address) public {
        users[msg.sender] = User(_name, _email, _phone, _address, false);
    }
    
    function verifyUser(Address _userAddress) public {
        require(msg.sender == _userAddress, "Only user can verify their identity.");
        users[_userAddress].verified = true;
    }
    
    function getUser(Address _userAddress) public view returns(string memory, string memory, string memory, string memory, bool) {
        User memory user = users[_userAddress];
        return (user.name, user.email, user.phone, user.Address, user.verified);
    }
}