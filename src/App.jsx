import { BrowserRouter , Route , Routes } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import Footer from "./components/layout/Footer"
export default function App() {
  return (
    <>
    <BrowserRouter>
    <div className="flex flex-col justify-between h-1/2">
      <Navbar/>
      <main className="border bg-white-500">
      <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/about" element = {<About/>}/>
      <Route path="/notfound" element = {<NotFound/>}/>
      <Route path="/*" element = {<NotFound/>}/>
      </Routes>
      </main>
      <Footer/>
    </div>
    </BrowserRouter>
    </>
  )
}