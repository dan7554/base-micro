import express from 'express';
import initRoutes from './routes/index.js';
import serverConfig from './config/server';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';

const app = express();

if ( process.argv.includes('--prod') ) {
    app.serverConfig = serverConfig['production'];
} else {
    app.serverConfig = serverConfig['default'];
}

initRoutes(app);

var options = {
    explorer : true
  };
   
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));
app.listen(3110);

console.log('app listening ...', app.serverConfig);