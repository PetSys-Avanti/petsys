import jwt from "jsonwebtoken";

export function checkAuthentication(request, response, next) {
    const { authorization } = request.headers;

    if(!authorization) {
        return response.status(401).json({message: "Token ausente"});
    }

    const token = authorization.replace('Bearer', '').trim();

    try {
        const { id } = jwt.verify(token, process.env.SECRE_JWT);
        if(!id) {
            return response.status(401).json("Não autorizado");
        }
        next();
    } catch {
        return response.status(500).json({error: "Token inválido"});
    }
}

export function checkPermission(allowedProfiles) {
    
    return (request, response, next) => { 
        const { authorization } = request.headers;

        if(!authorization) {
            return response.status(401).json({message: "Token ausente"});
        }
    
        const token = authorization.replace('Bearer', '').trim();
    
        try {
            const { adotante } = jwt.verify(token, process.env.SECRE_JWT);
            if(!allowedProfiles.includes(adotante)) {
                return response.status(403).json("Não autorizado");
            }
            next();
        } catch {
            return response.status(500).json({error: "Token inválido"});
        }
    }
    
}