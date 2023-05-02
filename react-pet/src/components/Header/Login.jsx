import styles from './Header.module.scss'
import MyButton from '../UI/Button/MyButton'

function Login(props) {
  const handleClick = () => {
    props.onClick();
  };
  if (props.clicks === 10) {
    return (
      <div className={ styles.headerContainerBtn }>
        ГЦ, ты всё сломал
        <MyButton onClick={handleClick}>Починить!</MyButton> 
      </div>
    )
  }
  return (
    <div className={ styles.headerContainerBtn }>
      <div>
        { props.clicks } вжато раз
      </div>
      <MyButton onClick={handleClick}>вжми меня!</MyButton> 
    </div>
  )
}

export default Login