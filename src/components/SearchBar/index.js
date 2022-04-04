import React from 'react';


const SearchBar = ({handleSearch,handleClick})=>{
    
    return(
        <div>
            <input type="text" onChange={handleSearch}/>

            <button type="submit" onClick={handleClick} >Search</button>
        </div>
    )
}

export  default SearchBar;
