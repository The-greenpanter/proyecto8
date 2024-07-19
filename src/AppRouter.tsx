import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./Components/Home";
import Articles from "./Components/Articles";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import {ErrorPage} from "./Components/ErrorPage";

export const AppRouter = () => {
    return (
        <Router>
            {/* Menú de Navegación */}
            <header>
                <nav>
                    <ul>
                        <li>
                            <NavLink to='/'> Inicio </NavLink>
                        </li>
                        <li>
                            <NavLink to='/articulos'> Articulos </NavLink>
                        </li>
                        <li>
                            <NavLink to='/acerca-de'> Acerca de </NavLink>
                        </li>
                        <li>
                            <NavLink to='/contacto'> Contacto </NavLink>
                        </li>
                        <li>
                            <NavLink to='/login'> Login </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <Routes>
                <Route path='/' ></Route>
                <Route path='/inicio' element={<Home />}></Route>
                <Route path='/articulos' element={<Articles />}></Route>
                <Route path='/acerca-de' element={<About />}></Route>
                <Route path='/contacto' element={<Contact />}></Route>
                <Route path='/login' element={<Login />}></Route>

                <Route path='*' element={<ErrorPage />}></Route>
            </Routes>
        </Router>
    )
}