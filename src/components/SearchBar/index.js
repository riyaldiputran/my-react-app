import React from 'react';


// eslint-disable-next-line react/prop-types
const SearchBar = ({handleSearch})=>{
    
    return(
        <div>
            <input type="text" onChange={handleSearch}/>   
        </div>
    )
}

export  default SearchBar;
