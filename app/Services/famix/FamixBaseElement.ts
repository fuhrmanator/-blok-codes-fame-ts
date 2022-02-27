import { FamixMSEExporter } from './FamixMSEExporter';
import { FamixRepository } from './FamixRepository';

export abstract class FamixBaseElement {
    public id: number | undefined;

    constructor(repository: FamixRepository) {
        repository.addElement(this);
    }

    public abstract getMSE(): string;

    // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
    public addPropertiesToExporter(exporter: FamixMSEExporter): void {}
}
