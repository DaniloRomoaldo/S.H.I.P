import * as procedureService from './service.js'

export const getProcedures = async (req, res) => {

    try {
        
        const procedures = await procedureService.getProcedures(req.body);
        res.status(200).json(procedures);

    } catch (error) {

        res.status(400).json({"message":"Erro ao processar requisição", error: error.message})
    }
}

export const getProcedureCode = async (req, res) => {

    try {
        
        const producerCode = await procedureService.getProducerCode(req.body);
        res.status(200).json(producerCode);

    } catch (error) {
     
        res.status(400).json({"message":"Erro no processamento da requisição", error:error.message})
    }

}