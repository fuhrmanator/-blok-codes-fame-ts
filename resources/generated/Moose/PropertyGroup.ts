// This code automagically generated from a metamodel using ts-morph
import { Group } from "../Moose/Group";
import { FamixMSEExporter } from "../FamixMSEExporter";

export class PropertyGroup extends Group {
    private _property?: string;

    get property() {
        return this._property
    }

    set property(theString: string | undefined) {
        this._property = theString
    }

    private _propertyRatio?: number;

    get propertyRatio() {
        return this._propertyRatio
    }

    set propertyRatio(theNumber: number | undefined) {
        this._propertyRatio = theNumber
    }

    private _propertyTotal?: number;

    get propertyTotal() {
        return this._propertyTotal
    }

    set propertyTotal(theNumber: number | undefined) {
        this._propertyTotal = theNumber
    }

    private _propertyTotalOriginal?: number;

    get propertyTotalOriginal() {
        return this._propertyTotalOriginal
    }

    set propertyTotalOriginal(theNumber: number | undefined) {
        this._propertyTotalOriginal = theNumber
    }

    private _sizeOriginal?: number;

    get sizeOriginal() {
        return this._sizeOriginal
    }

    set sizeOriginal(theNumber: number | undefined) {
        this._sizeOriginal = theNumber
    }

    private _sizeRatio?: number;

    get sizeRatio() {
        return this._sizeRatio
    }

    set sizeRatio(theNumber: number | undefined) {
        this._sizeRatio = theNumber
    }

    addPropertiesToExporter(exporter: FamixMSEExporter) {
        exporter.addProperty("property", this.property)
        exporter.addProperty("propertyRatio", this.propertyRatio)
        exporter.addProperty("propertyTotal", this.propertyTotal)
        exporter.addProperty("propertyTotalOriginal", this.propertyTotalOriginal)
        exporter.addProperty("sizeOriginal", this.sizeOriginal)
        exporter.addProperty("sizeRatio", this.sizeRatio)
    }

    getMSE() {
        const mse: FamixMSEExporter = new FamixMSEExporter("Moose.PropertyGroup", this)
        this.addPropertiesToExporter(mse)
        return mse.getMSE()
    }
}
