import { database } from "../../../kenx/knexfile.js";

export const getFunctions = async (schema_name) => {

    return database.withSchema('pg_catalog')
                    .select(database.ref('proname').as('function_name'))
                    .from('pg_proc')
                    .join('pg_namespace', 'pg_proc.pronamespace', 'pg_namespace.oid')
                    .where({nspname:schema_name})
                    .andWhere('prokind', '=', 'f')

}