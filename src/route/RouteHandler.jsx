import { Route, Routes } from "react-router-dom"
import HomePage from "../Pages/HomePage"

const RouteHandler = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<HomePage />}/>
      </Routes>
    </main>
  )
}

export default RouteHandler
