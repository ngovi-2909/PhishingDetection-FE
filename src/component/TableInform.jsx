import React,{ useState } from "react";
import { ReactDOM } from "react-dom/client";
import {Box, Paper, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import { styled } from '@mui/material/styles';
import Progress_bar from "./Progress_bar";

const TableInform = (props) =>{
    const phishingStyle= {
        marginTop: '20px',
        width: '50%',
        height: '50px',
        background: '#F28585',
        marginRight: '10px',
        marginLeft: '10px',
        marginBottom: '10px',
        borderRadius:'10px',
        display:'inline-block',
    }
    const legitStyle= {
        marginTop: '20px',
        width: '50%',
        height: '50px',
        background: '#BFD8AF',
        marginRight: '10px',
        marginLeft: '10px',
        marginBottom: '10px',
        borderRadius:'10px',
        display:'inline-block',
        alignItems:"center",
        
    }
    const themeLegit = {
        backgroundColor: '#BFD8AF',
    }
    const themePhishing = {
        backgroundColor:'#F28585'
    }

   
    
    

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
    return(
        <Paper elevation={3} sx={{height:'50%'}} lg={12} sm={12} md={8} xs={12} style={props.result === 0 ? themeLegit: themePhishing}>
        <Stack spacing={2}
            component={Paper}
            sx={{height:100}}
            style={props.result === 0 ? legitStyle: phishingStyle}
        >
            {props.message && (
                // <div className="alert alert-success fade show text-center text-success">
                    <h3 className="mt-2">{props.message}</h3>
                // </div>
            )}
        </Stack>
        
        <Box sx={{ width: '100%'}} sm={12} md={8} xs={12} style={props.result === 0 ? themeLegit: themePhishing}>
            <Stack direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={8} sm={12} md={8} xs={12}>
                <Item sx={{width:'15%',height:'20%', borderTop: 1, borderColor:'#1E90FF',borderWidth:5}} >
                    <Stack direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={1}>
                    <Progress_bar 
                        bgcolor="#F5DEB3"
                        progress="5"
                        height={'5'}
                    />
                    <p class="fs-5 text-primary">Page Rank</p>
                    </Stack>
                    
                </Item>
                <Item sx={{width:'20%',height:'20%', borderTop: 1, borderColor:'#1E90FF',borderWidth:5}}>
                    <Stack direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={1}>
                    <h2 className="fw-bold text-dark">13250</h2>
                    <p class="fs-5 text-primary">Web traffic</p>
                    </Stack>
                </Item>
                <Item sx={{width:'20%',borderTop: 1, borderColor:'#1E90FF',borderWidth:5}}>
                    <Stack direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={1}>
                    <h2 className="fw-bold text-dark">3467 days</h2>
                    <p class="fs-5  text-primary">Domain Age</p>
                    </Stack>
                </Item>

                <Item sx={{width:'20%',borderTop: 1, borderColor:'#1E90FF',borderWidth:5}} sm={12} md={8} xs={12}>
                <Stack direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={1}>
                    <h2 className="fw-bold text-dark">234 days</h2>
                    <p class="fs-5 text-primary">Domain Register</p>
                    </Stack>
                </Item>
            </Stack>
        </Box>
        </Paper>
    )
}

export default TableInform