import { database } from "../../../kenx/knexfile.js";

export const getTables = async (schema_name, table_name) => {

    return database.withSchema('pg_catalog')
                .select(database.ref('attname').as('column_name'))
                .from('pg_attribute')
                .join('pg_class', 'pg_class.oid', 'pg_attribute.attrelid')
                .join('pg_namespace', 'pg_class.relnamespace', 'pg_namespace.oid')
                .where({nspname:schema_name})
                .andWhere('relname' , '=' , table_name)
                .andWhere('attnum', '>', 0)
                .andWhere('pg_class.relkind', '=', 'r')
} 


//console.log(getTables('public', 'table_1'))