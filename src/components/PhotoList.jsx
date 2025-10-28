import React, {useEffect}  from 'react';
import {useParams} from 'react-router-dom';

import Photo from './Photo.jsx';
import NoResults from './NoResults.jsx';


//Map array of photos and save as jsx expression
const PhotoList = ({data, title, changeQuery}) =>{
    const results = data;
    const {query} = useParams();
    let photos;
   // let navigate = useNavigate();

    //To re-render if a user types a search term directly into the URL
    useEffect( () =>{
       // let path = '';
        if (query){
            if (query !== title){
               // path = `/search/${title}`;
              //  navigate(path);
                changeQuery(title);
            }
        }
    },);

    if (results.length > 0){
        photos = results.map(photo =>
             <Photo 
                url={photo.previewURL} 
                key= {photo.id} />)
     } else {
         photos = <NoResults />
     }

     //Render photos to the screen
     if (results.length >0) {
        return(
            <div className="photo-container">
            <h2>{`Images of ${query ? query : title}`}</h2>
                <ul>
                    {photos}
                </ul>
            </div>
        )
    } else {
        return(
            <div className="photo-container">
                <ul>
                    {photos}
                </ul>
            </div>
        )
    }
}

export default PhotoList;