import { BrowserRouter , Route , Routes } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
export default function App() {
  return (
    <>
    <BrowserRouter>
    <div className="flex flex-col justify-between h-screen">
      <Navbar/>
      <main className="border bg-lime-500">
      <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/about" element = {<About/>}/>
      <Route path="/notfound" element = {<NotFound/>}/>
      <Route path="/*" element = {<NotFound/>}/>
      </Routes>
      </main>
    </div>
    </BrowserRouter>
    </>
  )
}