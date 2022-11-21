import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb,weight,index,hexColor}) => {

  const [alert,setAlert] = useState(false);
  const bcg = rgb.join(',');
  let hex = rgbToHex(...rgb);//we can access in this way also hexColor
  const hexValue = `#${hexColor}`
  useEffect(()=>{
      const timeOut = setTimeout(()=>{
          setAlert(flase)
      },3000)
      return ()=>clearTimeout(timeOut);
  },[alert])
  return (
     <article className={`color ${index >10 &&
   'color-light' }`} 
     style={{backgroundColor: `rgb(${bcg})`}}
     onClick={()=>{
       setAlert(true);
       navigator.clipboard.writeText(hexValue);
     }}>
     <p className='percent-value'>{weight}%</p>
     <p className='color-value'>
      {hexValue}
     </p>
     {alert && <p className='alert'>copied to clipboard</p>}
     </article>
  )
}

export default SingleColor
