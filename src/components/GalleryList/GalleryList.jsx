import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList(props) {
    console.log(props.pictures);

    return(
        <>
            <h1>Gallery List</h1>
            {props.pictures.map(pic => (
                <GalleryItem 
                id={pic.id}
                path={pic.path}
                description={pic.description}
                likes={pic.likes}
                />
            ))}
            
        </>
    )
}

export default GalleryList;