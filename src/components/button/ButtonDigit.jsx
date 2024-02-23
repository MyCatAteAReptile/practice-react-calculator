import React from 'react'
import Button from './Button'
import classes from './Button.module.css'

const ButtonDigit = ({children, ...props}) => {

  const componentClasses = [classes.button, classes.button__blue].join(' ');

  return (
    <Button {...props} className={componentClasses}>{ children }</Button>
  )
}

export default ButtonDigit