import { injectable } from 'inversify';

import { DuplicateEntryException } from '../Exceptions/DuplicateEntryException';
import { NotFoundException } from '../Exceptions/NotFoundException';
import { Class, Package, Property, RefEnum, TypescriptMetaModel } from './generated/TypescriptMetaModel';

type Stored = Class | Property | Trait | TypescriptMetaModel;
type Trait = Package;

@injectable()
export class Repository {
    private readonly map: Map<number | RefEnum, Stored>;
    private readonly metamodels: TypescriptMetaModel[];

    constructor(metamodels: TypescriptMetaModel[]) {
        this.map = new Map();
        this.metamodels = metamodels;
    }

    public readonly addAll = (metamodels: TypescriptMetaModel[]): void => {
        metamodels?.forEach((metamodel) => this.add(metamodel));
    };

    public readonly add = (metamodel: TypescriptMetaModel): void => {
        if (this.map.has(metamodel.id)) {
            throw new DuplicateEntryException(`metamodel id: ${metamodel.id}`, this.map.get(metamodel.id));
        }

        this.map.set(metamodel.id, metamodel);
        metamodel.classes?.forEach((clazz) => this.addClass(clazz));
    };

    private readonly addClass = (clazz: Class): void => {
        if (this.map.has(clazz.id)) {
            throw new DuplicateEntryException(`class id: ${clazz.id}`, this.map.get(clazz.id));
        }

        if (clazz.FM3 === 'FM3.Trait') {
            (clazz as any).isTrait = true; // eslint-disable-line @typescript-eslint/no-explicit-any
        }

        this.map.set(clazz.id, clazz);
        clazz.properties?.forEach((property) => this.addProperty(property));
    };

    private readonly addProperty = (property: Property): void => {
        if (this.map.has(property.id)) {
            throw new DuplicateEntryException(`property id: ${property.id}`, this.map.get(property.id));
        }

        this.map.set(property.id, property);
    };

    public readonly get = (key: number | RefEnum): Stored => {
        if (!this.map.has(key)) {
            throw new NotFoundException(`Unknown ${key}`);
        }

        return this.map.get(key);
    };

    public readonly getMetaModels = (): TypescriptMetaModel[] => this.metamodels;
}
