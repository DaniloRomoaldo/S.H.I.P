import * as procedureService from './repository.js'

export const getProcedures = async (body) => {
    const {schema_name} = body;

    return procedureService.getProcedures(schema_name);
}

export const getProducerCode = async (body) => {
    const {schema_name, procedure_name} = body;

    return procedureService.getProcedureCode(schema_name, procedure_name);
}