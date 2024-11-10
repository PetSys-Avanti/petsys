import { Router } from 'express';
import { AdotanteController } from '../controllers/adotantesController.js';

const routerAdotantes = Router();

const adotanteController = new AdotanteController();

// Rota para buscar todos os adotantes
routerAdotantes.get('/adotantes', adotanteController.findAdotantes);


//Rota para buscar um adotante por ID
routerAdotantes.get('/adotante/:id', adotanteController.findAdotanteById);


// Rota para adicionar um novo adotante
routerAdotantes.post('/adotante', adotanteController.addAdotante);


// Rota para atualizar um adotante por ID
routerAdotantes.put('/adotante/:id', adotanteController.updateAdotante); 


// Rota para deletar um adotante por ID
routerAdotantes.delete('/adotante/:id', adotanteController.deleteAdotante);

export { routerAdotantes };