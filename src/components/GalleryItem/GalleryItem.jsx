function GalleryItem(props) {
    return(
        <>
        <h1>Gallery Item</h1>
        <img src={props.path}></img>
        <button onClick={() => props.addLike(props.id)}>Like</button>
        </>
    )
}

export default GalleryItem;