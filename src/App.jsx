import React, { useState, useEffect } from 'react'
import {Routes, Route, Navigate} from 'react-router-dom';
//Add in useRef if needed

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
  const[catImg, setCatImg] = useState([]);
  const[dogImg, setDogImg] = useState([]);
  const[computerImg, setComputerImg] = useState([]);

  //Re-run API call when query state/value changes
  useEffect( () => {
    fetchData(query);
    fetchData('cats');
    fetchData('dogs');
    fetchData('computers');
  },[query]);
      

  //Fetches images when query value changes - either search or button
  //Sets state of photo array to returned image objects 
  const fetchData = (searchText) =>{
    setLoading(true);
    let activeFetch = true;
    setQuery(searchText);
    
    fetch(`https://pixabay.com/api/?key=${apiKey}&q=${searchText}`)
        .then(response => response.json())
        .then (responseData => {
          if (activeFetch){
            if (searchText ==='cats'){
              setCatImg(responseData.hits);
            } else if (searchText === 'dogs'){
              setDogImg(responseData.hits);
            } else if (searchText ==='computers'){
              setComputerImg(responseData.hits);
            }else {
              setPhotos(responseData.hits);
            }
          }
           setLoading(false);
        })
        .catch(error => console.log('Error fetching and parsing data',error))      
        return () => {activeFetch= false}
    }

console.log(query);
//Renders search and nav (every page), sets routes for buttons, search, and not found
  return (
    <>
      <Search changeQuery= {fetchData} /> 
      <Nav />

      {loading ? <p>Loading...</p> : undefined }

      <Routes>
        <Route path="/" element={<Navigate to='/cats'></Navigate>} />
        <Route path= "cats" element={<PhotoList data= {catImg} query= 'cats' />} />
        <Route path="dogs" element={<PhotoList data= {dogImg} query= 'dogs' />} />
        <Route path="computers" element={<PhotoList data= {computerImg} query= 'computers' />} />
        <Route path= "search/:query" element={<PhotoList data= {photos} query={query} />} /> 
        <Route path ="/*" element={<NotFound />} />
      </Routes>
    </>
  )
};

export default App;