import React, {useEffect, useState} from "react";
import Spinner from 'react-bootstrap/Spinner';
import TableInform from "./TableInform";
import NavBar from "./NavBar";
import "./css/style.css"
import { Box, FormControl, Grid, IconButton, InputAdornment, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";
import styled from "styled-components";
import ImageCard from "./ImageCard";
import Footer from "./Footer";
import {api} from "../api"

const Homepage = () =>{
    
    const [urlPhishing, setUrlPhishing] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [isLoading, setIsLoading]= useState(false)
    const [successMessage, setSuccessMessage] = useState("")
    const [websiteInfo, setWebsiteInfo] = useState("")
    const [result, setResult] = useState()

    const handleInputChange = (e)=>{
        setUrlPhishing(e.target.value)
    }



    const handleFormSubmit =  (event) => {
		event.preventDefault()
        fetch(`${api.Url}/predict/`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({domain: urlPhishing})
        }).then((response) => response.json())
            .then((data)=>{
            setResult(data.result)
            setTimeout(() => setIsLoading(false), 3000)
        })
		setIsLoading(true)
        // setWebsiteInfo(urlPhishing)
        console.log(result === 0)
        if(result === 0){
            setSuccessMessage("This website is legitimate")
        }else if(result === 1){
            setSuccessMessage("This website is phishing")
        }

	}

    const iconButtonStyles ={
        backgroundColor: "#90EE90",
        marginRight:"1px",
        '&:hover': {
            background: "#32CD32",
          },
        
    }

    const StyledTextField = styled(TextField)`
        label.Mui-focused {
            color: green;
        }
        .MuiOutlinedInput-root {
            
        &.Mui-focused fieldset {
            border-color: green;
        }
    }
    `;
    
        
return (
    <div className="px-20">
        <NavBar/>
        <Grid container spacing={0}>
            <Grid item xs={12} sm={12} lg={12}>
                <Box component="section" sx={{ p: 2, border:0, backgroundColor:"#f6f6f6" }}>
                    This website help people check Phishing for <b>FREE</b>.
                </Box>
            </Grid>
        </Grid>
        <Grid container spacing={0}>
            <Grid item xs={12} sm={6} lg={6} md={8}>
                <div className="container mt-5 d-flex flex-column justify-content-center align-items-center">
            
                <Box component="section" sx={{ border: 0 }} className="text-center">
                        <h1 className="color-h1">Phishing detection website </h1>
                        <h3>URL Prediction</h3>
                </Box>
                  
                <FormControl sx={{ m: 1,width: '75%'}}>
                    <TextField
                        className="inputRounded mt-3"
                        id="urlPhishing"
                        name = "urlPhishing"
                        placeholder="Enter URL need to check"
                        variant="outlined"
                        size="large"
                        value={urlPhishing}
                        onChange={handleInputChange}
                        InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton 
                                    sx={iconButtonStyles}
                                    edge="end" 
                                    color="default" 
                                    size="medium"
                                    onClick={handleFormSubmit}>
                                  <Search fontSize="large" />
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                        
                    />
                </FormControl>
            </div>
            </Grid>
            <Grid lg={5} sm={6} md={8}
                  item className="px-5 flex justify-center"
                  xs={12}>
                <div className="container mt-5">
                    <ImageCard />
                </div>
            </Grid>
            {isLoading ? (<div>
                    <Spinner animation="border" variant="info">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            ):errorMessage ?(
                <div className="alert alert-danger fade show">{errorMessage}</div>
            ):websiteInfo ? (
                <TableInform data={websiteInfo} message={successMessage} result={result}/>
            ):(
                <div></div>
            )}

        </Grid>
        {/*<Footer/>*/}
    </div>
)
}

export default Homepage