import * as serviceColumns from './service.js'


export const getColumns = async (req, res) =>{

    try {
        const columns = await serviceColumns.getTables(req.body);
        res.status(200).json(columns);

    } catch (error) {
        res.status(400).json({"message":"Erro ao processar a requisição"});
    }
}