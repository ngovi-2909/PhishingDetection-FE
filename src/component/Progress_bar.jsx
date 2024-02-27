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
        width: 150,
        backgroundColor: '#666666',
        borderRadius: 40,
        boxShadow:'0 2px 3px 3px rgba(255, 253, 243, 0.4), 4px 6px 6px rgba(240, 46, 170, 0.3),4px 12px 12px rgba(240, 46, 170, 0.3)',
        marginTop:8
      }
     
      const Childdiv = {
        height: '100%',
        width: `${total}%`,
        backgroundColor: bgcolor,
        borderRadius: 40,
        textAlign: 'center',
      }
     
      const progresstext = {
        padding: 10,
        color: 'black',
        fontWeight: 800,
        fontSize: 16,
        
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