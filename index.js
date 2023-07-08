// 1. crear un objeto express

//estamos creando un objeto express que representa la biblioteca express
const express = require('express');

// 2. Crear un objeto que represente a la aplicacion
//el objeto es instanciado por express

const app = express();
app.use(express.json());

//4. Definir los entry point de la API
//http://localhost:3001/sumar

app.get(
    '/sumar',

    //la funcion callback debe llevar dos parametros, require y response
    (req,res)=>{
        console.log("Alguien esta conectandose a la ruta sumar");
        //vamos a poner una respuesta en formato JSON
        res.json("Hola sumar");
    }
);

app.post(
    '/restar',
    (req,res)=>{
        console.log("Alguien esta conectandose a la ruta restar");
        //vamos a poner una respuesta en formato JSON
        const {numero_1,numero_2} = req.body;
        const resultado = numero_1-numero_2;

        res.json(resultado);
    }
);

app.post(
    '/api/dividir',
    (req,res)=>{
        let resultado;
        try {
            const {numero_1,numero_2}=req.body;
            resultado = numero_1/numero_2;
        } catch (error) {
            resultado = error;
        }    
        res.json(resultado);
    }
);




// 3. Crear un servicio para escuchar peticiones

app.listen(
    3001,
    ()=>{
        console.log("Servidor ejecutancose en el puerto 3001");
    }
);