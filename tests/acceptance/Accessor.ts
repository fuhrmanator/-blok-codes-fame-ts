import { Project, SourceFile } from 'ts-morph';

import { kernel } from '../../app/Kernel';
import { TypescriptMetaModel } from '../../app/Services/generated/TypescriptMetaModel';
import { Reference } from '../../app/Services/Reference';
import { Settings } from '../../app/Utils/Settings';

describe('accessors', () => {
    const FM3_TRAIT = 'FM3.Trait';

    let files: SourceFile[];
    let metamodels: TypescriptMetaModel[];

    const project = kernel.get<Project>('Project');

    const reference = kernel.get<Reference>('Reference');
    const settings = kernel.get<Settings>('Settings');

    const classAccessors: { clazz: string; name: string; }[] = [];
    const traitAccessors: { clazz: string; name: string; }[] = [];

    beforeAll(() => {
        project.addSourceFilesAtPaths(settings.getTyped('metamodel').target + '**/**/*{.d.ts,.ts}');
        project.resolveSourceFileDependencies();

        files = project.getSourceFiles();
        metamodels = reference.getMetaModels();

        metamodels.forEach((metamodel) => {
            metamodel.classes.forEach((clazz) => {
                clazz.properties?.forEach((property) => {
                    const accessors = clazz.FM3 === FM3_TRAIT ? traitAccessors : classAccessors;
                    accessors.push({ clazz: clazz.name === 'Object' ? 'MockObject' : clazz.name, name: property.name });
                });
            });
        });
    });

    it('should have all class accessors', () => {
        classAccessors.forEach(({ clazz, name }) => {
            const source = files.find((file) => file.getClass(clazz) && file.getClass(clazz).getGetAccessor(name));
            expect(source).toBeDefined();
        });
    });

    it('should have all traits accessors', () => {
        traitAccessors.forEach(({ clazz, name }) => {
            const source = files.find((file) => file.getInterface(clazz) && file.getInterface(clazz).getProperty(name));
            expect(source).toBeDefined();
        });
    });
});
