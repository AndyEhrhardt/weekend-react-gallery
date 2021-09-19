import React, { useState, useEffect } from 'react';
import './GalleryItem.css'
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';

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
                    <p className="imgText"
                    onClick={() => clickCheck === 0 ? setClickCheck(1) : setClickCheck(0)}>
                    {clickCheck===0 ? "" : props.description}</p>
                </div>
                <div className="like-container">
                    <Button variant="contained" color="primary" onClick={() => props.addLike(props.id)}>
                        Love It!
                    </Button>
                    <Button variant="contained" color="primary" onClick={() => props.deletePicture(props.id)}>
                        Delete
                    </Button>
                    
                    <p>{props.likes == 0 ? "Nobody loves this" : 
                    props.likes == 1 ? "One person loves this" : 
                    props.likes + " People love this"}</p>
                </div>
            </div>
        </>
    )
}

export default GalleryItem;