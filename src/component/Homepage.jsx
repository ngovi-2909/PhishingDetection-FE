import React, { useState} from "react";
import TableInform from "./TableInform";
import NavBar from "./NavBar";
import "./css/style.css"
import {Box, Stack, FormControl, Grid, IconButton, TextField, Paper, Alert} from "@mui/material";
import { Search } from "@mui/icons-material";
import styled from "styled-components";
import {api} from "../api"
import {BeatLoader, PacmanLoader} from "react-spinners";
import {Parallax, ParallaxLayer} from "@react-spring/parallax";
import vid1 from "../asset/video/vid1-1.mp4";
import vid2 from "../asset/video/vid3.mp4";
import vid3 from "../asset/video/vid4.gif";
import Typewriter from "typewriter-effect";

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


    const phishingStyle= {
        background: "#D35D6E"
    }
    const legitStyle= {
        background: "#16C79A"
        
    }

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
                        setMessage("Legitimate website")
                    }else if(data.data.result === 1){
                        setMessage("Phishing website")
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
        backgroundColor: "#83f6cd",
        marginRight:"1px",
        marginLeft:"25px",
        width:"10%",
        height: '50px',
        '&:hover': {
            // background: "#93FFD8",
            background: "#90f190",
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
        <Parallax pages={2}
                  style={{
                      background: '#000', color: 'white' 
                }}
                className="navbar"
        >
            
            <ParallaxLayer
                offset={0}
                speed={1}
                factor={2}
                style={{
                    marginBottom: '5%',
                    marginTop:'10%',
                    
                }}
            >
                
                <div className="ParallaxVideo">
                    <video autoPlay muted loop>
                        <source
                            src={vid1}
                            type="video/mp4"
                        />
                    </video>
                </div>

                <Grid container spacing={0}>
                    <Grid item xs={12} sm={6} lg={6} md={8} mt={-10} style={{marginTop:40}}>
                        <div className="container mt-5 d-flex flex-column justify-content-center align-items-center">
                            <Box component="section" sx={{border: 0, marginBottom: '30px'}} className="text-center">
                                <h1 className="color-h1">Predict phishing website </h1>
                                {/*<Typography color={'#b1aeac'}>URL Prediction</Typography>*/}
                            </Box>

                            <FormControl sx={{m: 1, width: '70%', mb: 2}}>

                                <div className="input-wrapper">
                                    <input
                                        className="input-outline"
                                        placeholder="Enter your URL to search..."
                                        value={urlPhishing}
                                        onChange={handleInputChange}
                                    />
                                    <IconButton sx={iconButtonStyles} onClick={handleFormSubmit} size="small">
                                        <Search id="search-icon" fontSize="medium"/>
                                    </IconButton>
                                </div>
                            </FormControl>

                            {error ? (<Alert severity="error">Please enter url!</Alert>) : isLoading ? (<div>

                                <BeatLoader color="#ffffff"/>
                            </div>) : websiteInfo ? (
                                <div>
                                    {message && (
                                        <Alert variant="filled" severity={result === 0 ? "success" : "error"}
                                               style={result === 0 ? legitStyle : phishingStyle}
                                        >
                                            {message}
                                        </Alert>
                                    )}
                                </div>
                            ) : (<div></div>)
                            }
                            {/*{error ? (<span className="text-danger">Please enter url!</span>):(<div></div>)}*/}
                        </div>
                    </Grid>
                <Grid  lg={12} sm={12} md={8}
                    item className="px-5 flex justify-center"
                    xs={12} style={{height:180}}>
                    <Grid
                    style={{marginTop: '10%'}}
                    lg={12} sm={12} md={8}
                    item className="px-5 flex justify-center"
                    xs={12}>
                    {
                        error ? (<div></div>) : isLoading ? (<div></div>) : websiteInfo ? (
                            <TableInform data={websiteInfo} message={message} result={result} webTraffic={webTraffic}
                                         domainAge={domainAge} domainRegLen={domainRegLen} pageRank={pageRank}/>
                        ) : (
                            <div></div>
                        )
                    }

                    </Grid>
                </Grid>
                <Grid lg={12} sm={12} md={8}
                    item className="px-5 flex justify-center"
                    xs={12} style={{marginTop:'6%'}}>
                <Grid direction="row" >
                    <Grid>
                        <img src={vid3} alt="phishing1"
                            style={{
                                width: '30%',
                                marginTop: '10%',
                                marginRight: '50%',
                            }}
                        >
                        </img>
                    </Grid>
                    <Grid
                        style={{
                            marginLeft: '50%',
                            marginTop: '-20%',
                            textAlign: 'left',
                            marginBottom: 'auto',
                        }}
                    >
                        <h1>
                            {/*<Typewriter options={{*/}
                            {/*    delay: 50,*/}
                            {/*    strings: ["Be careful with personal information", "Be wary of impresonating"],*/}
                            {/*    loop: true,*/}
                            {/*    autoStart: true,*/}
                            {/*}}*/}
                            Be careful with personal information

                        </h1>
                        <h1>Be wary of impersonating</h1>
                        <h1>Stay cautions on public Wi-Fi</h1>
                    </Grid>
                </Grid>
                </Grid>
            </Grid>
            </ParallaxLayer>

            <ParallaxLayer
                offset={1}
                speed={0.5}
                style={{marginTop:'10%'}}
            >
                <div style={{
                    marginTop: '10%',
                    marginRight: '50%',
                    height:1800,
                }}>
                    <h1>
                        <Typewriter options={{
                            delay: 50,
                            strings: ["Don't be fooled by phishing scams!"],
                            loop: true,
                            autoStart: true,
                        }}
                        />
                    </h1>
                </div>
                <div className="ParallaxVideo1">
                    <video autoPlay muted loop>
                        <source
                            src={vid2}
                            type="video/mp4"
                        />
                    </video>
                </div>
            </ParallaxLayer>

        </Parallax>

    </div>
)
}

export default Homepage