import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import { RouterProvider } from "react-router-dom"
import router from "./components/Router/AppRouter"

function App() {
  return (
    <div className="App">
      <Header name="Незнакомец" />
      <RouterProvider router={router} />
      <Footer />
    </div>
  )
}

export default App
