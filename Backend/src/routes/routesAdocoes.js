import { Router } from 'express';
import { AdocaoController } from '../controllers/adocoesController.js'; 

const routerAdocoes = Router();

const adocaoController = new AdocaoController();

// Rota para buscar todos as adoções
routerAdocoes.get('/', adocaoController.findAdocoes);


//Rota para buscar uma adoção por ID
routerAdocoes.get('/:id', adocaoController.findAdocaoById);


// Rota para adicionar uma nova adoção
routerAdocoes.post('/', adocaoController.addAdocao);


// Rota para atualizar uma adoção por ID
routerAdocoes.put('/:id', adocaoController.updateAdocao); 


// Rota para deletar uma adoção por ID
routerAdocoes.delete('/:id', adocaoController.deleteAdocao);

export { routerAdocoes };