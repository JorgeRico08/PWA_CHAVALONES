import React, { useState, useEffect } from "react";
import Menu from "../components/menu";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/homeStyle.css";

import Swal from 'sweetalert2';
import Axios from 'axios';  // Importa Axios
// Importa tu archivo de estilos

export default function TodosJuegos() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //API
  // const [id, setId] = useState(0);
  // const [titulo, setTitulo] = useState("");
  // const [descripcion, setDescripcion] = useState("");
  // const [imagen, setImagen] = useState("");
  // const [categoria, setCategoria] = useState("");
  const [lista, setLista] = useState([]);
  const url = "http://localhost:3005/api/";

  useEffect(() => {
    listar();
  }, []);


    // Metodo para formatear la fecha
    const formatearFecha = (fechaString) => {
      const fecha = new Date(fechaString);
      const opciones = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
      return fecha.toLocaleDateString(undefined, opciones);
    };

  // Metodo listar
  const listar = () => {
    Axios.get(url)
      .then((response) => {
        setLista(response.data);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Tenemos un problema",
          text: "Por el momento no podemos listar las adopciones",
          footer: error.message,
        });
      });
  };


  return (
    <div className={`home ${isMenuOpen ? "menu-open" : ""}`}>
      <Menu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      <div className="container">
      <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="/">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">Todas las Publicaciones</li>
            </ol>
          </nav>
        <div className="App">
          <div className="card text-center mt-3 shadow">
            <div className="card-header bg-success text-white fs-6 fw-bold">
              {/* <br /> */}
              <h3> <strong>
                Todas las Publicaciones

              </strong> </h3>
            </div>
            {/* <h1> Tiendas </h1>
              <p>Página tienda</p> */}
          </div>
          <br />
          <div class="row row-cols-1 row-cols-md-3 g-4">
            {lista.map((tienda, index) => (
              <div className="col" key={index}>
                <div className="card h-100">
                  <img src={tienda.imagen} className="card-img-top" alt={`Imagen ${tienda.titulo}`} />
                  <div className="card-body">
                    <h5 className="card-title">{tienda.titulo}</h5>
                    <p className="card-text">{tienda.descripcion}</p>
                    <p className="card-text">{tienda.categoria}</p>
                    <div class="card-footer">
                      <small class="text-body-secondary">{formatearFecha(tienda.horaPublicacion)}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}