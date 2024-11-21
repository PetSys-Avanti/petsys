import { Router } from 'express';
import { PetController } from '../controllers/petController.js';

const routerPets = Router();

const petController = new PetController();

// Rota para buscar todos os pets
routerPets.get('/', petController.findPets);

//Rota para buscar um pet por ID
routerPets.get('/:id', petController.findPetById);

//Rota para buscar um pet por tamanho (filtro)
routerPets.get('/tamanho/:tamanho_pet', petController.findPetsBySize);

//Rota para buscar um pet por personalidade (filtro)
routerPets.get('/personalidade/:personalidade_pet', petController.findPetsByPersonality);

// Rota para adicionar um novo pet
routerPets.post('/', petController.addPet);

// Rota para atualizar um pet por ID
routerPets.put('/:id', petController.updatePet); 

// Rota para deletar um pet por ID
routerPets.delete('/:id', petController.deletePet);

export { routerPets };