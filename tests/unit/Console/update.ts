import fs from 'fs-extra';
import { Container, injectable } from 'inversify';
import 'reflect-metadata';
import { Logger } from 'winston';
import Update from '../../../app/Console/update';
import { Settings } from '../../../app/Utils/Settings';

@injectable()
class TestUpdateCommand extends Update {
    public static args = Update.args;
    public argv: string[];
}

let command: Update;
let container: Container;

const logger = {
    info: jest.fn((message: string) => void 0),
};

const settings = {
    getTyped: jest.fn((key: string) => ({
        destination: 'destination',
        interface: {
            name: '[typescript]-[meta]-[model]',
            path: 'path/to/interface',
        },
    })),
};

jest.mock('fs-extra', () => ({
    copy: jest.fn(async (...args) => void 0),
    outputFile: jest.fn(async (...args) => void 0),
    readJson: jest.fn(async (...args) => ({ target: 'target' })),
}));

describe('update command', () => {
    beforeAll(() => {
        container = new Container();

        container.bind<Logger>('Logger').toConstantValue(logger as any);
        container.bind<Settings>('Settings').toConstantValue(settings as any);
        container.bind('TestUpdateCommand').to(TestUpdateCommand);

        command = container.get<Update>('TestUpdateCommand');
    });

    afterAll(() => {
        jest.restoreAllMocks();
    });

    it('should not run update command without args', async () => {
        await expect(command.run).rejects.toThrowError(
            'Missing 1 required arg:\n' +
            'options  Which option to update\n' +
            'See more help with --help'
        );
    });

    it('should not run update command without valid args', async () => {
        command.argv = ['invalid'];

        await expect(command.run).rejects.toThrowError(
            'Expected invalid to be one of: interface, metamodel\n' +
            'See more help with --help'
        );
    });

    it('should not run update command with invalid flags', async () => {
        command.argv = ['interface', '--invalid'];

        await expect(command.run).rejects.toThrowError(
            'Unexpected argument: --invalid\n' +
            'See more help with --help'
        );
    });

    it('should run command to update metamodel from source', async () => {
        command.argv = ['metamodel', '--source', 'source'];
        await command.run();

        expect(fs.copy).toHaveBeenCalledWith('source', 'destination', { overwrite: true });
        expect(logger.info).toHaveBeenCalledWith(`Updated metamodel from source to destination`);
    });

    it('should run command to update the typescript interface from updated metamodel', async () => {
        command.argv = ['interface'];
        await command.run();

        expect(fs.outputFile).toHaveBeenCalled();
        expect(fs.readJson).toHaveBeenCalledWith('destination', { encoding: 'utf8' });
        expect(logger.info).toHaveBeenCalledWith(`Updated [typescript]-[meta]-[model] interface`);
    });
});
