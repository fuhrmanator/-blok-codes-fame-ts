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
            return; // fixme: what to do when class already exists?
            throw new DuplicateEntryException(`class id: ${clazz.id}`, this.map.get(clazz.id));
        }

        this.map.set(clazz.id, clazz);

        clazz.properties?.forEach((property) => this.addProperty(property));
        clazz.traits?.forEach((trait) => this.addTrait(trait));
    };

    private readonly addProperty = (property: Property): void => {
        if (this.map.has(property.id)) {
            throw new DuplicateEntryException(`property id: ${property.id}`, this.map.get(property.id));
        }

        this.map.set(property.id, property);
    };

    private readonly addTrait = (trait: Trait): void => {
        if (this.map.has(trait.ref)) {
            return; // fixme: what to do when trait already exists?
            throw new DuplicateEntryException(`trait ref: ${trait.ref}`, this.map.get(trait.ref));
        }

        this.map.set(trait.ref, trait);
    };

    public readonly get = (key: number | RefEnum): Stored => {
        if (!this.map.has(key)) {
            throw new NotFoundException(`Unknown ${key}`);
        }

        return this.map.get(key);
    };

    public readonly getMetaModels = (): TypescriptMetaModel[] => this.metamodels;
}
