import * as enumsRepository from './repository.js'

export const getEnums = async (body) => {
    const {schema_name} = body;

    return enumsRepository.getEnums(schema_name);
}

export const getEnumValues = async (body) => {
    const {schema_name, enum_name} = body;

    return enumsRepository.getEnumValues(schema_name, enum_name);
}