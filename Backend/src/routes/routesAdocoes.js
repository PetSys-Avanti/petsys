import { Router } from 'express';
import { AdocaoController } from '../controllers/adocoesController.js'; 

const routerAdocoes = Router();

const adocaoController = new AdocaoController();

// Rota para buscar todos as adoções
routerAdocoes.get('/pets', adocaoController.findAdocoes);


//Rota para buscar uma adoção por ID
routerAdocoes.get('/pet/:id', adocaoController.findAdocaoById);


// Rota para adicionar uma nova adoção
routerAdocoes.post('/pet', adocaoController.addAdocao);


// Rota para atualizar uma adoção por ID
routerAdocoes.put('/pet/:id', adocaoController.updateAdocao); 


// Rota para deletar uma adoção por ID
routerAdocoes.delete('/pet/:id', adocaoController.deleteAdocao);

export { routerAdocoes };