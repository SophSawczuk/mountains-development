import { Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Solutions from "./components/Solutions"
import Contact from "./components/Contact"
import DiseñoSur from "./components/DiseñoSur"
import Footer from "./components/Footer"
import ScrollToTop from "./assets/ScrollToTop"

function App() {

  return (
    <>
    <NavBar/>
    <ScrollToTop/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/solutions" element={<Solutions/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/diseñosur" element={<DiseñoSur/>}/>
    </Routes>
    <Footer/>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Color+Emoji&display=swap" rel="stylesheet" />
    </>
  )
}

export default App
