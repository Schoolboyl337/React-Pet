import styles from './Header.module.scss'

function Login(props) {
  const handleClick = () => {
    props.onClick();
  };
  if (props.clicks === 10) {
    return (
      <div className={ styles.headerContainerBtn }>
        ГЦ, ты всё сломал
        <button onClick={handleClick}>Починить!</button> 
      </div>
    )
  }
  return (
    <div className={ styles.headerContainerBtn }>
      <div>
        { props.clicks } вжато раз
      </div>
      <button onClick={handleClick}>вжми меня!</button> 
    </div>
  )
}

export default Login