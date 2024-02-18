import { BrowserRouter , Route } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
export default function App() {
  return (
    <>
    <BrowserRouter>
    <div className="flex flex-col justify-between h-screen">
      <Navbar/>
      <main>
        content
      </main>
    </div>
    </BrowserRouter>
    </>
  )
}