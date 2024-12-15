import * as servicePermission from './service.js'

// GET todos
export const findAll = async (req, res) => {
    try {
        const permissions = await servicePermission.findAll()
        res.status(200).json(permissions)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}


// GET por id
export const findById = async (req, res) => {
    try {
        const permission = await servicePermission.findById(req.params.id);
        res.status(200).json(permission);
    } catch (error) {
        res.status(404).json({error:error.message})
    }
}

// GET por nome
export const findByName = async (req, res) =>{
    try {
        const permission = await servicePermission.findByName(req.body);
        res.status(200).json(permission)
    } catch (error) {
        res.status(404).json({error:error.message})
    }
}

// POST criar permissão
export const createPermission = async (req, res) => {
    try {
        await servicePermission.create(req.body);
        res.status(200).json({message:"Permissão criada"})
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

// PATCH & PUT atualizar permissão
export const updatePermission = async (req, res) => {
    try {
        await servicePermission.update(req.body);
        res.status(200).json({message:"Permissão atualizada"})
    } catch (error) {
        res.status(404).json({error:error.message});
    }
}


// DELETE permissão
export const deletePermission = async (req, res) => {
    try {
        await servicePermission.deletePermission(req.body)
        res.status(200).json({message:"Permissão deletada"})
    } catch (error) {
        res.status(404).json({error:error.message})
    }
}