import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import InputForm from '../InputForm/InputForm.jsx'

function App() {
  let [pictures, setPictures] = useState([]);
  let [fileNameInput, setFileNameInput] = useState([]);
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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('in handle submit')
    console.log(fileNameInput)
    if (fileNameInput.length === 0 || descriptionInput.length === 0){
      alert("Please enter a file name and description")
    }else{
      postInputs();
    }
  }

  const postInputs = () => {
    axios.post('/gallery', {path: `images/${fileNameInput}`, description: descriptionInput})
    .then(response =>{
      setFileNameInput('');
      setDescriptionInput('');
      getPictures();
    })
    .catch(error => {
      alert('Error adding picture')
      console.log(error);
    })
  }
  const deletePicture = (id) => {
    axios.delete(`/gallery/${id}`)
    .then(response =>{
      getPictures();
    })
    .catch(error => {
      alert('Error deleting picture')
      console.log(error);
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <InputForm 
      setFileNameInput={setFileNameInput}
      setDescriptionInput={setDescriptionInput}
      handleSubmit={handleSubmit}
      />
      <GalleryList 
        pictures={pictures}
        addLike={addLike}
        deletePicture={deletePicture}
      />
    </div>
  );
}

export default App;
