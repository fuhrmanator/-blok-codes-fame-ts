import { FamixJSONExporter } from './FamixJSONExporter';

export interface BaseElement {
    toJSON(): string;

    addPropertiesToExporter(exporter: FamixJSONExporter): void;
}
