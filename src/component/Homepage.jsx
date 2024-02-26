import React, {useEffect, useState} from "react";
import Spinner from 'react-bootstrap/Spinner';
import TableInform from "./TableInform";
import NavBar from "./NavBar";
import "./css/style.css"
import { Box, FormControl, Grid, IconButton, InputAdornment, TextField } from "@mui/material";
import { PhishingOutlined, Search } from "@mui/icons-material";
import styled from "styled-components";
import ImageCard from "./ImageCard";
import Footer from "./Footer";
import {api} from "../api"
import {PacmanLoader} from "react-spinners";
import Typography from "@mui/material/Typography";
import Typewriter from 'typewriter-effect';

const Homepage = () =>{
    
    const [urlPhishing, setUrlPhishing] = useState("")
   
    const [isLoading, setIsLoading]= useState(false)
    const [message,setMessage] = useState("")
    const [websiteInfo, setWebsiteInfo] = useState("")
    const [result, setResult] = useState(0)
    const [webTraffic, setWebTraffic] = useState(0)
    const [domainAge, setDomainAge] = useState(0)
    const [domainRegLen, setDomainRegLen] = useState(0)
    const [pageRank, setPageRank] = useState(0)
    const [error, setError] = useState(false)

    const handleInputChange = (e)=>{
        setUrlPhishing(e.target.value)
    }



    const handleFormSubmit =  (event) => {
		event.preventDefault()

        if(urlPhishing !== ""){

            fetch(`${api.Url}/predict/`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({domain: urlPhishing})
            }).then((response) => response.json())
                .then((data)=>{
                    setResult(data.data.result)
                    if(data.data.result === 0){
                        setMessage("This website is legitimate")
                    }else if(data.data.result === 1){
                        setMessage("This website is phishing")
                    }
                    setPageRank(data.data.page_rank)
                    setDomainAge(data.data.domain_age)
                    setDomainRegLen(data.data.domain_register_length)
                    setWebTraffic(data.data.web_traffic)
                    setWebsiteInfo(urlPhishing)
                    setTimeout(() => setIsLoading(false), 3000)
                })
            setIsLoading(true)
            setError(false)
        }else{
            setError(true)
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
                    This website help you to check Phishing for <b>FREE</b>.
                </Box>
            </Grid>
        </Grid>
        <Grid container spacing={0}>
            <Grid item xs={12} sm={6} lg={7} md={8} mt={8}>
                <div className="container mt-5 d-flex flex-column justify-content-center align-items-center">

                    <Box component="section" sx={{border: 0}} className="text-center">
                        <h1 className="color-h1">Phishing detection for website </h1>
                        <Typography color={'#8B7E74'}>URL Prediction</Typography>

                    </Box>

                    <FormControl sx={{m: 1, width: '70%'}}>
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
                                    style={{
                                        marginLeft: '-40px',
                                    }}
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

                {isLoading ?(<div>
                    <PacmanLoader color="#36d7b7" >
                        <span className="visually-hidden">Loading...</span>
                    </PacmanLoader>
                </div>):(<div></div>)
                }
                    {error ? (<span className="text-danger">Please enter url!</span>):(<div></div>)}
                </div>
            </Grid>
            <Grid lg={5} sm={6} md={8}
                  item className="px-5 flex justify-center"
                  xs={12}>
                <div className="container">
                    <ImageCard />
                </div>
            </Grid>
        </Grid>
        <Grid 
            lg={12} sm={12} md={8}
            item className="px-5 flex justify-center"
            xs={12}>
            
            {isLoading ? (<div>
                </div>
            ):websiteInfo ? (
                <TableInform data={websiteInfo} message={message} result={result} webTraffic={webTraffic} domainAge={domainAge} domainRegLen={domainRegLen} pageRank={pageRank}/>
            ):(
                <div></div>
            )}

        </Grid>
        {/*<Footer/>*/}
    </div>
)
}

export default Homepage