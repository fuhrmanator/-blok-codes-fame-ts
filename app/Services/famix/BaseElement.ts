import { FamixMSEExporter } from './FamixMSEExporter';

export interface BaseElement {
    getMSE(): string;

    addPropertiesToExporter(exporter: FamixMSEExporter): void;
}
