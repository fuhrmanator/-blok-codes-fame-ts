import { Container } from 'inversify';
import { Provider } from './Providers/Provider';
import { UtilityProvider } from './Providers/UtilityProvider';

export class Registry {
    private static container: Container;

    private static providers: Record<string, typeof Provider[]> = {
        async: [],
        sync: [UtilityProvider],
    };

    private static readonly registerProviders = async (): Promise<void> => {
        Registry.container.load(...this.providers.sync.map((provider) => provider.register()));
        await Registry.container.loadAsync(...this.providers.async.map((provider) => provider.registerAsync()));
    };

    public static readonly getContainer = async (): Promise<Container> => {
        if (!Registry.container) {
            Registry.container = new Container();
            await Registry.registerProviders();
        }

        return Registry.container;
    };
}
