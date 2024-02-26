import React from "react";
import {Box, Paper, Stack} from "@mui/material";
import { styled } from '@mui/material/styles';
import Progress_bar from "./Progress_bar";
import { AdsClickOutlined,EditCalendarOutlined,GradeOutlined, SpeedOutlined, VpnKeyOutlined } from "@mui/icons-material";
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
        <Paper className="mt-2" elevation={3} sx={{height:'50%',boxShadow:'0 2px 3px 3px #B9D3EE',background:'#FFEFD5',':hover': {
            boxShadow: 20, }}} lg={12} sm={12} md={8} xs={12}>
        <Stack spacing={2}
            component={Paper}
            sx={{height:200}}
            style={props.result === 0 ? legitStyle: phishingStyle}
        >
            {props.message && (
                // <div className="alert alert-success fade show text-center text-success">
                    <h3 className="mt-2">{props.message}</h3>
                // </div>
            )}
        </Stack>
        
        <Box sx={{ width: '100%', height: '200px', marginTop:2}} sm={12} md={8} xs={12}>
            
            <Stack direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={4} sm={12} md={8} xs={12}
            >
                
                <Paper sx={{width:'20%',height:130,boxShadow:'0 2px 3px 3px #FF4500',background:'#FF9999',':hover': {
                    boxShadow: 20, }}}
                   
                   elevation={3}
                >
                    
                   <div className="container" style={{padding:5}}>
                        <div className="row-cols-1 ">
                            <div className="col text-end mb-1">
                                <GradeOutlined className="me-2  text-light"
                                style={{textShadow:'2px 4px 4px rgba(46,91,173,0.6)'}}/>
                            </div>
                            <div className="col d-flex justify-content-between">
                                <div></div>
                                <div>
                                <Progress_bar
                                bgcolor="#E0FFFF"
                                progress={props.pageRank}
                                height={'5'}  
                                />
                                </div>
                                <div >
                                    <p className="fs-4 fw-bolder font-monospace me-3 text-light"
                                        style={{textShadow:'2px 4px 4px rgba(46,91,173,0.6)'}}
                                    >{props.pageRank}</p> 
                                </div>
            
                            </div>
                            <div className="col text-start">
                                <p className="fs-6 fw-bolder ms-2 text-light"
                                style={{textShadow:'2px 4px 4px rgba(46,91,173,0.6)'}}>PageRank</p>
                            </div>
                        </div>
                        
                   </div>
                   
                </Paper>
                
                <Paper sx={{width:'20%',height:130,boxShadow:'0 2px 3px 3px #FF4500',background:'#0099FF',':hover': {
                    boxShadow: 20, }}}
                   
                   elevation={3}
                >
                    
                   <div className="container" style={{padding:5}}>
                        <div className="row-cols-1 ">
                            <div className="col text-end mb-1">
                                <AdsClickOutlined className="me-2  text-light"
                                style={{textShadow:'2px 4px 4px rgba(46,91,173,0.6)'}}/>
                            </div>
                            <div className="col d-flex justify-content-between">
                                <div></div>
                                <div>
                                <p className="fs-4 fw-bolder font-monospace ms-3 text-light"
                                        style={{textShadow:'2px 4px 4px rgba(46,91,173,0.6)'}}
                                    >{props.webTraffic}</p> 
                                </div>
                                <div >
                                    
                                </div>
            
                            </div>
                            <div className="col text-start">
                                <p className="fs-6 fw-bolder ms-2 text-light"
                                style={{textShadow:'2px 4px 4px rgba(46,91,173,0.6)'}}>Web traffic</p>
                            </div>
                        </div>
                        
                   </div>
                   
                </Paper>

                <Paper sx={{width:'20%',height:130,boxShadow:'0 2px 3px 3px #FF4500',background:'#00BB00',':hover': {
                    boxShadow: 20, }}}
                    elevation={3}
                >
                    
                   <div className="container" style={{padding:5}}>
                        <div className="row-cols-1 ">
                            <div className="col text-end mb-1">
                                <SpeedOutlined className="me-2  text-light"
                                style={{textShadow:'2px 4px 4px rgba(46,91,173,0.6)'}}/>
                            </div>
                            <div className="col d-flex justify-content-between">
                                <div></div>
                                <div>
                                    <p className="fs-4 fw-bold font-monospace me-3 text-light"
                                        style={{textShadow:'2px 4px 4px rgba(46,91,173,0.6)'}}
                                    >{props.domainAge}</p> 
                                </div>
                                <div >
                                    
                                </div>
            
                            </div>
                            <div className="col text-start">
                                <p className="fs-6 fw-bolder text-light text-center"
                                style={{textShadow:'2px 4px 4px rgba(46,91,173,0.6)'}}>Domain Age by whois</p>
                                
                            </div>
                        </div>
                        
                   </div>
                   
                </Paper>

                <Paper sx={{width:'20%',height:130,boxShadow:'0 2px 3px 3px #FF4500',background:'#B9D3EE',':hover': {
                    boxShadow: 20, }}}
                   
                   elevation={3}
                >
                    
                   <div className="container" style={{padding:5}}>
                        <div className="row-cols-1 ">
                            <div className="col text-end mb-1">
                                <EditCalendarOutlined className="me-2  text-light"
                                style={{textShadow:'2px 4px 4px rgba(46,91,173,0.6)'}}/>
                            </div>
                            <div className="col d-flex justify-content-between">
                                <div></div>
                                <div>
                                <p className="fs-4 fw-bolder font-monospace me-3 text-light"
                                        style={{textShadow:'2px 4px 4px rgba(46,91,173,0.6)'}}
                                    >{props.domainRegLen}</p> 
                                </div>
                                <div ></div>
            
                            </div>
                            <div className="col text-start">
                                <p className="fs-6 fw-bolder ms-2 text-light text-center"
                                style={{textShadow:'2px 4px 4px rgba(46,91,173,0.6)'}}>Domain Register by Whois</p>
                            </div>
                        </div>
                        
                   </div>
                   
                </Paper>


            </Stack>
        </Box>
        </Paper>
    )
}

export default TableInform