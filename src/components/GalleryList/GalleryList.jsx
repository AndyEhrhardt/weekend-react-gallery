import GalleryItem from '../GalleryItem/GalleryItem'
import './GalleryList.css'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

function GalleryList(props) {
    return(
        <>
            <div className="picture-container">
                {/* The map function below passes in the information for each
                picture into a GalleryItem component. In addition the relevant 
                functions for adding a like and deleting a picture are passed through 
                as well. */}
                {props.pictures.map(pic => (
                    <Paper elevation={6}>
                        <GalleryItem 
                            key={pic.id}
                            id={pic.id}
                            path={pic.path}
                            description={pic.description}
                            likes={pic.likes}
                            addLike={props.addLike}
                            deletePicture={props.deletePicture}
                        />
                    </Paper>
                ))}
            </div>
        </>
    )
}

export default GalleryList;