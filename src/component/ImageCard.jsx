import { Image } from "@mui/icons-material";
import { CardMedia, Paper } from "@mui/material";
import React from "react";
import phishing from "../asset/image/phishing.jpg";

const ImageCard = () =>{

    return(
        <Paper elevation={0}
            sx={{height:'75%'}}
        > 
            <CardMedia 
            sx ={{height:'70%', width:'70%'}}
            component="img"
            image={phishing}
            className="card-image"/>
        </Paper>
    )
}

export default ImageCard