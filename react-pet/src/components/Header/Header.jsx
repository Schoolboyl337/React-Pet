import reactLogo from '../../assets/react.svg'
import styles from './Header.module.scss'

function Header(props) {
console.log(styles)
  return (
    <div className={styles.header}>
      <header className={styles.headerContainer}>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <div>
          Привет {props.name}
        </div>
        <div>
          Ну я шапка,КСТА
        </div>
      </header>
    </div>
  )
}

export default Header