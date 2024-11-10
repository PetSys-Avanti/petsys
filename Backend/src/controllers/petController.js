import { PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient();

export class PetController {
    async findPets (request, response) {
        try {
            const pets = await prismaClient.pet.findMany();
            return response.status(200).json(pets);
        } catch (error) {
            return response.status(500).json({ error: error.message });
        }
    }

    async findPetById(request, response) {
        const { id } = request.params;
    
        try {
            const pet = await prismaClient.pet.findFirst({
                where: { pet_id: id }
            });
            return response.status(200).json(pet);
        } catch (error) {
            return response.status(500).json({ error: error.message });
        }
    }

    async addPet(request, response) {
        const { nome, especie_pet, data_nasc, descricao, status_pet, tamanho_pet, sexo_pet } = request.body;
        try {
            const pet = await prismaClient.pet.create({
                data: {
                    nome, especie_pet, data_nasc, descricao, status_pet, tamanho_pet, sexo_pet
                }
            });
            return response.status(201).json(pet);
        } catch (error){
            return response.status(500).json({ error: error.message });
        }
    }

    async updatePet(request, response) {
        const { id } = request.params;
        const { nome, especie_pet, data_nasc, descricao, status_pet, tamanho_pet, sexo_pet } = request.body;
    
        try {
            const pet = await prismaClient.pet.update({
                data: {
                    nome, especie_pet, data_nasc, descricao, status_pet, tamanho_pet, sexo_pet
                }, 
                where: { pet_id: id }
            });
            return response.status(200).json(pet);
        } catch (error) {
            return response.status(500).json({ error: error.message });
        }
    }

    async deletePet(request, response) {
        const { id } = request.params;
    
        try {
            await prismaClient.pet.delete({
                where: { pet_id: id }
            });
            return response.status(200).json({ message: 'Pet excluído com sucesso' });
        } catch (error) {
            return response.status(500).json({ error: error.message });
        }
    }

}