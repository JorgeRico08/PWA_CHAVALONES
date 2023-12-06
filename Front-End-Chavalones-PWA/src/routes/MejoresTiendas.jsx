import React, { useState } from "react";
import Menu from "../components/menu";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/homeStyle.css"; // Importa tu archivo de estilos


export default function MejoresTiendas(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const tiendas = [
      {
        nombre: "Steam",
        descripcion: "Es una de las plataformas más grandes y populares para comprar y jugar juegos en PC. Ofrece una amplia variedad de títulos y constantes ofertas.",
        imagen: "https://prod.assets.earlygamecdn.com/images/Steam.jpg?x=0.5&y=0.5",
        enlace: "https://store.steampowered.com/?l=spanish",
      },
      {
        nombre: "GOG (Good Old Games)",
        descripcion: "Se especializa en juegos clásicos y DRM-free, lo que significa que puedes descargar y jugar tus juegos sin restricciones.",
        imagen: "https://www.muycomputer.com/wp-content/uploads/2022/04/gog.jpg",
        enlace: "https://www.gog.com/en/good-old-games"
      },
      {
        nombre: "Epic Games Store",
        descripcion: "Ofrece juegos gratuitos cada semana y ha ganado popularidad rápidamente con exclusivas y ofertas atractivas.",
        imagen: "https://cdn2.unrealengine.com/epic-games-store-seo-og-1200x1200-c50bbe5dcfa6.jpg",
        enlace: "https://store.epicgames.com/es-ES/"
      },
      {
        nombre: "Humble Bundle",
        descripcion: "Ofrece paquetes de juegos a precios muy bajos y parte de los ingresos va a organizaciones benéficas. También tiene una tienda donde puedes comprar juegos individualmente.",
        imagen: "https://cdn.humblebundle.com/static/hashed/8a88fa654693019cbe2ea724259402d591fd26e6.jpg",
        enlace: "https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwiF5o3sq_uCAxVuMdQBHclRAjgYABAAGgJvYQ&ae=2&gclid=CjwKCAiA1MCrBhAoEiwAC2d64QhnJBiotWPlcrpyT1Zql-MytJAjAbvXOjxGemSsxidX2YuuOovaYxoCOh8QAvD_BwE&ohost=www.google.com&cid=CAESVuD2qCaPvyW6DreWoaKjBaCr5VMn43ZuGRedJm16KLBL8ESSh9RmzmK-Z3a7bTgGvBHMqRPUoH9pLOnhgNQgRWwZR17mUEm5i6ZT7hV3j3zVd3i3dUJ3&sig=AOD64_1CvexKD7PQorBlGrfHrFlqY6wwcA&q&adurl&ved=2ahUKEwjE54bsq_uCAxWiPkQIHU7bA08Q0Qx6BAgFEAE"
      },
      {
        nombre: "Green Man Gaming",
        descripcion: "Con frecuencia ofrece descuentos en juegos y es conocido por tener buenas ofertas en precompras.",
        imagen: "https://www.greenmangaming.com/blog/wp-content/uploads/2017/08/infograph.png",
        enlace: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi6sIz2q_uCAxVcM0QIHfPZCkkQFnoECB4QAQ&url=https%3A%2F%2Fwww.greenmangaming.com%2Fes%2F&usg=AOvVaw1S5ouTqrlAl4RjHWQyaT59&opi=89978449"
      },
      {
        nombre: "Fanatical",
        descripcion: "Anteriormente conocido como Bundle Stars, ofrece paquetes de juegos a precios reducidos y descuentos en juegos individuales.",
        imagen: "https://www.fanatical.com/api/image/9c74d943-763b-4a53-85af-c203f4004f4a_jpeg/a062b512-9300-4f26-8a78-8bf166783327_jpeg/2fd82cac-e245-4426-97db-cb3269bde885_jpeg/3d384aaa-78c7-4f36-9ae1-c6795379d52a_jpeg/b2600515-6e2f-4a38-9e6f-a752c1e55765_jpeg/a2d8aae1-b871-40a4-ae43-fd79044f61ed_jpeg/12a7713b-6c19-424a-b40e-29ce5c49f1b9_jpeg/f259737f-ccc5-403b-a454-710c83001e0e_jpeg",
        enlace: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwj5nJqprPuCAxVEJkQIHVsYAT8QFnoECBEQAQ&url=https%3A%2F%2Fwww.fanatical.com%2Fes%2F&usg=AOvVaw0x6kNmWwTOTqSF5TBOu82f&opi=89978449"
      },
      {
        nombre: "Origin (de EA)",
        descripcion: "Es la tienda de juegos de Electronic Arts y ofrece una selección de títulos populares, especialmente aquellos desarrollados por EA.",
        imagen: "https://assets.change.org/photos/9/qr/db/SjqRDbikDEeMoxU-1600x900-noPad.jpg?1679235885",
        enlace: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwj-7Z-yrPuCAxX1OEQIHQotCbgQFnoECBEQAQ&url=https%3A%2F%2Fwww.ea.com%2Fes-mx%2Fgames%2Flibrary%2Fpc-download&usg=AOvVaw3NLRbfRE18gaUfXprWtgFE&opi=89978449"
      },
      {
        nombre: "Uplay (de Ubisoft)",
        descripcion: "Si eres fan de los juegos de Ubisoft, Uplay es la plataforma para comprar y jugar a sus títulos.",
        imagen: "https://www.mundodeportivo.com/alfabeta/hero/2020/07/Uplay-Plus-trial-1.jpg?width=768&aspect_ratio=16:9&format=nowebp",
        enlace: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjUp7jVrPuCAxUVKUQIHfJpBBYQFnoECBIQAQ&url=https%3A%2F%2Fubisoftconnect.com%2Fes-MX%2F&usg=AOvVaw190x_hUlKS54M8FyvFVFMm&opi=89978449"
      },
    ];

    return (
      <div className={`home ${isMenuOpen ? "menu-open" : ""}`}>
        <Menu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
        <div className="container">
          <div className="App">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="/">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">Mejores tiendas</li>
            </ol>
          </nav>
            <div className="card text-center mt-3 shadow">
              <div className="card-header bg-success text-white fs-6 fw-bold">
              {/* <br /> */}
              <h3> <strong>
              Mejores tiendas para adquirir nuevos juegos
                
                </strong> </h3>
              </div>
              {/* <h1> Tiendas </h1>
              <p>Página tienda</p> */}
            </div>
            <br />
            <div class="row row-cols-1 row-cols-md-3 g-4">
            {tiendas.map((tienda, index) => (
              <div className="col" key={index}>
                <div className="card h-100">
                  <img src={tienda.imagen} className="card-img-top" alt={`Imagen ${tienda.nombre}`} />
                  <div className="card-body">
                    <h5 className="card-title">{tienda.nombre}</h5>
                    <p className="card-text">{tienda.descripcion}</p>
                    <a href={tienda.enlace} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                      Visitar Tienda
                    </a>
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