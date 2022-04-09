import { BaseElement } from './BaseElement';
import { FamixMSEExporter } from './FamixMSEExporter';
import { FamixRepository } from './FamixRepository';

export abstract class FamixBaseElement implements BaseElement {
    id: number | undefined;

    constructor(repository: FamixRepository) {
        repository.addElement(this);
    }

    abstract getMSE(): string;

    abstract addPropertiesToExporter(exporter: FamixMSEExporter): void;
}
