import React, { useState } from 'react'
 
const Progress_bar = ({bgcolor,progress,height}) => {
    let num = progress
    let num1 = "10"
    let total = parseInt(num)*parseInt(num1)
    if(total > 100){
        total = 100
    }
    const Parentdiv = {
        height: height,
        width: 110,
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
      }
     
      const Childdiv = {
        height: '100%',
        width: `${total}%`,
        backgroundColor: bgcolor,
        borderRadius:40,
        textAlign: 'right'
      }
     
      const progresstext = {
        padding: 10,
        color: 'black',
        fontWeight: 900,
        fontSize: 25,
        marginLeft:20
      }
       
    return (
    <div style={Parentdiv} >
      <div style={Childdiv}>
        <span style={progresstext}>{`${progress}/10`}</span>
      </div>
    </div>
    )
}
 
export default Progress_bar;