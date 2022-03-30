import React, {Component} from 'react';


class SearchBar extends Component{

    state = {gifUrl:[]};
    getUrl = async () => {
        const url = await fetch(
            'https://jsonplaceholder.typicode.com/users?'
        ).then((response) => response.json());
        // this.setState({gifUrl});
        console.log ({url});
    }
    render(){
        return (
            <>
                <div>
                    <input type="text"/>
                    <button>Search</button>
                </div>
            
            </>
        );
    }
}



export default SearchBar;