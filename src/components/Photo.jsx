import React from 'react';

const Photo = ({url}) =>{
//webformatURL
    return(
        <li>
            <img src= {url} alt="" />
        </li>
    )
}

export default Photo;