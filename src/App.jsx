import React, { useState, useEffect } from 'react'
import {Routes, Route, Navigate} from 'react-router-dom';

//Load components and key
import Nav from './components/Nav.jsx'
import Search from './components/Search.jsx'
import PhotoList from './components/PhotoList.jsx';
import NotFound from './components/NotFound.jsx';
import apiKey from './config';      

function App() {
  //Set state for photo array, query value, and if app is loading
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState('cats');
  const [loading, setLoading] = useState(true);
  
  //Re-run API call when query state/value changes
  useEffect( () => {
    handleQueryChange(query);
  },[query]);
      
  //Gets value from nav button click and updates value/state of query
  //Prevents having to run fetch and handleQueryChange multiple times
  const handleClick = (btnText) => {
    setQuery(btnText);
  }

  //Fetches images when query value changes - either search or button
  //Sets state of photo array to returned image objects 
  const handleQueryChange = (searchText) =>{
    setLoading(true);
    let activeFetch = true;
    setQuery(searchText);
    
    fetch(`https://pixabay.com/api/?key=${apiKey}&q=${searchText}`)
        .then(response => response.json())
        .then (responseData => {
          if (activeFetch){
              setPhotos(responseData.hits);
              setLoading(false);
          }
        })
        .catch(error => console.log('Error fetching and parsing data',error))      
        return () => {activeFetch= false}
    }

//  const title = document.getElementsByTagName('title')[0].innerHTML;
//  console.log(title);
    
//Renders search and nav (every page), sets routes for buttons, search, and not found
  return (
    <>
      <Search changeQuery= {handleQueryChange} /> 
      <Nav btnClick= {handleClick}/>

      {loading ? <p>Loading...</p> : undefined }

      <Routes>
        <Route path="/" element={<Navigate to='/search'></Navigate>} />
        <Route path="cats" element={<PhotoList data={photos} />} />
        <Route path="dogs" element={<PhotoList data= {photos} />} />
        <Route path="computers" element={<PhotoList data= {photos} />} />
        <Route path= "search/:query" element={<PhotoList data= {photos} />} /> 
        <Route path ="*" element={<NotFound />} />
      </Routes>
    </>

  )
};

export default App;