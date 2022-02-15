import { inject, injectable } from 'inversify';
import { Logger } from 'winston';

@injectable()
export class Handler {
    constructor(@inject('Logger') private readonly logger: Logger) {}

    public readonly handleErrors = (): void => {
        this.handleExceptions();
        this.handleRejections();
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
}
