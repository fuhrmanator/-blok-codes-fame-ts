import { Container, injectable } from 'inversify';
import 'reflect-metadata';
import { Logger } from 'winston';
import Generate from '../../../app/Console/generate';
import { CodeGenerator } from '../../../app/Services/CodeGenerator';
import { Settings } from '../../../app/Utils/Settings';

@injectable()
class TestGenerateCommand extends Generate {
    public static args = Generate.args;
    public argv: string[];
}

let command: Generate;
let container: Container;

const generator = {
    generate: jest.fn((message: string) => void 0),
};

const logger = {
    info: jest.fn((message: string) => void 0),
};

const settings = {
    getTyped: jest.fn((key: string) => ({ target: 'target' })),
};

describe('generate command', () => {
    beforeAll(() => {
        container = new Container();

        container.bind<CodeGenerator>('CodeGenerator').toConstantValue(generator as any);
        container.bind<Logger>('Logger').toConstantValue(logger as any);

        container.bind<Settings>('Settings').toConstantValue(settings as any);
        container.bind('TestGenerateCommand').to(TestGenerateCommand);

        command = container.get<Generate>('TestGenerateCommand');
    });

    it('should not run generate command without args', async () => {
        await expect(command.run).rejects.toThrowError(
            'Missing 1 required arg:\n' +
            'options  What to generate\n' +
            'See more help with --help'
        );
    });

    it('should not run generate command without valid args', async () => {
        command.argv = ['invalid'];

        await expect(command.run).rejects.toThrowError(
            'Expected invalid to be one of: api\n' +
            'See more help with --help'
        );
    });

    it('should run generate command', async () => {
        command.argv = ['api'];
        await command.run();

        expect(generator.generate).toHaveBeenCalled();
        expect(logger.info).toHaveBeenCalledWith('Generated the API from the meta-model to target');
    });
});
