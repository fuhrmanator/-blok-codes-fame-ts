import * as path from 'path';
import { Project } from 'ts-morph';

import { kernel } from '../../app/Kernel';
import { Reference } from '../../app/Services/Reference';

const FM3_TRAIT = 'FM3.Trait';
const reference = kernel.get<Reference>('Reference');

const metamodels = reference.getMetaModels();
reference.addAll(metamodels);

const project = new Project();
project.addSourceFilesAtPaths(path.resolve(__dirname, `../../resources/generated/`) + '**/**/*{.d.ts,.ts}');

project.resolveSourceFileDependencies();
const files = project.getSourceFiles();

describe('accessors', () => {
    let classAccessors: { clazz: string; name: string; }[] = [];
    let traitAccessors: { clazz: string; name: string; }[] = [];

    beforeAll(() => {
        metamodels.forEach((metamodel) => {
            metamodel.classes.forEach((clazz) => {
                clazz.properties?.forEach((property) => {
                    if (clazz.FM3 !== FM3_TRAIT) {
                        classAccessors.push({ clazz: clazz.name, name: property.name });
                    } else {
                        traitAccessors.push({ clazz: clazz.name, name: property.name });
                    }
                });
            });
        });
    });

    it('should have all class accessors', () => {
        classAccessors.forEach(({ clazz, name }) => {
            const source = files.find((file) => file.getClass(clazz) && file.getClass(clazz).getGetAccessor(name));
            const declaration = source.getClass(clazz);

            expect(declaration.getGetAccessor(name)).toBeDefined();
        });
    });

    it('should have all traits accessors', () => {
        traitAccessors.forEach(({ clazz, name }) => {
            const source = files.find((file) => file.getClass(clazz) && file.getClass(clazz).getGetAccessor(name));
            const declaration = source.getClass(clazz);

            expect(declaration.getGetAccessor(name)).toBeDefined();
        });
    });
});
