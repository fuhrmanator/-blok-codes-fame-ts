import { ContainerModule, interfaces } from 'inversify';
import { Logger } from 'winston';

import { Provider } from './Provider';
import { buildLogger } from '../Utils/Logger';
import { config, IConfig } from '../Utils/Config';
import { Handler } from '../Utils/Handler';

export class UtilityProvider extends Provider {
    public static readonly register = (): ContainerModule =>
        new ContainerModule((bind) => {
            this.registerConfig(bind);
            this.registerLogger(bind);
            this.registerErrorHandler(bind);
        });

    private static readonly registerConfig = (bind: interfaces.Bind) => bind<IConfig>('Config').toConstantValue(config);

    private static readonly registerLogger = (bind: interfaces.Bind) =>
        bind<Logger>('Logger').toConstantValue(buildLogger(config));

    private static readonly registerErrorHandler = (bind: interfaces.Bind) =>
        bind<Handler>('ErrorHandler').to(Handler).inSingletonScope();
}
