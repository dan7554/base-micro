import express from 'express';
import swaggerUi from 'swagger-ui-dist';
import initRoutes from './routes/index.js';
import serverConfig from './config/server.json';

if ( process.argv.includes('--prod') ) {
    app.serverConfig = serverConfig['production'];
} else {
    app.serverConfig = serverConfig['default'];
}

const app = express();
initRoutes(app);

app.use(express.static(swaggerUi.absolutePath()));
app.listen(3110);

console.log('app listening ...', app.serverConfig);