import React from 'react';

import Photo from './Photo.jsx';
import NoResults from './NoResults.jsx';


const PhotoList = ({data}) =>{
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

    return(
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                {photos}
            </ul>
        </div>
    )
}

export default PhotoList;