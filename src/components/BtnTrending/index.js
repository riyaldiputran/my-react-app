import React from "react";
import {useHistory} from "react-router-dom";
import { Button,Box } from "@mui/material";


const BtnTrending=()=>{
    let history = useHistory();

    const handleBtnTrending = () => {
        // <Link to="/trending"> </Link>
        history.push('/trending');
    }
    return(
        <Box m={2} pt={3}> <Button variant="contained" m={2} pt={3} onClick={handleBtnTrending} >Trending Page</Button> </Box>
        
    
    )
}

export default BtnTrending;