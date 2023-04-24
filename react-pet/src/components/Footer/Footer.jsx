import reactLogo from '../../assets/react.svg'
import styles from './Footer.module.scss'
import { useState } from 'react'

function Footer(props) {
  const [clicks,setClicks] = useState(0)
  function clicker() {
    clicks < 10 ? setClicks(clicks+1) : setClicks(clicks-1)
  }
  return (
    <div className={ styles.footer }>
      <footer className={ styles.footerContainer }>
        <a href="https://reactjs.org" target="_blank">
          <img src={ reactLogo } className="logo react" alt="React logo" />
        </a>
        <div>
          Привет { clicks < 10 ? props.name : "жеский кликер"}
        </div>
        <div className={ styles.footerContainerBtn }>
          <div>
            { clicks } вжато раз
          </div>
          <button onClick={clicker}>вжми меня!</button> 
        </div>
      </footer>
    </div>
  )
}

export default Footer