import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return(
    <h1>IZA LESSA IZ ZA GOR K NAM PRISHEL FATAL ERROR !!!</h1>
  )
}

export default Error