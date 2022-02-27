// This code automagically generated from a metamodel using ts-morph
import { Object } from "../Moose/Object";
import { FamixMSEExporter } from "../FamixMSEExporter";

export class AbstractGroup extends Object {
    private _numberOfAssociations?: number;

    get numberOfAssociations() {
        return this._numberOfAssociations
    }

    set numberOfAssociations(theNumber: number | undefined) {
        this._numberOfAssociations = theNumber
    }

    private _numberOfEntities?: number;

    get numberOfEntities() {
        return this._numberOfEntities
    }

    set numberOfEntities(theNumber: number | undefined) {
        this._numberOfEntities = theNumber
    }

    private _numberOfItems?: number;

    get numberOfItems() {
        return this._numberOfItems
    }

    set numberOfItems(theNumber: number | undefined) {
        this._numberOfItems = theNumber
    }

    private _numberOfLinesOfCode?: number;

    get numberOfLinesOfCode() {
        return this._numberOfLinesOfCode
    }

    set numberOfLinesOfCode(theNumber: number | undefined) {
        this._numberOfLinesOfCode = theNumber
    }

    private _numberOfPackages?: number;

    get numberOfPackages() {
        return this._numberOfPackages
    }

    set numberOfPackages(theNumber: number | undefined) {
        this._numberOfPackages = theNumber
    }

    addPropertiesToExporter(exporter: FamixMSEExporter) {
        exporter.addProperty("numberOfAssociations", this.numberOfAssociations)
        exporter.addProperty("numberOfEntities", this.numberOfEntities)
        exporter.addProperty("numberOfItems", this.numberOfItems)
        exporter.addProperty("numberOfLinesOfCode", this.numberOfLinesOfCode)
        exporter.addProperty("numberOfPackages", this.numberOfPackages)
    }

    getMSE() {
        const mse: FamixMSEExporter = new FamixMSEExporter("Moose.AbstractGroup", this)
        this.addPropertiesToExporter(mse)
        return mse.getMSE()
    }
}
