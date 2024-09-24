import React, { useEffect, useState } from 'react'
import AboutChold from './AboutChild';

const About = ({name}) => {
 
  const [s,sets] = useState(false)

  useEffect(() => {
    console.log('use effect');
    const id = setInterval(() => {
      console.log('interval h2222222a');
      
    }, 1000)

    return () => {
      clearInterval(id)
    }
  },[])

  

  return (
    <div>
        <h1>ABOUTTTTTTTTTTTTTTT</h1>
      </div>
  )
}

export default About