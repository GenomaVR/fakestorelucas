import React from 'react'
import logo from "../../Assets/logo.png"
import { CartWidget } from '../CartWidget/CartWidget'
import "../Navbar/Navbar.css"
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ greeting }) => {

    const categoria = [
        {nombre:"Electronica", id:0, ruta:"/categoria/electronics"},
        {nombre:"Joyas", id:1, ruta:"/categoria/jewelery"},
        {nombre:"Ropa de Hombre", id:2, ruta:"/categoria/men's clothing"},
        {nombre:"Ropa de Mujer", id:3, ruta:"/categoria/women's clothing"}
    ]

    return (
        <header>
            <div className='img-txt'>
                <Link to="/">
                  <img src={logo} alt="Argexpress" className='logo' />
                </Link>
                <p className='bienvenida'>{greeting}</p>
            </div>
            <nav>
                <ul className='navbar'>
                    {
                        categoria.map((categoria) => {
                            return (
                                <NavLink className={"listadoProductos"}
                                  key={categoria.id}
                                  to={categoria.ruta}
                                >
                                  {categoria.nombre}
                                </NavLink>
                              );
                        })
                    }
                </ul>
                <div className='carrito-div'>
                    <a href="/" className='carro-act'>
                        <CartWidget />
                        <p>Carrito</p>
                    </a>
                </div>
            </nav>
        </header>
    )

}

export default Navbar

