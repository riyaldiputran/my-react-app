import React from 'react';
import { useEffect,useState } from 'react';
import GifComponent from '../../components/Gif'
import {Link} from "react-router-dom";

const TrendingPage = () => {
    const [gif,setGif] = useState([])

    useEffect(() => {
        const getData = async () => {
          await fetch(
            `https://api.giphy.com/v1/gifs/trending?api_key=fWe6crj60myT9yXMCtu2cRfU01OIWhh2`
          )
            .then((response) => response.json())
            .then((data) => setGif(data.data))
            .catch((err) => console.log(err));
        };
        
        getData();
        
      }, []);


    console.log(gif);
    return (
        <>
            <Link to="/home">Home</Link>
            {
                gif.map((d) => (
            <GifComponent title={d.title} url={d.images.fixed_width.url} key={d.id} />
            ))
            } 
            
      
        </>
    )
}

export default TrendingPage;