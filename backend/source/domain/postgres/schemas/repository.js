import { database } from "../../../kenx/knexfile.js"

export const getSchemas = async () => {


   return database.withSchema('information_schema')
                .from('schemata')
                .select(database.ref('schema_name').as('schema'))
                .whereNotIn('schema_name', ['information_schema', 'pg_catalog', 'pg_toast'])
}