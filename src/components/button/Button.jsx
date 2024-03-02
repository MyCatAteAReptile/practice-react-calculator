import React from 'react'
import classes from './Button.module.css'

const Button = ({ children, styleClassesArray, ...props}) => {

  const classNameArray = ['button', ...styleClassesArray].map((e) => classes[e]);

  return (
    <button {...props} className={ classNameArray.join(' ') }>{ children }</button>
  )
}

export default Button