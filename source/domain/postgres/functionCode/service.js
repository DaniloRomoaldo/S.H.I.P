import * as functionCodeRepository from './repository.js'

export const getFunctionCode = async (query) => {
    const {schema_name, function_name} = query;

    return functionCodeRepository.getFunctionCode(schema_name, function_name);
}