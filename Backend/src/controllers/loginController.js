import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const prismaClient = new PrismaClient();

export class LoginController {

    async login(request, response) {
        const { email, senha } = request.body;

        try {
            const adotante = await prismaClient.adotantes.findUnique({
                where: { email }
            });

            if(!adotante) {
                return response.status(404).json({error: "Adotante não encontrado"});
            }

            const senhaValida = bcrypt.compareSync(senha, adotante.senha);

            if(!senhaValida) {
                return response.status(401).json({error: "Credenciais inválidas"});
            }

            const payload = { id: adotante.adotante_id, nome: adotante.nome, user: adotante.user_adotante };
            const token = jwt.sign(payload, process.env.SECRET_JWT, {expiresIn: '2h'});
            return response.status(200).json({data: payload, token: token});

        } catch(error) {
            return response.status(500).json({error: error.message});
        }
    }
}