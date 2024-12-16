import { Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import Books from "./components/Books";
import BookDetails from "./components/BookDetails";
import NotFound from "./components/NotFound";
import NavBar from "./components/NavBar";


export default function App(){
  return(
    <div>
      <NavBar/>

      <Routes>

    <Route path='/' element={<Home />} />
    <Route path='/books' element={<Books />} />
    <Route path='/books/:genre/:id' element={<BookDetails />} />
    <Route path='*' element={<NotFound />} />

      </Routes>
    </div>
  )
}