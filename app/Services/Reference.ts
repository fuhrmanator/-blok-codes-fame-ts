import { inject, injectable } from 'inversify';
import path from 'path';

import { NotFoundException } from '../Exceptions/NotFoundException';
import { Settings } from '../Utils/Settings';
import { Class, Package as Trait, Property, RefEnum, TypescriptMetaModel } from './generated/TypescriptMetaModel';
import { Repository } from './Repository';

export type ReferencedEntity = Class | Property | Trait | TypescriptMetaModel;

@injectable()
export class Reference {
    @inject('Repository')
    private readonly repository!: Repository;

    @inject('Settings')
    private readonly settings!: Settings;

    public readonly getEntity = (ref: number | RefEnum): ReferencedEntity => this.repository.get(ref);

    public readonly getEntityName = (ref: number | RefEnum): string => {
        const entity = this.getEntity(ref);

        if (!('name' in entity)) {
            throw new NotFoundException(`Property 'name' not found in entity`);
        }

        return entity.name;
    };

    public readonly getEntityClassPath = (ref: number | RefEnum): string =>
        path.resolve(this.settings.getTyped('metamodel').target, this.getEntityClassBaseName(ref));

    public readonly getEntityClassBaseName = (ref: number | RefEnum): string => {
        const entity = this.getEntity(ref);

        if (!('package' in entity)) {
            throw new NotFoundException(`Property 'package' not found in entity`);
        }

        return `${this.getEntityName(entity.package.ref)}/${entity.name}`;
    };

    public readonly getMetaModels = (): TypescriptMetaModel[] => this.repository.getMetaModels();

    public readonly addAll = (metamodels: TypescriptMetaModel[]): void => {
        this.repository.addAll(metamodels);
    };
}
