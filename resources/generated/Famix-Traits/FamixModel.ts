// This code automagically generated from a metamodel using ts-morph
import { Model } from "../Moose/Model";
import { FamixMSEExporter } from "../FamixMSEExporter";

export class FamixModel extends Model {
    addPropertiesToExporter(exporter: FamixMSEExporter) {
    }

    getMSE() {
        const mse: FamixMSEExporter = new FamixMSEExporter("Famix-Traits.FamixModel", this)
        this.addPropertiesToExporter(mse)
        return mse.getMSE()
    }
}
