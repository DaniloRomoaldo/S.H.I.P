import * as repositoryTrigger from './repository.js'

export const getTriggers = async (body) => {
    const {schema_name} = body;

    return repositoryTrigger.getTriggers(schema_name);
}

export const getTriggerCode = async (body) => {
    const {schema_name, table_name, trigger_name} = body;

    return repositoryTrigger.getTriggerCode(schema_name, table_name ,trigger_name )
}