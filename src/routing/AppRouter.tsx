import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { Home } from "../Components/Home.tsx";
import { Articles } from "../Components/Articles.tsx";
import { ErrorPage } from "../Components/ErrorPage.tsx";
import { About } from "../Components/About.tsx";
import { Contact } from "../Components/Contact.tsx";
import { Login } from "../Components/Login.tsx";
import logo from '../assets/logo.png';
import { useContext } from "react";
import { Context } from "../context/Context";
import { DetailArticle } from "../Components/DetailArticle.tsx";
import { Checkout } from "../Components/Checkout.tsx";
import { DarkMode } from '../Components/DarkMode';

export const AppRouter = () => {

    const { user, setUser } = useContext(Context);

    return (
        <Router>
            {/* Menú de Navegación */}
            <header className="header-nav">
                <nav>
                    <div className="logo">
                        <img src={logo} alt="logo" className="logo-img" />
                    </div>
                    <ul>
                        <li>
                            <NavLink to='/' >Inicio</NavLink>
                        </li>
                        <li>
                            <NavLink to='/articulos' >Artículos</NavLink>
                        </li>
                        <li>
                            <NavLink to='/acerca-de' >Acerca de</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contacto' >Contacto</NavLink>
                        </li>

                        {user.username !== null ? (
                            <>
                                <li>
                                    <NavLink to='/' id="text-username">{user.username}</NavLink>
                                </li>
                                <li>
                                    <a href='/' onClick={e => {
                                        e.preventDefault();
                                        setUser({ username: null })
                                    }} >Cerrar Sesión</a>
                                </li>
                            </>
                        ) : (
                            <li>
                                <NavLink to='/login' >Identifícate</NavLink>
                            </li>
                        )}
                        <li>
                            <DarkMode />
                        </li>
                    </ul>
                </nav>
            </header>
            {/* Configurar rutas */}
            <Routes>
                <Route path='/' element={<div className="content"><Home /></div>}></Route>
                <Route path='/inicio' element={<div className="content"><Home /></div>}></Route>
                <Route path='/articulos' element={<div className="content"><Articles /></div>}></Route>
                <Route path='/article/:id' element={<DetailArticle />}></Route>
                <Route path='/checkout/:id' element={<Checkout />} />
                <Route path='/acerca-de' element={<div className="content"><About /></div>}></Route>
                <Route path='/contacto' element={<div className="content"><Contact /></div>}></Route>
                <Route path='/login' element={<div className="content"><Login /></div>}></Route>
                <Route path='*' element={<div className="error-page"><ErrorPage /></div>}></Route>
            </Routes>
        </Router>
    )
}