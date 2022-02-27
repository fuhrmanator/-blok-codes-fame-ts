import { Command, command } from '@blok-codes/inversify-oclif-utils';
import { Interfaces } from '@oclif/core';
import { inject } from 'inversify';
import { Logger } from 'winston';

import { CodeGenerator } from '../Services/CodeGenerator';
import { Settings } from '../Utils/Settings';

@command('generate')
export default class Generate extends Command {
    @inject('CodeGenerator')
    private readonly generator!: CodeGenerator;

    @inject('Logger')
    private readonly logger!: Logger;

    @inject('Settings')
    private readonly settings!: Settings;

    static description = 'Generate the API';

    public static readonly args: Interfaces.ArgInput = [
        {
            description: 'What to generate',
            name: 'options',
            options: ['api'],
            required: true,
        },
    ];

    public readonly run = async (): Promise<void> => {
        const { args } = await this.parse(Generate);

        if (args.options === 'api') {
            this.generator.generate();
            this.logger.info(`Generated the API from the meta-model to ${this.settings.getTyped('pharo').target}`);
        }
    };
}
