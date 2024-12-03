import * as tablesService from './repository.js'

export const getTables = async (body) => {
    const {schema_name} = body;

    return tablesService.getTables(schema_name);
}