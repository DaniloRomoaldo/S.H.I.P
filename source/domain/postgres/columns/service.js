import * as columnsRepository from './repository.js'

export const getTables = async (body) => {
    const {schema_name, table_name} = body 

    return columnsRepository.getTables(schema_name, table_name);

}