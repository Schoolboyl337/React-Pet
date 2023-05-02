import classes from './MyButton.module.scss'

function Button({children,...props}) {
  return (
    <button {...props} className={classes.btn}>
      { children }
    </button>
  )
}

export default Button