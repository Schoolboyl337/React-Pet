import classes from "./MyModal.module.scss"
function MyModal({children, isVisible, setVisible}) {
  const computedClass = [classes.modal]
  if(isVisible) {
    computedClass.push(classes.active)
  }
  return (
  <div className={computedClass.join(' ')} onClick={() => setVisible(false)}>
    <div className={classes.modalContent} onClick={e => e.stopPropagation()}>
        {children}
    </div>
  </div>
  )
}

export default MyModal