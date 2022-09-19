import React from 'react'

function Footer(props) {
  return (
    <div className='fixed-bottom bg-black h-10 text-center'>{props.footer}</div>
  )
}

export default Footer
