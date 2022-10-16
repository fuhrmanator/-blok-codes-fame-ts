import { FamixBaseElement } from './FamixBaseElement';

export class FamixJSONExporter {
    private element: FamixBaseElement;
    private readonly buffer: Record<string, unknown>;

    constructor(clazz: string, element: FamixBaseElement) {
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
        } else if (value instanceof FamixBaseElement) {
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
            } else if (value instanceof FamixBaseElement) {
                properties.push({ ref: value.id });
            } else {
                properties.push(value);
            }
        });

        return properties;
    };

    public readonly toJSON = (): string => JSON.stringify(this.buffer);
}
