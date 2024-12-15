import * as serviceUserPermission from './service.js'

// GET permissões do usuario
export const findPermissionsByUser = async (req, res) => {
    try {
        const permissions = await serviceUserPermission.findByUser(req.body)
        res.status(200).json(permissions)
    } catch (error) {
        res.status(404).json({error:error.message})
    }
}

// GET todos os usuarios por permissão
export const findUsersByPermission = async (req, res) => {
    try {
        const users = await serviceUserPermission.findByPermissionName(req.body);
        res.status(200).json(users)
    } catch (error) {
        res.status(404).json({error:error.message})
    }
}

// GET criar permissão para usuario
export const createPermissionByUser = async (req, res) => {
    try {
        await serviceUserPermission.create(req.body)
        res.status(200).json({message:"Permissão concedida"})
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}