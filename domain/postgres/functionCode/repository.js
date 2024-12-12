import { database } from "../../../kenx/knexfile.js";

export const getFunctionCode = async (schema_name, function_name) => {
    return database.withSchema('pg_catalog')
                    .select(database.raw('pg_get_functiondef(pg_proc.oid) AS function_structure'))
                    .from('pg_proc')
                    .join('pg_namespace', 'pg_proc.pronamespace', 'pg_namespace.oid')
                    .where({nspname:schema_name})
                    .andWhere({proname:function_name})
                    .andWhere('prokind', '=', 'f')
}


 //                   .select(database.ref('pg_get_functiondef(pg_proc.oid)').as('function_structure'))
