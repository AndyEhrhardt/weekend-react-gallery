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

  //sends a get request to the server for the picture information
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
  
  //sends a put request to add a like to a picture
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

  //checks to make sure both input fields have information before sending the info
  const handleSubmit = (event) => {
    event.preventDefault();
    if (fileNameInput.length === 0 || descriptionInput.length === 0){
      alert("Please enter a file name and description")
    }else{
      postInputs();
    }
  }

  //sends the input information to the server
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

  //sends a delete request to the server to remove a picture
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
      {/* The input form is passed variables and functions to get and reset to form input info
      and one function, handleSubmit, that checks the forms have been filled out
      and then calls another function to send that info to the database */}
      <InputForm 
      descriptionInput={descriptionInput}
      fileNameInput={fileNameInput}
      setFileNameInput={setFileNameInput}
      setDescriptionInput={setDescriptionInput}
      handleSubmit={handleSubmit}
      />
      <br></br>
      {/* The gallery list component gets the variable pictures that contains all
      the picture information. It is also passed two functions, one that handles 
      adding a like and one that deletes a picture */}
      <GalleryList 
        pictures={pictures}
        addLike={addLike}
        deletePicture={deletePicture}
      />
    </div>
  );
}

export default App;
