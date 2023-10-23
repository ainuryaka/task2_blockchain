import React, { useState } from 'react';
import './App.css'; // Add your own CSS file for styling if needed

const App = () => {
  const [nftLink, setNftLink] = useState('');
  const [nftName, setNftName] = useState('');
  const [nftDescription, setNftDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform actions with the form data here
    console.log('Submitted:', nftLink, nftName, nftDescription);
    // Clear the form fields
    setNftLink('');
    setNftName('');
    setNftDescription('');
  };

  return (
    <div className="app-container">
      <h2>Submit Your NFT Details</h2>
      <form onSubmit={handleSubmit} className="nft-form">
        <div className="form-group">
          <label>Link to NFT Asset:</label>
          <br />
          <input
            type="text"
            value={nftLink}
            onChange={(e) => setNftLink(e.target.value)}
            className="form-control"
            placeholder="Enter link to NFT asset"
          />
        </div>
        <div className="form-group">
          <label>Name of NFT:</label>
          <br />
          <input
            type="text"
            value={nftName}
            onChange={(e) => setNftName(e.target.value)}
            className="form-control"
            placeholder="Enter name of NFT"
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <br />
          <textarea
            value={nftDescription}
            onChange={(e) => setNftDescription(e.target.value)}
            className="form-control"
            placeholder="Enter description"
          />
        </div>
        <br />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
