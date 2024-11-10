import express from 'express';
import { routerPets } from './routes/routesPets.js';
import { routerAdotantes } from './routes/routesAdotantes.js';
import { routerAdocoes } from './routes/routesAdocoes.js';

const app = express();

app.use(express.json());
app.use(routerPets);
app.use(routerAdotantes);
app.use(routerAdocoes);

app.listen(3002, () => {
    console.log('Running server');
});