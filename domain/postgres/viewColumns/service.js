import * as viewColumnsRepository from './repository.js'

export const getViewColumns = async (body) => {
    const {schema_name, table_name} = body;

    return viewColumnsRepository.getViewColumns(schema_name, table_name);

}