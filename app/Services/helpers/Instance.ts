/* eslint-disable @typescript-eslint/no-explicit-any */
import { NotFoundException } from '../../Exceptions/NotFoundException';

type Context<U = any> = {
    [key: string]: U;
};

type ReferencedClass<U = any> = {
    new (...args: any[]): U;
};

export const createDynamicInstance = <T>(context: Context, name: string, ...args: any[]): T => {
    if (!context[name]) {
        throw new NotFoundException(`Unknown class '${name}'`);
    }

    return instantiate(context[name], args);
};

const instantiate = <T>(clazz: ReferencedClass, args?: any[]): T => {
    const instance = Object.create(clazz.prototype);

    try {
        // eslint-disable-next-line prefer-spread
        instance.constructor.apply(instance, args);
    } catch (err) {
        if (/Class constructor/.test(err.toString())) {
            return new (class extends clazz {})(args) as T;
        }
    }

    return instance as T;
};
