import React, { useState, useEffect } from "react";
import Menu from "../components/menu";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/homeStyle.css"; // Importa tu archivo de estilos

import Swal from 'sweetalert2';
import Axios from 'axios';

export default function CrearJuego() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const [id, setId] = useState(0);
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [imagen, setImagen] = useState("");
  const [categoria, setCategoria] = useState("");

  const [categorias, setCategorias] = useState([]);


  const url = "http://localhost:3005/api/";

  useEffect(() => {
    // Llenar las categorías al cargar el componente
    obtenerCategorias();
  }, []);

  const obtenerCategorias = () => {
    // Aquí puedes hacer una solicitud a tu API para obtener las categorías
    // Ejemplo ficticio de categorías, reemplázalo con la lógica real
    const categoriasFicticias = ["Acción", "Aventura", "Estrategia", "Deportes"];
    setCategorias(categoriasFicticias);
  };


  const limpiarCompos = () => {
    setTitulo("");
    setDescripcion("");
    setImagen("");
    setCategoria("");
  };

  const handleCrear = () => {

    if (!titulo || !descripcion || !categoria || !imagen){
      Swal.fire({
        icon: "error",
        title: "Todos los campos son obligatorios",
        text: "Por favor, rellena todos los campos antes de enviar el formulario",
      });
      return; 
    }

    Axios.post(url, {
      titulo: titulo,
      descripcion: descripcion,
      imagen: imagen,
      categoria: categoria,
    })
      .then(() => {
        // listar();
        limpiarCompos();
        Swal.fire({
          title: "<b>Publicado!<b>",
          text: `Tu publicacion ${titulo} se guardo con exito`,
          icon: "success",
        });
      })
      .catch(error => {
        Swal.fire({
          icon: "error",
          title: "Tenemos un problema",
          text: "Por el momento no podemos guardar la publicasion",
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
              <li class="breadcrumb-item active" aria-current="page">Crear Publicaciones</li>
            </ol>
          </nav>
        <div className="App">
          <div className="card text-center mt-3 shadow">
            <div className="card-header bg-success text-white fs-6 fw-bold">
              {/* <br /> */}
              <h3> <strong>
                Crear una publicacion
              </strong> </h3>

            </div>


          </div>
          <br />
          <div class="card">
            <div class="card-body">
              <form class="row g-3">
                <div class="col-md-6">
                  <label for="inputEmail4" class="form-label">Titulo</label>
                  <input type="text" class="form-control" id="titulo" value={titulo}
                    onChange={(e) => {
                      setTitulo(e.target.value);
                    }}
                    placeholder="Titulo" />
                </div>
                <div class="col-md-6">
                  <label for="inputState" class="form-label">Categoria</label>
                  <select id="inputState" class="form-select"
                    value={categoria}
                    onChange={(e) => {
                      setCategoria(e.target.value);
                    }}
                  >
                    <option value="" disabled selected>Selecciona una...</option>
                    {categorias.map((cat, index) => (
                      <option key={index} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
                <div class="col-12">
                  <label for="inputAddress" class="form-label">Comentario..</label>
                  <textarea type="text" class="form-control" id="inputAddress" placeholder="Comentario..."
                    value={descripcion}
                    onChange={(e) => {
                      setDescripcion(e.target.value);
                    }} />
                </div>
                <div class="col-12">
                  <label for="inputAddress2" class="form-label">URL Imagen</label>
                  <input type="url" class="form-control" id="inputAddress2" placeholder="https://url de tu imagen" value={imagen}
                    onChange={(e) => {
                      setImagen(e.target.value);
                    }} />
                </div>

                <div class="col-12">
                <div className="d-flex justify-content-end">
                    <button
                      onClick={limpiarCompos}
                      type='Button'
                      className='btn btn-warning me-2'
                    > LIMPIAR CAMPOS</button>

                    <button
                      onClick={handleCrear}
                      type='Button'
                      className='btn btn-primary'
                    > CREAR </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}