/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseElement as FamixElement } from './BaseElement';
import { FamixBaseElement } from './FamixBaseElement';
import { createDynamicInstance, isInstanceOf } from './helpers';

export class FamixRepository {
    private classes: Set<FamixElement> = new Set<FamixElement>();
    private elements: Set<FamixBaseElement> = new Set<FamixBaseElement>();

    private counter = 1;
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

    public readonly createOrGetFamixClass = (name: string, isInterface?: boolean): FamixElement => {
        let instance = this.getFamixClass(name);

        if (!instance) {
            instance = createDynamicInstance<FamixElement>(this, 'BaseElement');

            (instance as any).setName(name.toLowerCase());
            (instance as any).setIsStub(true);
            (instance as any).setIsInterface(!!isInterface);
        }

        return instance;
    };

    public readonly getFamixClass = (name: string): FamixElement | undefined => {
        for (const clazz of this.classes) {
            if ((clazz as any).getName().toLowerCase() === name.toLowerCase()) {
                return clazz;
            }
        }

        return undefined;
    };

    public readonly getFamixElementById = (id: number): FamixBaseElement | undefined =>
        Array.from(this.elements.values()).find((element) => element.id == id);

    public readonly getFamixElementByFullyQualifiedName = (name: string): FamixBaseElement | undefined =>
        Array.from(this.elements.values())
            .filter(
                (element) =>
                    (element as any).constructor.name == 'Method' ||
                    (element as any).constructor.name == 'Function' ||
                    (element as any).constructor.name == 'Namespace'
            )
            .find((element) => (element as any).getFullyQualifiedName() == name);

    public readonly addElement = (element: FamixBaseElement): void => {
        if (isInstanceOf<FamixElement>(element, ['getJSON', 'addPropertiesToExporter'])) {
            this.classes.add(element);
        } else {
            this.elements.add(element);
        }

        element.id = ++this.counter;
    };

    public readonly getJSON = (): string => {
        let buffer = '[';

        for (const clazz of this.classes) {
            buffer += clazz.getJSON() + ',';
        }

        for (const element of this.elements) {
            buffer += element.getJSON() + ',';
        }

        buffer = buffer.substring(0, buffer.length - 1);
        return buffer + ']';
    };
}
