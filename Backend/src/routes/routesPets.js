import { Router } from 'express';
import { PetController } from '../controllers/petController.js';

const routerPets = Router();

const petController = new PetController();

// Rota para buscar todos os pets
routerPets.get('/pets', petController.findPets);


//Rota para buscar um pet por ID
routerPets.get('/pet/:id', petController.findPetById);


// Rota para adicionar um novo pet
routerPets.post('/pet', petController.addPet);


// Rota para atualizar um pet por ID
routerPets.put('/pet/:id', petController.updatePet); 


// Rota para deletar um pet por ID
routerPets.delete('/pet/:id', petController.deletePet);

export { routerPets };