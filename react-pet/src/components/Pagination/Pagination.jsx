import classes from './Pagination.module.scss'
import MyButton from '../UI/Button/MyButton'
import { getPagesArray } from '../../utils/pageCounter'

function Pagination({totalPages, changePage, page}) {
	const pagesArray = getPagesArray(totalPages)
  return (
    <div className={classes.paginationContainer}>
    {pagesArray.map(p => 
			<MyButton 
			key={p}
			className={page === p ? classes.paginationActive : classes.pagination} 
			onClick={()=> changePage(p)}
			>
				{p}
			</MyButton>
		)}
    </div>
    
  )
}

export default Pagination