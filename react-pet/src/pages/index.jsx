import { Link } from "react-router-dom"
import MyButton from "../components/UI/Button/MyButton"

const Index = () => {
  return(
    <div>
			<Link to='/Cards'>
			<MyButton>
				Екарный Бабай Жми!!!
			</MyButton>
			</Link>
    </div>
  )
}

export default Index