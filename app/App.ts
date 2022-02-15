import { Container } from 'inversify';
import { Logger } from 'winston';

import { Registry } from './Registry';
import { Handler } from './Utils/Handler';
import { IConfig } from './Utils/Config';

export class App {
    private container: Container;
    private errorHandler: Handler;

    private logger: Logger;
    private shutdownWaitTimeout: number;

    public readonly run = async (): Promise<void> => {
        await this.init();
        await this.start();

        process.on('SIGINT', this.shutdown);
        process.on('SIGTERM', this.shutdown);
    };

    private readonly init = async (): Promise<void> => {
        this.container = await Registry.getContainer();
        const config = this.container.get<IConfig>('Config');

        this.logger = this.container.get<Logger>('Logger');
        this.errorHandler = this.container.get<Handler>('ErrorHandler');

        this.shutdownWaitTimeout = config.getTyped('shutdownWaitTimeout');
    };

    private readonly start = async (): Promise<void> => {
        this.logger.info('🚀 Starting application...');

        // todo: start application - use DI and cli
        this.errorHandler.handleErrors();
    };

    private readonly shutdown = async (): Promise<void> => {
        this.logger.info('🛑 Shutting down application...');

        await new Promise((resolve) => setTimeout(resolve, this.shutdownWaitTimeout))
            .then(() => process.exit(0))
            .catch((error) => {
                this.logger.error('🤦🏽💥 Error while shutting down application:', error);
                process.exit(1);
            });
    };
}
