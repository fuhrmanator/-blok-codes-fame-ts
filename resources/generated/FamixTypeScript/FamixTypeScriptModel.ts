// This code automagically generated from a metamodel using ts-morph
import { Model } from "../Moose/Model";
import { FamixMSEExporter } from "../FamixMSEExporter";

export class FamixTypeScriptModel extends Model {
    addPropertiesToExporter(exporter: FamixMSEExporter) {
    }

    getMSE() {
        const mse: FamixMSEExporter = new FamixMSEExporter("FamixTypeScript.FamixTypeScriptModel", this)
        this.addPropertiesToExporter(mse)
        return mse.getMSE()
    }
}
