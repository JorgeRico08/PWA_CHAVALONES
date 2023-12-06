const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyparser = require("body-parser");
const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyparser.urlencoded({ extended: true })); 
app.use(bodyparser.json()); 
app.use("/api", router);

// Conectar a la base de datos usando Mongoose
mongoose.connect('mongodb+srv://Jorge:Jorge01@cluster0.tbdkk.mongodb.net/DB_PWA_Juegos', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a la base de datos:'));
db.once('open', () => {
  console.log('Conexión a la base de datos exitosa');
});

// Definir el esquema
const juegoSchema = new mongoose.Schema({
    titulo: String,
    descripcion: String,
    imagen: String,
    horaPublicacion: Date,
    categoria: String,
  });
  
  // Crear el modelo
  const Juego = mongoose.model('Juego', juegoSchema);


router.get("/", async (req, res) => {
    try {
        const juegos = await Juego.find();

        res.send(juegos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener la lista de juegos' });
    }
});

router.post("/", async (req, res) => {
    try {

        let imagenUrl = req.body.imagen;

        // Verificar si se proporcionó una imagen, de lo contrario, asignar un URL predeterminado
        if (!imagenUrl) {
            imagenUrl = "https://blog.ida.cl/wp-content/uploads/sites/5/2020/05/ida-uxvideojuegos-blog-1024x735.png";  // Reemplaza "URL_POR_DEFECTO" con la URL que desees asignar
        }

        const nuevoJuego = new Juego({
            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
            imagen: imagenUrl,
            horaPublicacion: Date.now(),
            categoria: req.body.categoria,
          });
          
          const juegoGuardado = await nuevoJuego.save();
          res.send(juegoGuardado);
    } catch (error) {
        res.status(500).json({error: "Error al agregar el juego"});
    }
});


const Port = 3005;
app.listen(Port, () => console.log(`Server listening on ${Port}`));