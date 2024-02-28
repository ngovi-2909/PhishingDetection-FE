import { Image } from "@mui/icons-material";
import {CardMedia, Paper, Stack} from "@mui/material";
import React from "react";

const ImageCard = () =>{

    return(
        <Stack
            sx={{height:'80%'}}
        > 
            <CardMedia 
            sx ={{height:'100%', width:'100%', mt: 5, mr: 5, borderRadius: '10px'}}
            component="img"
            className="card-image"/>
        </Stack>
    )
}

export default ImageCard