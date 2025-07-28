import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"

const RoutesHandler = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<HomePage />}/>
      </Routes>
    </main>
  )
}

export default RoutesHandler
