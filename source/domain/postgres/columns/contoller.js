import * as serviceColumns from './service.js'


export const getColumns = async (req, res) =>{

    try {
        const columns = await serviceColumns.getTables(req.query);
        res.status(200).json(columns);

    } catch (error) {
        res.status(400).json({error:error.message});
    }
}