import React, { useEffect } from 'react'

const Contact = () => {

  useEffect(() => {
    console.log('contact useffect');
    
  }, [])

  console.log('contact render');


  return (
    <div>Contact</div>
  )
}

export default Contact