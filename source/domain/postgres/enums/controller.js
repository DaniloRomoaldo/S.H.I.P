import * as enumsService from './service.js'

export const getEnums = async (req, res) => {

    try {
        
        const enums = await enumsService.getEnums(req.body);
        res.status(200).json(enums)

    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

export const getEnumValues = async (req, res) => {

    try {
        
        const enumValues = await enumsService.getEnumValues(req.body)
        res.status(200).json(enumValues);

    } catch (error) {
        res.status(400).json({error:error.message})
    }
}