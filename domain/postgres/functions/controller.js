import * as functionService from './service.js'

export const getFunctions = async (req,res) => {

    try {

        const functionsName = await functionService.getFunctions(req.body);
        res.status(200).json(functionsName)

    } catch (error) {
        res.status(400).json({"message": "Erro ao processar requisição", error:error.message})
    }
}