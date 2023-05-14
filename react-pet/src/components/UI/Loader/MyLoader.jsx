import classes from './MyLoader.module.scss'
function MyLoader() {
	return (
		<div className={classes.loaderContainer}>
			<div className={classes.loader}/>
		</div>
	)
}
export default MyLoader