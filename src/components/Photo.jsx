import React from 'react';

//Create list item and img tag to be rendered by PhotoList
const Photo = ({url}) =>{

    return(
        <li>
            <img src= {url} alt="" />
        </li>
    )
}

export default Photo;