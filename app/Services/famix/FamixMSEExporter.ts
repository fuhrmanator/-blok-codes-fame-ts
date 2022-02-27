import { FamixBaseElement } from './FamixBaseElement';

export class FamixMSEExporter {
    private element: FamixBaseElement;
    private buffer: string;

    constructor(clazz: string, element: FamixBaseElement) {
        this.element = element;
        this.buffer = `(${clazz}  (id: ${this.element.id})`;
    }

    public readonly addProperty = (name: string, value: unknown): void => {
        if (value === undefined || (value instanceof Set && value.size === 0)) {
            return;
        }

        if (value instanceof Set) {
            this.buffer += `\n    (${name} ${this.addPropertyFromSet(value)})`;
        } else if (value instanceof FamixBaseElement) {
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
            } else if (value instanceof FamixBaseElement) {
                buffer += `(ref: ${value.id})`;
            } else {
                buffer += `${value}`;
            }
        });

        return buffer;
    };

    public readonly getMSE = (): string => this.buffer + ')\n';
}
