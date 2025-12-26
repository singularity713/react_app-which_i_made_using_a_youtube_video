
import "./css/App.css";
import {MovieProvider} from "./contexts/movieContext.jsx"
import Home from "./pages/Home.jsx"
import Favorites from "./pages/Favorites";
import {Routes,Route} from "react-router-dom"
import NavBar from "./components/NavBar";
function App() {
  return (
    <MovieProvider>
    <NavBar/>
   <main className ="main-content">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/favorites" element={<Favorites/>}></Route>
      </Routes>
    </main>
    </MovieProvider>
  )
}
export default App
