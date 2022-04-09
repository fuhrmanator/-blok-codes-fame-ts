/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseElement } from './BaseElement';
import { FamixBaseElement } from './FamixBaseElement';
import { createDynamicInstance, isInstanceOf } from './helpers';

export class FamixRepository {
    private classes: Set<BaseElement> = new Set<BaseElement>();
    private elements: Set<FamixBaseElement> = new Set<FamixBaseElement>();

    private counter = 1;
    private static instance: FamixRepository;

    public static readonly getInstance = (): FamixRepository => {
        if (!FamixRepository.instance) {
            FamixRepository.instance = new FamixRepository();
        }

        return FamixRepository.instance;
    };

    public static readonly clear = (): void => {
        this.instance = new FamixRepository();
    };

    // TODO: what's the implication for Traits?
    public readonly createOrGetFamixClass = (name: string, isInterface?: boolean): BaseElement => {
        let instance = this.getFamixClass(name);

        if (!instance) {
            instance = createDynamicInstance<BaseElement>(this, 'BaseElement');

            // TODO: why do we need this?
            (instance as any).name = name.toLowerCase();
            (instance as any).isStub = true;
            (instance as any).isInterface = isInterface;
        }

        return instance;
    };

    public readonly getFamixClass = (name: string): BaseElement | undefined => {
        for (const clazz of this.classes) {
            if ((clazz as any).getName().toLowerCase() === name.toLowerCase()) {
                return clazz;
            }
        }

        return undefined;
    };

    public readonly addElement = (element: FamixBaseElement): void => {
        if (isInstanceOf<BaseElement>(element, ['getMSE', 'addPropertiesToExporter'])) {
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
