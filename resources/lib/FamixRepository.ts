import { FamixBaseElement } from './FamixBaseElement';
import { Class } from './FamixTypeScript/Class';
import { Namespace } from './FamixTypeScript/Namespace';

export class FamixRepository {
    private classes: Set<Class> = new Set<Class>();
    private elements: Set<FamixBaseElement> = new Set<FamixBaseElement>();

    private namespaces: Set<Namespace> = new Set<Namespace>();

    private counter = 0;
    private static instance: FamixRepository;

    public static readonly getInstance = (): FamixRepository => {
        if (!this.instance) {
            this.instance = new FamixRepository();
        }

        return this.instance;
    };

    public static readonly getFamixRepo = (): FamixRepository => this.getInstance();

    public static readonly clear = (): void => {
        this.instance = new FamixRepository();
    };

    public static readonly clearFamixRepo = (): void => this.clear();

    public readonly createOrGetFamixClass = (name: string, isInterface?: boolean, isAbstract?: boolean): Class => {
        let instance = this.getFamixClass(name);

        if (!instance) {
            instance = new Class(this);

            instance.name = name;
            instance.isStub = true;

            (instance as any).isInterface = isInterface;
            instance.isAbstract = isAbstract;
        }

        return instance;
    };

    public readonly addElement = (element: FamixBaseElement): void => {
        if (element instanceof Class) {
            this.classes.add(element);
        } else if (element instanceof Namespace) {
            this.namespaces.add(element);
        } else {
            this.elements.add(element);
        }

        element.id = ++this.counter;
    };

    public readonly getFamixClass = (name: string): Class | undefined =>
        Array.from(this.classes.values()).find((c) => c.name === name);

    public readonly getFamixElementById = (id: number): FamixBaseElement | undefined =>
        Array.from(this.elements.values()).find((e) => e.id === id);

    public readonly getFamixElementByFullyQualifiedName = (name: string): FamixBaseElement | undefined =>
        Array.from(this.elements.values())
            .filter(
                (e) =>
                    (e as any).constructor.name == 'Method' ||
                    (e as any).constructor.name == 'Function' ||
                    (e as any).constructor.name == 'Namespace'
            )
            .find((e) => (e as any).getFullyQualifiedName() === name);

    public readonly getFamixElementsByType = (type: string): Set<FamixBaseElement> =>
        new Set(Array.from(this.elements.values()).filter((e) => (e as any).constructor.name === type));

    public readonly getFamixFunction = (namespace: string, regex: string): FamixBaseElement | undefined =>
        Array.from(this.elements).find((e) => e instanceof Function && e.name.match(regex) && (e as any).namespace);

    public readonly getFamixNamespace = (name: string): Namespace | undefined =>
        Array.from(this.namespaces.values()).find((n) => n.name === name);

    public readonly toJSON = (): string => {
        let buffer = '[';

        for (const clazz of this.classes) {
            buffer = buffer + clazz.toJSON() + ',';
        }

        for (const element of this.elements) {
            buffer = buffer + element.toJSON() + ',';
        }

        buffer = buffer.substring(0, buffer.length - 1);
        return buffer + ']';
    };
}
