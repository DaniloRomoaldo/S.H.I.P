import * as functionCodeRepository from './repository.js'

export const getFunctionCode = async (body) => {
    const {schema_name, function_name} = body;

    return functionCodeRepository.getFunctionCode(schema_name, function_name);
}