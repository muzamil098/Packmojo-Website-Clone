import React from 'react'
import classes from "./Button.module.css"
const Button = (props) => {
  return (
<button type="button" className={"btn btn-success px-4 py-2 mt-1 " + classes.button}>{props.children}</button>
  )
}

export default Button
