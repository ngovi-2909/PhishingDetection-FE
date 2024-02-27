import React from 'react'
 
const Progress_bar = ({bgcolor,progress,height}) => {
    let num = progress
    let num1 = "10"
    let total = parseInt(num)*parseInt(num1)
    console.log(total)
    if(total > 100){
        total = 100
    }
    const Parentdiv = {
        height: height,
        width: 100,
        backgroundColor: '#666666',
        borderRadius: 40,
        boxShadow:'0 1px 2px 2px #fff'
      }
     
      const Childdiv = {
        height: '100%',
        width: `${total}%`,
        backgroundColor: bgcolor,
        borderRadius: 40,
        textAlign: 'center'
      }
     
      const progresstext = {
        padding: 10,
        color: 'black',
        fontWeight: 500,
        fontSize: 14,
        
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