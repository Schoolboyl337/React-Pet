import classes from './MyInput.module.scss'
import React from 'react'

const MyInput = React.forwardRef((props,ref) => {
  return (
    <input ref={ref} {...props} className={classes.input} />
  )
})

export default MyInput