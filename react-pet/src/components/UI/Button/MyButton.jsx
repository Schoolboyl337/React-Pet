import classes from './MyButton.module.scss'

function MyButton({children,...props}) {
  return (
    <button {...props} className={classes.btn}>
      { children }
    </button>
  )
}

export default MyButton