import React, { useState } from "react";
import Menu from "../components/menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import "../assets/css/homeStyle.css"; // Importa tu archivo de estilos
// import { MDBBtn } from 'mdb-react-ui-kit';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={`home ${isMenuOpen ? "menu-open" : ""}`}>
      <Menu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      <div className="container">
        <div className="App">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="/">Home</a></li>
              {/* <li class="breadcrumb-item active" aria-current="page">Library</li> */}
            </ol>
          </nav>
          <div className="card text-center mt-3 shadow">
            <div className="card-header bg-success text-white fs-6 fw-bold" >
              <br />
              <h3> <strong> CHAVALOTES! </strong> </h3>


            </div>
            {/* <h3> INICIO </h3>
            <p> El mundo gaming en tus manos</p> */}
          </div>
          <div id="carouselExampleFade" class="carousel slide carousel-fade">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="https://cdn2.unrealengine.com/biggest-upcoming-pc-games-2022-god-of-war-2-1920x1080-e7234658b7f1.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="https://hardzone.es/app/uploads-hardzone.es/2022/08/juego-spider-man-4k-ray-tracing-1200x675.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="https://sm.ign.com/ign_es/feature/t/the-10-bes/the-10-best-resident-evil-games-of-all-time_srvh.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="https://areajugones.sport.es/wp-content/uploads/2020/09/super-mario-3d-all-stars-2.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2019/09/gears-5_8.jpg?tf=3840x" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="https://image.api.playstation.com/vulcan/ap/rnd/202208/1716/tw8UCwGRiKfUF7l7DSu8xaIa.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="https://cdn1.epicgames.com/offer/b7773a08a6fa41e3a0fbc4c1e51c95a4/EGS_F123ChampionsEdition_Codemasters_Editions_S1_2560x1440-37f6fd4df7638a4f73511666da1a7eb7" class="d-block w-100" alt="..." />
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="App">
          <div className="card mt-3 shadow">
          <div className="card-header bg-success text-white fs-6 fw-bold">
            <h2>Reseñas de nuestros usuarios!</h2>
            </div>
            <div class="card mt-2 col col-sm-10 mx-auto">
              <div class="card-header">
                GTA VI
              </div>
              <div class="card-body">
                <blockquote class="blockquote mb-0">
                  <p>Una nueva experiencia detro del mundo gamaing, graficos avazados y una nueva historia plagada de misterios.</p>
                  <footer class="blockquote-footer">Rockstar Games<cite title="Source Title"></cite></footer>
                </blockquote>
              </div>
              {/* <br /> */}
            </div>
              <div class="card mt-2 col col-sm-10 mx-auto">
                <div class="card-header">
                  Red Dead Redemption 2
                </div>
                <div class="card-body">
                  <blockquote class="blockquote mb-0">
                    <p>Explora el salvaje oeste en esta épica aventura, con una narrativa envolvente y detalles impresionantes.</p>
                    <footer class="blockquote-footer">Rockstar Games<cite title="Source Title"></cite></footer>
                  </blockquote>
                </div>
              </div>
              <div class="card mt-2 col col-sm-10 mx-auto">
                <div class="card-header">
                  The Witcher 3: Wild Hunt
                </div>
                <div class="card-body">
                  <blockquote class="blockquote mb-0">
                    <p>Embárcate en una emocionante búsqueda como Geralt de Rivia en este juego de rol con mundos vastos y decisiones impactantes.</p>
                    <footer class="blockquote-footer">CD Projekt<cite title="Source Title"></cite></footer>
                  </blockquote>
                </div>
              </div>
              <div class="card mt-2 col col-sm-10 mx-auto">
                <div class="card-header">
                  Assassin's Creed Valhalla
                </div>
                <div class="card-body">
                  <blockquote class="blockquote mb-0">
                    <p>Únete a la hermandad de asesinos y explora la era vikinga en este juego lleno de acción, intriga y decisiones cruciales.</p>
                    <footer class="blockquote-footer">Ubisoft<cite title="Source Title"></cite></footer>
                  </blockquote>
                </div>
              </div>
              <div class="card mt-2 col col-sm-10 mx-auto">
                <div class="card-header">
                  Cyberpunk 2077
                </div>
                <div class="card-body">
                  <blockquote class="blockquote mb-0">
                    <p>Adéntrate en Night City, un futurista mundo abierto lleno de ciberpunk, decisiones morales y una historia envolvente.</p>
                    <footer class="blockquote-footer">CD Projekt<cite title="Source Title"></cite></footer>
                  </blockquote>
                </div>
              </div>
           <br />
          </div>
        </div>    
       <br />
      </div>
      
    </div>
    
  );
}
