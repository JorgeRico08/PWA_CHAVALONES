import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './routes/Home';
import TodosJuegos from './routes/TodosJuegos';
import CrearJuego from './routes/CrearJuego';
import MejoresTiendas from './routes/MejoresTiendas';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Error</h1>,
  },  
  {
    path: "/todos_juegos",
    element: <TodosJuegos />,
  },
  {
    path: "/agregar_juegos",
    element: <CrearJuego />,
  },
  {
    path: "/mejores_tiendas",
    element: <MejoresTiendas />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
