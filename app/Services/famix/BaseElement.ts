import { FamixJSONExporter } from './FamixJSONExporter';

export interface BaseElement {
    getJSON(): string;

    addPropertiesToExporter(exporter: FamixJSONExporter): void;
}
