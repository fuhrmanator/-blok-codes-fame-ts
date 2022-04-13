import fs from 'fs-extra';
import { ContainerModule, decorate, injectable, interfaces } from 'inversify';
import { Project } from 'ts-morph';

import { CodeGenerator } from '../Services/CodeGenerator';
import { Convert } from '../Services/generated/TypescriptMetaModel';
import { Reference } from '../Services/Reference';
import { Repository } from '../Services/Repository';
import { settings } from '../Utils/Settings';
import { Provider } from './Provider';

decorate(injectable(), Project);

export class ServiceProvider extends Provider {
    public static readonly register = (): ContainerModule =>
        new ContainerModule((bind) => {
            this.registerProject(bind);
            this.registerRepository(bind);
            this.registerReference(bind);
            this.registerCodeGenerator(bind);
        });

    private static readonly registerProject = (bind: interfaces.Bind) => {
        const project = new Project({
            skipAddingFilesFromTsConfig: true,
            tsConfigFilePath: settings.getTyped('tsConfigFilePath'),
        });

        bind<Project>('Project').toConstantValue(project);
    };

    private static readonly registerRepository = (bind: interfaces.Bind) => {
        const sample = fs.readFileSync(settings.getTyped('metamodel').destination, {
            encoding: 'utf8',
        });

        const repository = new Repository(Convert.toTypescriptMetaModel(sample));
        bind<Repository>('Repository').toConstantValue(repository);
    };

    private static readonly registerReference = (bind: interfaces.Bind) =>
        bind<Reference>('Reference').to(Reference).inSingletonScope();

    private static readonly registerCodeGenerator = (bind: interfaces.Bind) =>
        bind<CodeGenerator>('CodeGenerator').to(CodeGenerator).inSingletonScope();
}
