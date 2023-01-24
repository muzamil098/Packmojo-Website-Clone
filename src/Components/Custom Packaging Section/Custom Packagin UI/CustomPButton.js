import React from 'react'
import "./button.css"
const CustomPButton = (props) => {
  return (
    <button className='btn btn-success'>{props.children.toUpperCase()}</button>
  )
}

export default CustomPButton
