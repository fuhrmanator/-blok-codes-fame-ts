import { RefEnum } from '../generated/TypescriptMetaModel';

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

export const isTypeOf = <T>(instance: T): instance is T =>
    Object.keys(instance).every((property) => property in instance);
