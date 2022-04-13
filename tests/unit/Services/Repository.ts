import fs from 'fs-extra';
import 'reflect-metadata';
import { DuplicateEntryException } from '../../../app/Exceptions/DuplicateEntryException';
import { NotFoundException } from '../../../app/Exceptions/NotFoundException';
import { Class, Convert, Property, TypescriptMetaModel } from '../../../app/Services/generated/TypescriptMetaModel';
import { Repository } from '../../../app/Services/Repository';
import { settings } from '../../../app/Utils/Settings';

describe('Repository', () => {
    let repository: Repository;
    let metamodels: TypescriptMetaModel[];

    beforeAll(() => {
        metamodels = Convert.toTypescriptMetaModel(
            fs.readFileSync(settings.getTyped('metamodel').destination, {
                encoding: 'utf8',
            })
        );
    });

    beforeEach(() => {
        repository = new Repository(metamodels);
    });

    it('should get metamodels', () => {
        const found = repository.getMetaModels();

        expect(found).toBeDefined();
        expect(found.length).toEqual(metamodels.length);
    });

    it('should throw exception if entity is not stored', () => {
        expect(() => repository.get(123)).toThrowError('Unknown 123');
        expect(() => repository.get(123)).toThrowError(NotFoundException);
    });

    it('should add metamodel', () => {
        const mock: TypescriptMetaModel = {
            FM3: 'FM3.Class',
            id: 1,
            name: 'MockMetaModel',
            classes: [],
        };

        repository.add(mock);
        expect((repository.get(1) as any).name).toEqual('MockMetaModel');

        expect(() => repository.add(mock)).toThrowError(`Duplicate metamodel id: 1 as ${JSON.stringify(mock)}`);

        expect(() => repository.add(mock)).toThrowError(DuplicateEntryException);
    });

    it('should add metamodel classes', () => {
        const mock: TypescriptMetaModel = {
            FM3: 'FM3.Class',
            id: 1,
            name: 'Mock',
            classes: [
                {
                    FM3: 'FM3.Class' as any,
                    id: 999,
                    name: 'MockClass',
                    package: {
                        ref: 1,
                    },
                },
            ],
        };

        repository.add(mock);

        expect((repository.get(999) as any).name).toEqual('MockClass');
        mock.id = 2;

        expect(() => repository.add(mock)).toThrowError(
            `Duplicate class id: 999 as ${JSON.stringify(mock.classes[0])}`
        );

        expect(() => repository.add(mock)).toThrowError(DuplicateEntryException);
    });

    it('should add metamodel trait', () => {
        const mock: TypescriptMetaModel = {
            FM3: 'FM3.Trait',
            id: 1,
            name: 'Mock',
            classes: [
                {
                    FM3: 'FM3.Trait' as any,
                    id: 999,
                    name: 'MockClass',
                    package: {
                        ref: 1,
                    },
                },
            ],
        };

        repository.add(mock);
        expect((repository.get(999) as any).isTrait).toBeTruthy();
    });

    it('should substitute Object superclass', () => {
        const mock: TypescriptMetaModel = {
            FM3: 'FM3.Trait',
            id: 1,
            name: 'Mock',
            classes: [
                {
                    FM3: 'FM3.Class' as any,
                    id: 999,
                    name: 'Object',
                    package: {
                        ref: 1,
                    },
                },
            ],
        };

        repository.add(mock);
        expect((repository.get(999) as any).name).toEqual('BaseObject');
    });

    it('should add metamodel properties', () => {
        const property: Property = {
            FM3: 'FM3.Property' as any,
            id: 888,
            name: 'argumentsInParameterizedTypes',
            class: {
                ref: 2,
            },
            container: false,
            derived: true,
            multivalued: true,
            opposite: {
                ref: 4,
            },
            type: {
                ref: 5,
            },
        };

        const clazz: Class = {
            FM3: 'FM3.Class' as any,
            id: 999,
            name: 'MockClass',
            package: {
                ref: 1,
            },
            properties: [property],
        };

        const mock: TypescriptMetaModel = {
            FM3: 'FM3.Class',
            id: 1,
            name: 'Mock',
            classes: [clazz],
        };

        repository.add(mock);
        expect((repository.get(property.id) as any).name).toEqual(property.name);

        mock.id = 2;
        clazz.id = 2;

        expect(() => repository.add(mock)).toThrowError(`Duplicate property id: 888 as ${JSON.stringify(property)}`);

        expect(() => repository.add(mock)).toThrowError(DuplicateEntryException);
    });

    it('should add all metamodels', () => {
        repository.addAll(metamodels);

        metamodels.forEach((metamodel) => {
            expect(repository.get(metamodel.id)).toBeDefined();
        });
    });
});
