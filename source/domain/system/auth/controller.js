import * as serviceAuth from './service.js';

export const gerar_token = async (req, res) => {
    try {
        
        const token = await serviceAuth.gerar_token(req.body);

        if (!token) {
            res.status(400).json({message: "Usuario ou senha inválidos"})
        }

        res.status(200).json({"token":token});

    } catch (error) {
        res.status(500).json({error:error.message})
    }
}