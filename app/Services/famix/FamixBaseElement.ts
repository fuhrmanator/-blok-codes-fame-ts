import { BaseElement } from './BaseElement';
import { FamixJSONExporter } from './FamixJSONExporter';
import { FamixRepository } from './FamixRepository';

export abstract class FamixBaseElement implements BaseElement {
    id: number | undefined;

    constructor(repository: FamixRepository) {
        repository.addElement(this);
    }

    abstract toJSON(): string;

    abstract addPropertiesToExporter(exporter: FamixJSONExporter): void;
}
