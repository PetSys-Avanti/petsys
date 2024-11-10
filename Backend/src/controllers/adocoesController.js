import { PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient();

export class AdocaoController {
    async findAdocoes (request, response) {
        try {
            const adocoes = await prismaClient.adocoes.findMany();
            return response.status(200).json(adocoes);
        } catch (error) {
            return response.status(500).json({ error: error.message });
        }
    }

    async findAdocaoById(request, response) {
        const { id } = request.params;
    
        try {
            const adocao = await prismaClient.adocoes.findFirst({
                where: { adocoes_id: id }
            });
            return response.status(200).json(adocao);
        } catch (error) {
            return response.status(500).json({ error: error.message });
        }
    }

    async addAdocao(request, response) {
        const { id_pet, id_adotante } = request.body;
        try {
            const adocao = await prismaClient.adocoes.create({
                data: {
                    id_pet, id_adotante
                }
            });
            return response.status(201).json(adocao);
        } catch (error){
            return response.status(500).json({ error: error.message });
        }
    }

    async updateAdocao(request, response) {
        const { id } = request.params;
        const { id_pet, id_adotante } = request.body;
    
        try {
            const adotante = await prismaClient.adocoes.update({
                data: {
                    id_pet, id_adotante
                }, 
                where: { adocoes_id: id }
            });
            return response.status(200).json(adotante);
        } catch (error) {
            return response.status(500).json({ error: error.message });
        }
    }

    async deleteAdocao(request, response) {
        const { id } = request.params;
    
        try {
            await prismaClient.adocoes.delete({
                where: { adocoes_id: id }
            });
            return response.status(200).json({ message: 'Adoção excluída com sucesso' });
        } catch (error) {
            return response.status(500).json({ error: error.message });
        }
    } 

}