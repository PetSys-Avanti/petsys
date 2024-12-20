import { Router } from 'express';
import { AdotanteController } from '../controllers/adotantesController.js';
import { LoginController } from '../controllers/loginController.js';
import { checkAuthentication, checkPermission } from '../auth/authMiddleware.js';

const routerAdotantes = Router();
const routerLoginAdotantes = Router();

const adotanteController = new AdotanteController();
const loginController = new LoginController();

// Rota para buscar todos os adotantes
routerAdotantes.get('/', checkAuthentication, checkPermission(['administrador']), adotanteController.findAdotantes);


//Rota para buscar um adotante por ID
routerAdotantes.get('/:id', checkAuthentication, checkPermission(['administrador', 'usuario']), adotanteController.findAdotanteById);


// Rota para adicionar um novo adotante
routerAdotantes.post('/', adotanteController.addAdotante);


// Rota para atualizar um adotante por ID
routerAdotantes.put('/:id', checkAuthentication, checkPermission(['administrador', 'usuario']), adotanteController.updateAdotante); 

// Rota para deletar um adotante por ID
routerAdotantes.delete('/:id', checkAuthentication, adotanteController.deleteAdotante);

// Rota para login do adotante
routerLoginAdotantes.post('/', loginController.login);

export { routerAdotantes, routerLoginAdotantes };