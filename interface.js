import React, { useState } from 'react';
import Web3 from 'web3';
import IdentityVerification from './contracts/IdentityVerification.json';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [account, setAccount] = useState('');
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [userAddress, setUserAddress] = useState('');
  const [userData, setUserData] = useState({});

  const connectToMetamask = async () => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWeb3(web3);
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = IdentityVerification.networks[networkId];
        const contract = new web3.eth.Contract(
          IdentityVerification.abi,
          deployedNetwork && deployedNetwork.address,
        );
        setContract(contract);
      } catch (error) {
        console.error(error);
      }
    } else {
      alert('Please install MetaMask!');
    }
  };

  const handleAddUser = async (event) => {
    event.preventDefault();
    await contract.methods.addUser(name, email, phone, address).send({ from: account });
  };

  const handleVerifyUser = async (event) => {
    event.preventDefault();
    await contract.methods.verifyUser(userAddress).send({ from: account });
    const data = await contract.methods.getUser(userAddress).call();
    setUserData(data);
  };

  const handleUserAddressChange = (event) => {
    setUserAddress(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  return (
    <div>
      <button onClick={connectToMetamask}>Connect to MetaMask</button>
      {account && (
        <div>
          <h3>Add User</h3>
          <form onSubmit={handleAddUser}>
            <label>
              Name:
              <input type="text" value={name} onChange={handleNameChange} />
            </label>
            <br />
            <label>
              Email:
              <input type="text" value={email} onChange={handleEmailChange} />
            </label>
            <br />
            <label>
              Phone:
              <input type="text" value={phone} onChange={handlePhoneChange} />
            </label>
            <br />
            <label>
              Address:
              <input type="text" value={address} onChange={handleAddressChange} />
            </label>
            <br />
            <button type="submit">Add User</button>
          </form>
          <h3>Verify User</h3>
          <form onSubmit={handleVerifyUser}>
            <label>
              User Address:
              <input type="text" value={userAddress} onChange={handleAddressChange}/>
            </label>
            <br />
            <button type="submit">Verify User</button>
          </form>
          {userData.name && (
            <div>
              <h3>User Information</h3>
              <p>Name: {userData.name}</p>
              <p>Email: {userData.email}</p>
              <p>Phone: {userData.phone}</p>
              <p>Address: {userData.address}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;

