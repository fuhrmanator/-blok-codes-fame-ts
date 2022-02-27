// This code automagically generated from a metamodel using ts-morph
import { SpecializedGroup } from "../Moose/SpecializedGroup";
import { FamixMSEExporter } from "../FamixMSEExporter";

export class MethodGroup extends SpecializedGroup {
    private _averageNumberOfInvocations?: number;

    get averageNumberOfInvocations() {
        return this._averageNumberOfInvocations
    }

    set averageNumberOfInvocations(theNumber: number | undefined) {
        this._averageNumberOfInvocations = theNumber
    }

    private _averageNumberOfLinesOfCode?: number;

    get averageNumberOfLinesOfCode() {
        return this._averageNumberOfLinesOfCode
    }

    set averageNumberOfLinesOfCode(theNumber: number | undefined) {
        this._averageNumberOfLinesOfCode = theNumber
    }

    private _averageNumberOfParameters?: number;

    get averageNumberOfParameters() {
        return this._averageNumberOfParameters
    }

    set averageNumberOfParameters(theNumber: number | undefined) {
        this._averageNumberOfParameters = theNumber
    }

    addPropertiesToExporter(exporter: FamixMSEExporter) {
        exporter.addProperty("averageNumberOfInvocations", this.averageNumberOfInvocations)
        exporter.addProperty("averageNumberOfLinesOfCode", this.averageNumberOfLinesOfCode)
        exporter.addProperty("averageNumberOfParameters", this.averageNumberOfParameters)
    }

    getMSE() {
        const mse: FamixMSEExporter = new FamixMSEExporter("Famix-Traits.MethodGroup", this)
        this.addPropertiesToExporter(mse)
        return mse.getMSE()
    }
}
