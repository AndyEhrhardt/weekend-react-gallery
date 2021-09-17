function GalleryItem(props) {
    return(
        <>
        <h1>Gallery Item</h1>
        <img src={props.path}></img>
        </>
    )
}

export default GalleryItem;