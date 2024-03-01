import React from "react";
import {Box, Paper, Stack} from "@mui/material";
import { styled } from '@mui/material/styles';
import Progress_bar from "./Progress_bar";
import { AdsClickOutlined,EditCalendarOutlined,GradeOutlined, SpeedOutlined, VpnKeyOutlined } from "@mui/icons-material";
import ChangeNumbertoString from "./ChangeNumber";
const TableInform = (props) =>{
    
    const themeLegit = {
        backgroundColor: '#6EBF8B',
        width:'20%',
        height:130,
        ':hover': {
            boxShadow: '0px 20px 40px rgba(5,73,245,0.4)',
            transform: 'scale(1.05,1.05)',
        }
    }
    const themePhishing = {
        backgroundColor:'#F28585',
        width:'20%',
        height:130,
        ':hover': {
            boxShadow: '0px 20px 40px rgba(230,26,39,0.4)',
            transform: 'scale(1.05,1.05)',
        }
    }

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));


    return(
        <Paper className="mt-3" elevation={0} lg={12} sm={12} md={8} xs={12}>
        
        <Box sx={{ width: '100%', height: '200px', marginTop:5, background: '#387ADF'}} sm={12} md={8} xs={12}>
            <Stack direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={4} sm={12} md={8} xs={12}
                
            >
                
                <Paper sx={props.result === 0 ? themeLegit: themePhishing}
                   className="card-inform"
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
                                <div className="me-2">
                                    {/* <p className="fs-4 fw-bolder font-monospace me-3 text-light"
                                        style={{textShadow:'2px 4px 4px rgba(46,91,173,0.6)'}}
                                    >{props.pageRank}</p>  */}
                                    <ChangeNumbertoString data={props.pageRank} />
                                    
                                </div>
            
                            </div>
                            <div className="col text-start">
                                <p className="fs-6 fw-bolder ms-2 text-light"
                                style={{textShadow:'2px 4px 4px rgba(46,91,173,0.6)'}}>PageRank</p>
                            </div>
                        </div>
                        
                   </div>
                   
                </Paper>
                
                <Paper sx={props.result === 0 ? themeLegit: themePhishing}
                   className="card-inform"
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
                                {/* <p className="fs-4 fw-bolder font-monospace ms-3 text-light"
                                        style={{textShadow:'2px 4px 4px rgba(46,91,173,0.6)'}}
                                    >{props.webTraffic}</p>  */}
                                     <ChangeNumbertoString data={props.webTraffic}/>
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

                <Paper sx={props.result === 0 ? themeLegit: themePhishing}
                    className="card-inform"
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
                                    <ChangeNumbertoString data={props.domainAge}  day='days' />
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

                <Paper sx={props.result === 0 ? themeLegit: themePhishing}
                   className="card-inform"
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
                                {/* <p className="fs-4 fw-bolder font-monospace me-3 text-light"
                                        style={{textShadow:'2px 4px 4px rgba(46,91,173,0.6)'}}
                                    >{props.domainRegLen}</p>  */}
                                    <ChangeNumbertoString data={props.domainRegLen} day='days'/>
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