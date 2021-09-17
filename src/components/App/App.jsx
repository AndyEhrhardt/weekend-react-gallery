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
  const [likes, setLikes] = useState(0);
  const addLike = (picId) => {
    console.log('in add like id is: ', picId);
    axios.put(`/gallery/${picId}`)
    .then(response => {
      console.log(response)
      getPictures
    })
    .catch(err => {
      alert('error adding like');
      console.log(err);
    })
  }


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <GalleryList 
          pictures={pictures}
          addLike={addLike}
        />
      </div>
    );
}

export default App;
