console.clear();
import Professional from './professional.js';
import express from 'express';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

let profesional = null;

app.get("/profesional",
    function (req, res) {
        console.log('GET /profesional - recibida');
        let respuesta;
        if (profesional != null){
            respuesta = {error: false, codigo: 200, mensaje: 'Datos del profesional', resultado: profesional};
        } else {
            respuesta = {error: true, codigo: 200, mensaje: 'El profesional no existe', resultado: profesional};
        }
        res.send(respuesta);
    }
);


app.post("/profesional",
    function (req, res) {
        console.log('POST /profesional - recibida');
        let respuesta;
        if (profesional === null){            
            profesional = new Professional(
                req.body.name,
                req.body.age,
                req.body.genre,
                req.body.weight,
                req.body.height,
                req.body.hairColor,
                req.body.eyeColor,
                req.body.race,
                req.body.isRetired,
                req.body.nationality,
                req.body.oscarsNumbers,
                req.body.profession,

            );
            respuesta = {error: false, codigo: 200, mensaje: 'Profesional creado correctamente', resultado: profesional};
        } else {
            respuesta = {error: true, codigo: 200, mensaje: 'El profesional ya existe', resultado: profesional};
        }
        res.send(respuesta);
    }
);      

app.put("/profesional",
    function (req, res) {
         console.log('PUT /profesional - recibida')
         let respuesta;
         if (profesional != null){
             profesional.name = req.body.name;
             profesional.age = req.body.age;
             profesional.genre = req.body.genre;
             profesional.weight = req.body.weight;
             profesional.height = req.body.height;
             profesional.hairColor = req.body.hairColor;
             profesional.eyeColor = req.body.eyeColor;
             profesional.race = req.body.race;
             profesional.isRetired = req.body.isRetired;
             profesional.nationality = req.body.nationality;
             profesional.oscarsNumbers = req.body.oscarsNumbers;
             profesional.profession = req.body.profession;
             respuesta = {error: false, codigo: 200, mensaje: 'Profesional actualizado correctamente', resultado: profesional};
         } else {
             respuesta = {error: true, codigo: 200, mensaje: 'El profesional no existe', resultado: profesional};
         }
         res.send(respuesta);
 
    }
);

app.delete("/profesional",
    function (req, res) {
         console.log('PUT /profesional - recibida')
         let respuesta;
         if (profesional != null){
            profesional = null;
             respuesta = {error: false, codigo: 200, mensaje: 'Profesional borrado correctamente', resultado: profesional};
         } else {
             respuesta = {error: true, codigo: 200, mensaje: 'El profesional no existe', resultado: profesional};
         }
         res.send(respuesta);
     }
);

app.listen(3000);
console.log('Servidor escuchando peticiones en el puerto 3000');
