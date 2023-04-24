import reactLogo from '../../assets/react.svg'
import styles from './Header.module.scss'
import Login from './Login'
import { useState } from 'react'

function Header(props) {
  const [clickers, setClickers] = useState(0);

  const handleChildClick = () => {
   clickers < 10 ? setClickers(clickers + 1) : setClickers(clickers - 1);
  };
  return (
    <div className={ styles.header }>
      <header className={ styles.headerContainer }>
        <a href="https://reactjs.org" target="_blank">
          <img src={ reactLogo } className="logo react" alt="React logo" />
        </a>
        <div>
          Привет { clickers < 10 ? props.name : "жеский кликер"}
        </div>
        <Login onClick={handleChildClick} clicks={clickers}/>
      </header>
    </div>
  )
}

export default Header