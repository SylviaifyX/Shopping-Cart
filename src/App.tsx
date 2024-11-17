// import MainWrapper from "./layout/Wrapper"
import { Route, Routes } from "react-router-dom"
import HomePage from "./page/Home"
import CartSection from "./layout/CartSection"

function App() {
  return (
    <Routes>
      <Route path="/" element={<div className=" flex flex-col min-h-screen bg-Rose50">
        <HomePage />
      </div>} >
      </Route>
      <Route path="/cart" element={<CartSection />} />
    </Routes>
  )
}

export default App
