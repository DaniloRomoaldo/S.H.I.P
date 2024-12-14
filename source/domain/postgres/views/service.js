import * as viewRepository from './repository.js'

export const getViews = async (body) => {
    const {schema_name} = body;

    return viewRepository.getViews(schema_name);
}