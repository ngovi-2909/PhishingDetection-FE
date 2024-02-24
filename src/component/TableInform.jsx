import React,{ useState } from "react";
import { ReactDOM } from "react-dom/client";
import {Paper, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";


const TableInform = (props) =>{
    const [successMessage, setSuccessMessage] = useState("")
    const phishingStyle= {
        marginTop: '30px',
        width: '100%',
        height: '300px',
        background: '#F28585',
        marginRight: '10px',
        marginLeft: '10px',
        marginBottom: '10px',
        borderRadius:'10px',
    }
    const legitStyle= {
        marginTop: '30px',
        width: '100%',
        height: '300px',
        background: '#BFD8AF',
        marginRight: '10px',
        marginLeft: '10px',
        marginBottom: '10px',
        borderRadius:'10px',
    }
    return(
        <Stack
            component={Paper}
            style={props.result === 0 ? legitStyle: phishingStyle}
        >
            {props.message && (
                // <div className="alert alert-success fade show text-center text-success">
                    <h3>{props.message}</h3>
                // </div>
            )}
            <h3>URL Website: <span className="fw-normal">{props.data}</span></h3>
            <p className="fw-bold">Web Traffic:  <span className="fw-normal"> 10000</span>  </p>
            <p className="fw-bold">PageRank:  <span className="fw-normal"> 10</span></p>
            <p className="fw-bold">Domain age:  <span className="fw-normal"> 2000 days</span></p>
            <p className="fw-bold">Domain register:  <span className="fw-normal"> 200 days</span></p>

        </Stack>
        // <div className="col-md-6 mt-4 mb-5">
        //     {props.message && (
		// 		<div className="alert alert-success fade show text-center text-success">
        //         <h4>{props.message}</h4>
        //         </div>
		// 	)}
        //         <h3>URL Website: <span className="fw-normal">{props.data}</span></h3>
        //         <p className="fw-bold">Web Traffic:  <span className="fw-normal"> 10000</span>  </p>
        //         <p className="fw-bold">PageRank:  <span className="fw-normal"> 10</span></p>
        //         <p className="fw-bold">Domain age:  <span className="fw-normal"> 2000 days</span></p>
        //         <p className="fw-bold">Domain register:  <span className="fw-normal"> 200 days</span></p>
        // </div>
    )
}

export default TableInform