import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList(props) {
    console.log(props.pictures);

    return(
        <>
            <h1>Gallery List</h1>
            {props.pictures.map(pic => (
                <GalleryItem 
                key={pic.id}
                id={pic.id}
                path={pic.path}
                description={pic.description}
                likes={pic.likes}
                addLike={props.addLike}
                />
            ))}
            
        </>
    )
}

export default GalleryList;