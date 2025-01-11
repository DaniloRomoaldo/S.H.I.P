import * as functionCodeService from './service.js'

export const getFunctionCode = async (req,res) => {

    try {
        
        const functionCode = await functionCodeService.getFunctionCode(req.query)
        res.status(200).json(functionCode);

    } catch (error) {
        res.status(400).json({"message":"Erro de processamento", error:error.message})
    }
}