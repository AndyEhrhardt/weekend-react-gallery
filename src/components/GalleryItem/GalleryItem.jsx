import React, { useState, useEffect } from 'react';
import './GalleryItem.css'

function GalleryItem(props) {
    return(
        <>
            <div className="picture-like-container">
                <div className="image-div">
                    <img src={props.path}></img>
                </div>
                <div className="like-container">
                    <button onClick={() => props.addLike(props.id)}>Like</button>
                    
                    
                    <p>{props.likes == 0 ? "Nobody loves this" : 
                    props.likes == 1 ? "One person loves this" : 
                    props.likes + " People love this"}</p>
                </div>
            </div>
        </>
    )
}

export default GalleryItem;