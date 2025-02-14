import { api } from "../lib/axios";

export async function getSchemas() {
    try {
        const response = await api.get('schemas')
        return response.data
    } catch (error) {
        throw new Error(error.response.data.message);
    }
    
}

export async function getDatabaseElement(schemaName, elementName) {
    try {
        const response = await api.get(elementName,{
            params:{
                schema_name: schemaName
            }
        });

        return response.data;

    } catch (error) {
        throw new Error(error.response.data.message);
    }
    
}




