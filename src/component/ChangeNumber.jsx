import React from "react";

const ChangeNumbertoString = (props) =>{

   const getNumber =(num) => {
        var units = ["","K","M","B","T","Q"]
        var unit = (Number(num) / 1.0e+1).toFixed(0).toString().length
        var r = unit%3
        var x =  Math.abs(Number(num))/Number('1.0e+'+(unit-r)).toFixed(2)
        return ((Math.round(x)==x) ? x : x.toFixed(2))+ '' + units[Math.floor(unit / 3)]
    }
 
    return(
        <div>
            <p className="fs-3 fw-bolder font-monospace text-light"
                style={{textShadow:'2px 3px 3px rgba(255, 253, 243, 0.3)'}}>
                    {getNumber(props.data)} {props.day}
            </p>
        </div>
    )
}
export default ChangeNumbertoString