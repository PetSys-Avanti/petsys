import { Router } from 'express';
import { routerPets } from './routesPets.js';
import { routerAdotantes, routerLoginAdotantes } from './routesAdotantes.js';
import { routerAdocoes } from './routesAdocoes.js';

const router = Router();

router.use('/api/v1/pets', routerPets);
router.use('/api/v1/adotantes', routerAdotantes);
router.use('/api/v1/adocoes', routerAdocoes);
router.use('/api/v1/login', routerLoginAdotantes);

export { router };