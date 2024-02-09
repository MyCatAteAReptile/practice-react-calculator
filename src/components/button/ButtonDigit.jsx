import React from 'react'
import Button from './Button'
import classes from './Button.module.css'

const ButtonDigit = ({children, ...props}) => {
  return (
    <Button {...props} className={classes.blue}>{ children }</Button>
  )
}

export default ButtonDigit