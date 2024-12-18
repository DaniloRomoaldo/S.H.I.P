import * as schemasService from "./service.js"


export const getSchemas = async (req, res) => {
    try {
        const schemas = await schemasService.getSchemas();
        res.status(200).json(schemas);

    } catch (error) {
        console.log(error);
        res.status(400).json({"message": "Erro no processamento da requisição"})
    }
}