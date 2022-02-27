import { RefEnum } from '../generated/TypescriptMetaModel';

export const isInstanceOf = <T>(instance: T, properties: string[]): instance is T =>
    properties.every((property) => property in instance);

export const isRefEnum = (ref: number | RefEnum): ref is RefEnum => !!RefEnum[ref as RefEnum];

export const toTsType = (type: string): string => {
    switch (type.toLowerCase()) {
        case 'boolean':
        case 'number':
        case 'string':
            return type.toLowerCase();
        case 'array':
            return 'Array<any>';
        case 'object':
        default:
            return type;
    }
};
