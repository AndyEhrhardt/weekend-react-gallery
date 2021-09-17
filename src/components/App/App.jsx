import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import InputForm from '../InputForm/InputForm.jsx'

function App() {
  let [pictures, setPictures] = useState([]);
  let [pathInput, setPathInput] = useState([]);
  let [descriptionInput, setDescriptionInput] = useState([]);

  useEffect(() => {
    getPictures()
  }, [])

  const getPictures = () => {
    axios.get('/gallery')
      .then(response => {
        setPictures(response.data);
      })
      .catch(err => {
        alert('error getting pictures');
        console.log(err);
      })
  }
  
  
  const addLike = (picId) => {
    axios.put(`/gallery/${picId}`)
    .then(response => {
      getPictures();
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
      <InputForm 
      setPathInput={setPathInput}
      setDescriptionInput={setDescriptionInput}
      />
      <GalleryList 
        pictures={pictures}
        addLike={addLike}
      />
    </div>
  );
}

export default App;
