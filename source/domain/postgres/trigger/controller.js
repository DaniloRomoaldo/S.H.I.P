import * as serviceTrigger from './service.js'

export const getTriggers = async (req, res) => {
    try {
        
        const triggers = await serviceTrigger.getTriggers(req.query)
        res.status(200).json(triggers)

    } catch (error) {
        res.status(400).json({error:error.message})
    }
}


export const getTriggerCode = async (req, res) => {
    try {
        
        const triggerCode = await serviceTrigger.getTriggerCode(req.query)
        res.status(200).json(triggerCode)

    } catch (error) {
        res.status(400).json({error:error.message})
    }
}