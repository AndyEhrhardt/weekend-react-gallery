import React, { useState, useEffect } from 'react';
import './GalleryItem.css'
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


function GalleryItem(props) {
    let [clickCheck, setClickCheck] = useState(0);
    return(
        <>
        
            <div className="picture-like-container">
                <div className="image-div">
                    <img key={props.id}
                    src={props.path} 
                    onClick={() => clickCheck === 0 ? setClickCheck(1) : setClickCheck(0)}
                    className={clickCheck===0 ? "" : "grayed-out"}
                    ></img>
                    {/* A ternary operator is applied to both the picture and the description 
                    of the pictre, this way if the description itself is clicked the image will
                    still change back to its original state */} 
                    <p className="imgText"
                    onClick={() => clickCheck === 0 ? setClickCheck(1) : setClickCheck(0)}>
                    {clickCheck===0 ? "" : props.description}</p>
                </div>
                <div className="like-container">
                    <Button variant="contained" color="primary" 
                    sx={{
                        width: 120,
                        height: 20,
                        margin: 1,
                    }}
                    onClick={() => props.addLike(props.id)}>
                        Love It!
                    </Button>
                    <IconButton aria-label="delete"
                        onClick={() => props.deletePicture(props.id)}
                    >
                        <DeleteIcon />
                    </IconButton>
                    {/* This ternary operator checks the number of likes a picture has
                    and returns 3 different options depending on if  there are 0, 1, or 2+ likes */} 
                    <p>{props.likes == 0 ? "Nobody loves this :(" : 
                    props.likes == 1 ? "One person loves this" : 
                    props.likes + " People love this"}</p>
                </div>
            </div>
        </>
    )
}

export default GalleryItem;