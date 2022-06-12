import { BaseElement } from './BaseElement';
import { isInstanceOf } from './helpers';

interface FamixElement extends BaseElement {
    id?: number;
}

export class FamixJSONExporter {
    private element: FamixElement;
    private readonly buffer: Record<string, unknown>;

    constructor(clazz: string, element: FamixElement) {
        this.element = element;

        this.buffer = {
            FM3: clazz,
            id: this.element.id,
        };
    }

    public readonly addProperty = (name: string, value: unknown): void => {
        if (value === undefined || (value instanceof Set && value.size === 0)) {
            return;
        }

        if (value instanceof Set) {
            this.buffer[name] = this.addPropertiesFromSet(value);
        } else if (this.isFamixElement(value)) {
            this.buffer[name] = { ref: value.id };
        } else if (typeof value === 'string') {
            this.buffer[name] = value;
        } else {
            this.buffer[name] = value;
        }
    };

    private readonly addPropertiesFromSet = (set: Set<unknown>): unknown[] => {
        const properties: unknown[] = [];

        set.forEach((value) => {
            if (typeof value === 'string') {
                properties.push(value);
            } else if (this.isFamixElement(value)) {
                properties.push({ ref: value.id });
            } else {
                properties.push(value);
            }
        });

        return properties;
    };

    public readonly toJSON = (): string => JSON.stringify(this.buffer);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private readonly isFamixElement = (value: any): value is FamixElement =>
        isInstanceOf<FamixElement>(value, ['toJSON', 'addPropertiesToExporter']);
}
