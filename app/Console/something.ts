import { command, Command } from '@blok-codes/inversify-oclif-utils';
import { Flags, Interfaces } from '@oclif/core';
import { inject } from 'inversify';
import { Logger } from 'winston';

import { Settings } from '../Utils/Settings';

@command('something')
export default class Something extends Command {
    @inject('Settings')
    private readonly settings!: Settings;

    @inject('Logger')
    private readonly logger!: Logger;

    static description = 'Say hello';

    public static readonly flags: Interfaces.FlagInput<Record<string, unknown>> = {
        from: Flags.string({
            char: 'f',
            description: 'Whom is saying hello',
            required: true,
        }),
    };

    public static readonly args: Interfaces.ArgInput = [
        {
            description: 'Person to say hello to',
            name: 'person',
            required: true,
        },
    ];

    public readonly run = async (): Promise<void> => {
        const { args, flags } = await this.parse(Something);

        this.logger.info(
            `hello ${args.person} from ${flags.from}! (./src/commands/hello/index.ts) ${
                this.settings.getTyped('app').name
            }`
        );
    };
}
