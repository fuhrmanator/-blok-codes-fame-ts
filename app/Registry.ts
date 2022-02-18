import { Container } from 'inversify';

import { Provider } from './Providers/Provider';
import { UtilityProvider } from './Providers/UtilityProvider';

export class Registry {
    private static container: Container;

    private static readonly providers: typeof Provider[] = [UtilityProvider];

    private static readonly registerProviders = (): void => {
        Registry.container.load(...this.providers.map((provider) => provider.register()));
    };

    public static readonly getContainer = (): Container => {
        if (!Registry.container) {
            Registry.container = new Container();
            Registry.registerProviders();
        }

        return Registry.container;
    };
}
