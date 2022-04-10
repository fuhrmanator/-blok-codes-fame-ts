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

    public static readonly clear = (): void => {
        this.instance = new FamixRepository();
    };

    public readonly createOrGetFamixClass = (name: string, isInterface?: boolean): FamixElement => {
        let instance = this.getFamixClass(name);

        if (!instance) {
            instance = createDynamicInstance<FamixElement>(this, 'BaseElement');

            (instance as any).name = name.toLowerCase();
            (instance as any).isStub = true;
            (instance as any).isInterface = isInterface;
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

    public readonly addElement = (element: FamixBaseElement): void => {
        if (isInstanceOf<FamixElement>(element, ['getMSE', 'addPropertiesToExporter'])) {
            this.classes.add(element);
        } else {
            this.elements.add(element);
        }

        element.id = ++this.counter;
    };

    public readonly getMSE = (): string => {
        let mse = '(';

        for (const clazz of this.classes) {
            mse += clazz.getMSE();
        }

        for (const element of this.elements) {
            mse += element.getMSE();
        }

        return mse + ')';
    };
}
