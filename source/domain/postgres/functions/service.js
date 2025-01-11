import * as functionRepository from './repository.js'

export const getFunctions = async (query) => {

    const {schema_name} = query;

    return functionRepository.getFunctions(schema_name);

}