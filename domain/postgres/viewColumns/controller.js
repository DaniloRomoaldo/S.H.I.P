import * as viewColumnsService from './service.js'

export const getViewColumns = async (req,res) => {

    try {
        
        const viewsColumns = await viewColumnsService.getViewColumns(req.body);
        res.status(200).json(viewsColumns);

    } catch (error) {
        res.status(400).json({"message":"Erro ao processar a requisição"})
    }
}