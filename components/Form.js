import React, { useState } from 'react';

const Form = () => {

    const [summonerName, setSummonerName] = useState('');
    const [summonerTag, setSummonerTag] = useState('');    
    const [summonerRegion, setSummonerRegion] = useState('na');    

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(summonerName);
        console.log(summonerTag);
        console.log(summonerRegion);
    }

    return (
    <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '50px' }}>
    <form onSubmit={handleSubmit}>
    <div style={{ marginBottom: '5px' }}>
      <label htmlFor="summonerName">Summoner Name: </label>
      <input
        type="text"
        id="summonerName"
        value={summonerName}
        onChange={(e) => setSummonerName(e.target.value)}
        placeholder="Enter summoner name"
      />
    </div>
    <div style={{ marginBottom: '5px' }}>
      <label htmlFor="summonerTag">Summoner Tag: </label>
      <input
        type="text"
        id="summonerTag"
        value={summonerTag}
        onChange={(e) => setSummonerTag(e.target.value)}
        placeholder="Enter summoner name"
      />
    </div>
    <div style={{ marginBottom: '5px' }}>
      <label htmlFor="summonerRegion">Region: </label>
      <select id="summonerRegion" value={summonerRegion} onChange={(e) => setSummonerRegion(e.target.value)}>
        <option value="na">NA</option>
        <option value="eu">EU</option>
        <option value="kr">OCE</option>
      </select>
    </div>
    <button type="submit">Fetch Data</button>
  </form>
  </div>


    )

}

export default Form