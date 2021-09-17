import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';


function App() {
  let [pictures, setPictures] = useState([]);
  const getPictures= () => {
    axios.get('/gallery')
      .then(response => {
        setPictures(response.data)
      })
      .catch(err => {
        alert('error getting pictures');
        console.log(err);
      })
  }
  useEffect(() => {
    getPictures()
  }, [])
  console.log(pictures);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <GalleryList 
          pictures={pictures}
        />
      </div>
    );
}

export default App;
