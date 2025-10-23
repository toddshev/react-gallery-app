import React, { useState, useEffect } from 'react'
import {Routes, Route, Navigate} from 'react-router-dom';

import Nav from './components/Nav.jsx'
import Search from './components/Search.jsx'
import PhotoList from './components/PhotoList.jsx';
import NotFound from './components/NotFound.jsx';
import apiKey from './config';      

function App() {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState('cats');
  const [loading, setLoading] = useState(true);

  useEffect( () => {
    handleQueryChange(query);
  },[query]);
      

  const handleQueryChange = (searchText) =>{
    setLoading(true);
    let activeFetch = true;
    setQuery(searchText);

    fetch(`https://pixabay.com/api/?key=${apiKey}&q=${query}`)
        .then(response => response.json())
        .then (responseData => {
          if (activeFetch){
            setPhotos(responseData)
            setLoading(false);
          }
        })
        .catch(error => console.log('Error fetching and parsing data',error))      
        return () => {activeFetch= false}
    }
    console.log(photos.hits[2].id);

//  const title = document.getElementsByTagName('title')[0].innerHTML;
//  console.log(title);
    
  return (
    <>
 
      <Nav />
      <Search changeQuery= {handleQueryChange} />

      {loading ? <p>Loading...</p> : <PhotoList data={photos} />}

      <Routes>
        <Route path="/" element={<Navigate to='/search'></Navigate>} />
        <Route path="cats" element={<PhotoList data={photos.hits} query='cats' />} />
        <Route path="dogs" element={<PhotoList data = {photos.hits} query='dogs'/>} />
        <Route path="computers" element={<PhotoList data={photos.hits} query='computers' />} />
        <Route path= "search/:query" element={<PhotoList data={photos.hits} query={query} />} /> 
        <Route path ="*" element={<NotFound />} />
      </Routes>
    </>

  )
};

export default App;