import { PrismaClient } from '@prisma/client';
import bcrypt from "bcryptjs";

const prismaClient = new PrismaClient();

export class AdotanteController {
    async findAdotantes(request, response) {
        try {
            const adotantes = await prismaClient.adotantes.findMany({
                select: {
                    adotante_id: true,
                    nome: true,
                    email: true,
                    telefone: true,
                    cep: true,
                    endereco: true,
                    senha: false,
                    user_adotante: true
                }
            });
            return response.status(200).json(adotantes);
        } catch (error) {
            return response.status(500).json({ error: error.message });
        }
    }
 
    async findAdotanteById(request, response) {
        const { id } = request.params;

        try {
            const adotante = await prismaClient.adotantes.findFirst({
                where: { adotante_id: id },
                select: {
                    adotante_id: true,
                    nome: true,
                    email: true,
                    telefone: true,
                    cep: true,
                    endereco: true,
                    senha: false,
                    user_adotante: true
                }
            });
            return response.status(200).json(adotante);
        } catch (error) {
            return response.status(500).json({ error: error.message });
        }
    }

    async addAdotante(request, response) {
        const { nome, email, telefone, cep, endereco, senha, user_adotante } = request.body;

        try {
            const senhaHash = bcrypt.hashSync(senha, 10);
            const adotante = await prismaClient.adotantes.create({
                data: {
                    nome, email, telefone, cep, endereco, senha: senhaHash, user_adotante
                },
                select: {
                    adotante_id: true,
                    nome: true,
                    email: true,
                    telefone: true,
                    cep: true,
                    endereco: true,
                    senha: false,
                    user_adotante: false
                }
            });
            return response.status(201).json(adotante);
        } catch (error) {
            return response.status(500).json({ error: error.message });
        }
    }

    async updateAdotante(request, response) {
        const { id } = request.params;
        const { nome, email, telefone, cep, endereco, senha, user_adotante } = request.body; 
        const adotanteId = request.adotante_id; 

        try {
            if(adotanteId !== id) {
                return response.status(403).json({error: "Você não tem permissão para atualizar este adotante!"});
            }

            const adotante = await prismaClient.adotantes.update({
                data: {
                    nome, email, telefone, cep, endereco, senha, user_adotante
                },
                where: { adotante_id: id },
                select: {
                    adotante_id: true,
                    nome: true,
                    email: true,
                    telefone: true,
                    cep: true,
                    endereco: true,
                    senha: false,
                    user_adotante: true
                }
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