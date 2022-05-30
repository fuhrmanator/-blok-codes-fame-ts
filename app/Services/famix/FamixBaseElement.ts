import { BaseElement } from './BaseElement';
import { FamixJSONExporter } from './FamixJSONExporter';
import { FamixRepository } from './FamixRepository';

export abstract class FamixBaseElement implements BaseElement {
    id: number | undefined;

    protected constructor(repository: FamixRepository) {
        repository.addElement(this);
    }

    abstract getJSON(): string;

    abstract addPropertiesToExporter(exporter: FamixJSONExporter): void;
}
