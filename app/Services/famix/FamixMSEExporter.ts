import { BaseElement } from './BaseElement';
import { isInstanceOf } from './helpers';

interface Element extends BaseElement {
    id?: number;
}

export class FamixMSEExporter {
    private element: Element;
    private buffer: string;

    constructor(clazz: string, element: Element) {
        this.element = element;
        this.buffer = `(${clazz}  (id: ${this.element.id})`;
    }

    public readonly addProperty = (name: string, value: unknown): void => {
        if (value === undefined || (value instanceof Set && value.size === 0)) {
            return;
        }

        if (value instanceof Set) {
            this.buffer += `\n    (${name} ${this.addPropertyFromSet(value)})`;
        } else if (this.isElement(value)) {
            this.buffer += `\n    (${name} (ref: ${value.id}))`;
        } else if (typeof value === 'string') {
            this.buffer += `\n    (${name} '${value}')`;
        } else {
            this.buffer += `\n    (${name} ${value})`;
        }
    };

    private addPropertyFromSet = (set: Set<unknown>): string => {
        let buffer = '';

        set.forEach((value) => {
            if (typeof value === 'string') {
                buffer += `'${value}'`;
            } else if (this.isElement(value)) {
                buffer += `(ref: ${value.id})`;
            } else {
                buffer += `${value}`;
            }
        });

        return buffer;
    };

    public readonly getMSE = (): string => this.buffer + ')\n';

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private readonly isElement = (value: any): value is Element =>
        isInstanceOf<Element>(value, ['getMSE', 'addPropertiesToExporter']);
}
