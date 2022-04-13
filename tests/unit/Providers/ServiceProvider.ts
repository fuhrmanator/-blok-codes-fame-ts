import { Container } from 'inversify';
import 'reflect-metadata';
import { Project } from 'ts-morph';
import { ServiceProvider } from '../../../app/Providers/ServiceProvider';
import { CodeGenerator } from '../../../app/Services/CodeGenerator';
import { Reference } from '../../../app/Services/Reference';
import { Repository } from '../../../app/Services/Repository';
import { buildLogger } from '../../../app/Utils/Logger';
import { settings } from '../../../app/Utils/Settings';

describe('ServiceProvider', () => {
    let container: Container;

    beforeAll(() => {
        container = new Container();
        container.load(ServiceProvider.register());

        // bind utilities
        container.bind('Settings').toConstantValue(settings);
        container.bind('Logger').toConstantValue(buildLogger(settings));
    });

    it('should register all services', () => {
        expect(container.isBound('Project')).toBeTruthy();
        expect(container.isBound('Reference')).toBeTruthy();
        expect(container.isBound('Repository')).toBeTruthy();
        expect(container.isBound('CodeGenerator')).toBeTruthy();
    });

    it('should register all services with correct types', () => {
        expect(container.get('Project')).toBeInstanceOf(Project);
        expect(container.get('Reference')).toBeInstanceOf(Reference);
        expect(container.get('Repository')).toBeInstanceOf(Repository);
        expect(container.get('CodeGenerator')).toBeInstanceOf(CodeGenerator);
    });
});
