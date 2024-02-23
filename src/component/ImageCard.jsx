import { Image } from "@mui/icons-material";
import { CardMedia, Paper } from "@mui/material";
import React from "react";
import phishing from "../asset/image/phishing.jpg";

const ImageCard = () =>{

    return(
        <Paper elevation={0}
            sx={{height:550}}
        > 
            <CardMedia 
            sx={{height:550}}
            component="img"
            image={phishing}/>
        </Paper>
    )
}

export default ImageCard