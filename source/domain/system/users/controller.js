import * as serviceUsers from './service.js';

// GET todos
export const findAll = async (req, res) => {

    try {
        const users = await serviceUsers.findAll()
        res.status(200).json(users)
    } catch (error) {
        res.status(400).json({error:error.message})
        
    }
}

// GET usuario por id
export const findOne = async (req, res) => {
    try {
        const user = await serviceUsers.findOne(req.params.id)
        res.status(200).json(user)
    } catch (error) {
        res.status(404).json({error:error.message})
        
    }
}

// GET usuario por email
export const findByEmail = async (req, res) => {
    try {
        const user = await serviceUsers.findByEmail(req.body);
        res.status(200).json(user)
    } catch (error) {
        res.status(404).json({error:error.message})
    }
}


// POST criar usuario
export const createUser = async (req, res) => {
    try {
        await serviceUsers.create(req.body)
        res.status(200).json({message:"Usuario registrado"})
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

// PUT & PATCH atualizar usuario
export const updateUser = async(req,res) => {
    try {
        await serviceUsers.updateUser(req.body);
        res.status(200).json({message:"Usuario Atualizado"})
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}


// DELETE usuario
export const deletarUsuario = async (req, res) => {
    try {
        await serviceUsers.deleteUser(req.body);
        res.status(200).json({message:"Usuario e permissões removidas"})
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}