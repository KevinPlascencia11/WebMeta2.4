const express = require('express');
var fs = require('fs');
var https = require('https');
const bodyParser = require('body-parser');
const proyectosRoutes = require('./routes/proyectosRoutes');
const donatariosRoutes = require('./routes/donatariosRoutes');
const personaRoutes = require('./routes/personaRoutes');
const donadoresRoutes = require('./routes/donadoresRoutes');

const app = express();
const PORT = 443;

app.use(bodyParser.json());

//Rutas
app.use('/proyectos', proyectosRoutes);
app.use('/donatarios', donatariosRoutes);
app.use('/personas', personaRoutes);
app.use('/donadores', donadoresRoutes);

https.createServer({
  cert: fs.readFileSync('cert.pem'),
  key: fs.readFileSync('key.pem')
}, app).listen(PORT, function(){
  console.log(`Servidor https escuchando en el puerto ${PORT}`);
});


