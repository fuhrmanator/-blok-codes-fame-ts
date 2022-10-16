import { FamixJSONExporter } from './FamixJSONExporter';
import { FamixRepository } from './FamixRepository';

export abstract class FamixBaseElement {
    private identifier?: number;

    get id(): number {
        return this.identifier;
    }

    set id(value: number | undefined) {
        this.identifier = value;
    }

    constructor(repository: FamixRepository) {
        repository.addElement(this);
    }

    abstract toJSON(): string;

    abstract addPropertiesToExporter(exporter: FamixJSONExporter): void;
}
