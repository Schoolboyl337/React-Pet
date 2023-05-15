import classes from './Pagination.module.scss'
import MyButton from '../UI/Button/MyButton'

function Pagination({pagesArray,...props}) {
    console.log(pagesArray)
  return (
    <div className={classes.paginationContainer}>
    {pagesArray.map(p => 
			<MyButton>{p}</MyButton>
		)}
    </div>
    
  )
}

export default Pagination