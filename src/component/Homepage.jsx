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
import vid1 from "../asset/video/gif1.gif";
import vid2 from "../asset/video/giphy.gif";
import vid3 from "../asset/video/gif2.gif";
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

    const callApi =(url)=>{
        console.log(url)
        fetch(`${api.Url}/predict/`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({domain: url})
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
                setWebsiteInfo(url)
                setTimeout(() => setIsLoading(false), 3000)
            })
    }


    const handleFormSubmit =  (event) => {
		event.preventDefault()
        
        if(urlPhishing !== ""){
            if(urlPhishing.startsWith("https://") || urlPhishing.startsWith("http://")){
                callApi(urlPhishing)
                setIsLoading(true)
                setError(false)
                console.log(urlPhishing)
            }else{
                callApi("https://"+urlPhishing)
                setUrlPhishing("https://"+urlPhishing)
                setIsLoading(true)
                setError(false)
                console.log("https://"+urlPhishing)
            }
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
        <Parallax pages={3}
                  style={{
                      background: '#000', color: 'white' ,
                }}
        >
            <ParallaxLayer
                offset={0}
                speed={0.5}
                factor={2}
                style={{
                    marginBottom: '5%',
                }}
            >

            <Grid container direction="row"
                style={{
                    background: '#387ADF',
                }}
            >

                        <Grid item xs={12} sm={6} lg={6} md={6} mt={30}>
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

                        </div>
                    </Grid>
                    <Grid
                        display="flex"
                        justifyContent="center"
                        justifyItems="center"
                        xs={12} sm={6} lg={6} md={6} mt={15}
                    >
                        <img src={vid1} style={{width: '50%'}}/>
                    </Grid>
                    <Grid  lg={12} sm={12} md={12} xs={12}
                        item className="flex justify-center" style={{height:300}}>
                        <Grid
                        style={{marginTop: '2%'}}
                        lg={12} sm={12} md={8}
                        item className="flex justify-center"
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
            </Grid>
                <Grid
                    style={{
                        marginTop: '30%',
                        marginBottom: 'auto',
                    }}
                    direction="row"
                    display="flex"
                    justifyContent="center"
                    justifyItems="center"
                >
                    <Grid lg={6} md={6} sm={6}  xs={12}>
                        <img src={vid2} style={{borderRadius: '10px'}}/>
                    </Grid>
                    <Grid lg={6} md={6} sm={6} xs={12} ml={20} mt={10}>
                        <h1>Be careful with personal information</h1>
                        <h1>Be wary of impersonating</h1>
                        <h1>Stay cautions on public Wi-Fi</h1>
                    </Grid>

                </Grid>
            </ParallaxLayer>
            <ParallaxLayer
                offset={1}
                speed={0.5}
                style={{marginTop:'60%'}}
            >
                <Grid
                    direction="row"
                    display="flex"
                    justifyContent="center"
                    justifyItems="center"
                    ml={30}
                >
                    <Grid lg={6} md={6} sm={6} xs={12} style={{width: '50%'}}>
                        <h1>
                            <Typewriter options={{
                                delay: 50,
                                strings: ["Don't be fooled by phishing scams!"],
                                loop: true,
                                autoStart: true,
                            }}
                            />
                        </h1>
                    </Grid>
                    <Grid lg={6} md={6} sm={6}  xs={12} style={{width: '50%'}}>
                        <img src={vid3} style={{width: '70%', borderRadius: '10px'}}/>
                    </Grid>
                </Grid>

            </ParallaxLayer>

        </Parallax>

    </div>
)
}

export default Homepage