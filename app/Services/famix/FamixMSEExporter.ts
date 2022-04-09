import { BaseElement } from './BaseElement';
import { isInstanceOf } from './helpers';

interface FamixElement extends BaseElement {
    id?: number;
}

export class FamixMSEExporter {
    private element: FamixElement;
    private buffer: string;

    constructor(clazz: string, element: FamixElement) {
        this.element = element;
        this.buffer = `(${clazz}  (id: ${this.element.id})`;
    }

    public readonly addProperty = (name: string, value: unknown): void => {
        if (value === undefined || (value instanceof Set && value.size === 0)) {
            return;
        }

        if (value instanceof Set) {
            this.buffer += `\n    (${name} ${this.addPropertyFromSet(value)})`;
        } else if (this.isFamixElement(value)) {
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
            } else if (this.isFamixElement(value)) {
                buffer += `(ref: ${value.id})`;
            } else {
                buffer += `${value}`;
            }
        });

        return buffer;
    };

    public readonly getMSE = (): string => this.buffer + ')\n';

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private readonly isFamixElement = (value: any): value is FamixElement =>
        isInstanceOf<FamixElement>(value, ['getMSE', 'addPropertiesToExporter']);
}
