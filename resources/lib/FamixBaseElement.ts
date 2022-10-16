import { FamixJSONExporter } from './FamixJSONExporter';
import { FamixRepository } from './FamixRepository';

export abstract class FamixBaseElement {
    id: number | undefined;

    constructor(repository: FamixRepository) {
        repository.addElement(this);
    }

    abstract toJSON(): string;

    abstract addPropertiesToExporter(exporter: FamixJSONExporter): void;
}
