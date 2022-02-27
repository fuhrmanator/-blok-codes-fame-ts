// This code automagically generated from a metamodel using ts-morph
import { Group } from "../Moose/Group";
import { FamixMSEExporter } from "../FamixMSEExporter";

export class SpecializedGroup extends Group {
    addPropertiesToExporter(exporter: FamixMSEExporter) {
    }

    getMSE() {
        const mse: FamixMSEExporter = new FamixMSEExporter("Moose.SpecializedGroup", this)
        this.addPropertiesToExporter(mse)
        return mse.getMSE()
    }
}
