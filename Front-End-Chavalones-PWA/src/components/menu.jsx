import React from "react";
import { FaHome, FaNewspaper, FaStore, FaPlus, FaTimes, FaBars } from 'react-icons/fa'; // Ajusta los íconos según tus preferencias
import { Link, useLocation } from 'react-router-dom';
import logo from "../logo.svg";
import "../assets/css/menuStyle.css";

const navItems = ["home", "Publicaciones", "Mejores Tiendas", "Crear una Publicacion"];
const icons = [FaHome, FaNewspaper, FaStore, FaPlus];
const routes = ["/", "/todos_juegos", "/mejores_tiendas", "/agregar_juegos"];

export default function Menu({ isOpen, setIsOpen }) {
    const location = useLocation();

  return (
    <nav className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-inner">
        <header className="sidebar-header">
          <button
            type="button"
            className="sidebar-burger"
            style={{ fontSize: "25px" }}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <FaTimes className="icon" />
            ) : (
              <FaBars className="icon" />
            )}
          </button>
          <img src={logo} className="sidebar-logo" alt="Logo" />
        </header>
        <nav className="sidebar-menu">
          {navItems.map((item, index) => {
            const Icon = icons[index];
            const route = routes[index]; // Genera una ruta a partir del nombre
            return (
              <Link to={route} key={item} className={`link ${location.pathname === route ? "active" : ""}`}>
                <button type="button" className="sidebar-button">
                  <span className="material-symbols-outlined" style={{ fontSize: "25px" }}>
                    <Icon />
                  </span>
                  <p><strong>{item}</strong></p>
                </button>
              </Link>
            );
          })}
        </nav>
      </div>
    </nav>
  );
}
