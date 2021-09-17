import GalleryItem from '../GalleryItem/GalleryItem'
import './GalleryList.css'

function GalleryList(props) {
    return(
        <>
            <h1>Gallery List</h1>
            <div className="picture-container">
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
            </div>
        </>
    )
}

export default GalleryList;