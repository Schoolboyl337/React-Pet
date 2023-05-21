import classes from './MyButton.module.scss'

function MyButton({children,className,...props}) {
  const buttonClasses = [classes.btn, className].filter(Boolean).join(' ');
  return (
    <button {...props} className={buttonClasses}>
      { children }
    </button>
  )
}

export default MyButton