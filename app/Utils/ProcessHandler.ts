import { inject, injectable } from 'inversify';
import { Logger } from 'winston';

import { IConfig } from './Config';

@injectable()
export class ProcessHandler {
    constructor(
        @inject('Config') private readonly config: IConfig,
        @inject('Logger') private readonly logger: Logger
    ) {}

    public readonly handleErrors = (): void => {
        this.handleExceptions();
        this.handleRejections();
    };

    public readonly handleShutdown = (): void => {
        process.on('SIGINT', this.shutdown);
        process.on('SIGTERM', this.shutdown);
    };

    private readonly handleExceptions = (): void => {
        process.on('uncaughtException', (error: Error) => {
            this.logger.error(error.message, error);
            process.exit(1);
        });
    };

    private readonly handleRejections = (): void => {
        process.on('unhandledRejection', (error: Error) => {
            this.logger.error(error.message, error);
            process.exit(1);
        });
    };

    private readonly shutdown = async (): Promise<void> => {
        this.logger.info('🛑 Shutting down application...');
        const timeout = this.config.getTyped('shutdownWaitTimeout');

        await new Promise((resolve) => setTimeout(resolve, timeout))
            .then(() => process.exit(0))
            .catch((error) => {
                this.logger.error('🤦🏽💥 Error while shutting down application :', error);
                process.exit(1);
            });
    };
}
