import * as functionRepository from './repository.js'

export const getFunctions = async (body) => {

    const {schema_name} = body;

    return functionRepository.getFunctions(schema_name);

}