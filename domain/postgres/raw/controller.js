import * as queryService from './service.js'

export const rawQuery = async (req,res) => {
    try {
        const queryResult = await queryService.rawQuery(req.body)

        res.status(200).json({sucess:true, data:queryResult});

    } catch (error) {
        res.status(400).json({sucess:false, error:error.message})
    }
}