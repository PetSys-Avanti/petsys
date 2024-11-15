import { PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient();

export class AdotanteController {
    async findAdotantes (request, response) {
        try {
            const adotantes = await prismaClient.adotantes.findMany();
            return response.status(200).json(adotantes);
        } catch (error) {
            return response.status(500).json({ error: error.message });
        }
    }

    async findAdotanteById(request, response) {
        const { id } = request.params;
    
        try {
            const adotante = await prismaClient.adotantes.findFirst({
                where: { adotante_id: id }
            });
            return response.status(200).json(adotante);
        } catch (error) {
            return response.status(500).json({ error: error.message });
        }
    }

    async addAdotante(request, response) {
        const { nome, email, telefone, cep, endereco, user_adotante } = request.body;
        try {
            const adotante = await prismaClient.adotantes.create({
                data: {
                    nome, email, telefone, cep, endereco, user_adotante
                }
            });
            return response.status(201).json(adotante);
        } catch (error){
            return response.status(500).json({ error: error.message });
        }
    }

    async updateAdotante(request, response) {
        const { id } = request.params;
        const { nome, email, telefone, cep, endereco, user_adotante } = request.body;
    
        try {
            const adotante = await prismaClient.adotantes.update({
                data: {
                    nome, email, telefone, cep, endereco, user_adotante
                }, 
                where: { adotante_id: id }
            });
            return response.status(200).json(adotante);
        } catch (error) {
            return response.status(500).json({ error: error.message });
        }
    }

    async deleteAdotante(request, response) {
        const { id } = request.params;
    
        try {
            await prismaClient.adotantes.delete({
                where: { adotante_id: id }
            });
            return response.status(200).json({ message: 'Adotante excluído com sucesso' });
        } catch (error) {
            return response.status(500).json({ error: error.message });
        }
    } 

}