import React from 'react';
import BtnTrending from '../components/BtnTrending';
import SearchBar from '../components/SearchBar';
import { useEffect, useState } from "react";
import ButtonSearch from '../components/BtnSearch';
import './Home'

import Gif from '../components/Gif'
const HomePage = () =>{

    const [inputVal, setInputVal] = useState("");
    const [gifData, setGifData] = useState([]);

    const[searched,setSearched] = useState ('');
    // const dispatch = useDispatch();
  
  
  
    useEffect(() => {
      const getData = async () => {
        await fetch(
          `https://api.giphy.com/v1/gifs/search?api_key=mhzr4QVrLh2viyYNCN1FY70CpIcvWuxe&q=${inputVal}&limit=12`
        )
          .then((response) => response.json())
          .then((data) => setGifData(data.data))
          .catch((err) => console.log(err));
      };
      console.log(gifData);
      getData();
    }, [inputVal]);
  
    const handleSearch = (e) => {
        setInputVal(e.target.value)
    }
    const handleClick = () => {
      setSearched(inputVal);
      
      
  }
    return (
        <>
            <div className='container'>
            <BtnTrending/>
            <SearchBar handleSearch={handleSearch} />
            <ButtonSearch handleClick = {handleClick}/>
            {gifData.map((d) => (
              <Gif title={d.title} url={d.images.fixed_width.url} key={d.id} />
              
            ))}
            
            </div>
        </>
    )
    
}

export default HomePage;