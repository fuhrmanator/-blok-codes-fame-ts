import { Container } from 'inversify';
import { Logger } from 'winston';

import { Registry } from './Registry';
import { ProcessHandler } from './Utils/ProcessHandler';

export class App {
    private container: Container;
    private handler: ProcessHandler;

    private logger: Logger;

    public readonly run = async (): Promise<void> => {
        await this.init();
        await this.start();
    };

    private readonly init = async (): Promise<void> => {
        this.container = await Registry.getContainer();

        this.logger = this.container.get<Logger>('Logger');
        this.handler = this.container.get<ProcessHandler>('ErrorHandler');
    };

    private readonly start = async (): Promise<void> => {
        this.logger.info('🚀 Starting application...');

        this.handler.handleErrors();
        this.handler.handleShutdown();

        // todo: start application - use DI and cli
    };
}
