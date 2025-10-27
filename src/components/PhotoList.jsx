import React  from 'react';

import Photo from './Photo.jsx';
import NoResults from './NoResults.jsx';

//Map array of photos and save as jsx expression
const PhotoList = ({data, query}) =>{
    const results = data;
    let photos;
    if (results){
        photos = results.map(photo =>
             <Photo 
                url={photo.previewURL} 
                key= {photo.id} />)
     } else {
         photos = <NoResults />
     }
    //Render photos to the screen

    return(
        <div className="photo-container">
        <h2>{`Images of ${query}`}</h2>
            <ul>
                {photos}
            </ul>
        </div>
    )
}

export default PhotoList;