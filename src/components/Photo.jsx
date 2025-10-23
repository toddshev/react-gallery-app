import React from 'react';

const Photo = ({data}) =>{
//webformatURL
    return(
        <li>
            <img src= {data.url} key = {data.key} alt="" />
        </li>
    )
}

export default Photo;