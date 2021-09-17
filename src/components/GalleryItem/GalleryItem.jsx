import React, { useState, useEffect } from 'react';
import './GalleryItem.css'

function GalleryItem(props) {
    let [clickCheck, setClickCheck] = useState(0);
    return(
        <>
            <div className="picture-like-container">
                <div className="image-div">
                    <img src={props.path} 
                    onClick={() => clickCheck === 0 ? setClickCheck(1) : setClickCheck(0)}
                    className={clickCheck===0 ? "" : "grayed-out"}
                    ></img>
                    <p className="imgText"
                    onClick={() => clickCheck === 0 ? setClickCheck(1) : setClickCheck(0)}>
                    {clickCheck===0 ? "" : props.description}</p>
                </div>
                <div className="like-container">
                    <button onClick={() => props.addLike(props.id)}>Love It!</button>
                    
                    
                    <p>{props.likes == 0 ? "Nobody loves this" : 
                    props.likes == 1 ? "One person loves this" : 
                    props.likes + " People love this"}</p>
                </div>
            </div>
        </>
    )
}

export default GalleryItem;