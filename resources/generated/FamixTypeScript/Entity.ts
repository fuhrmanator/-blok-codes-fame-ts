// This code automagically generated from a metamodel using ts-morph
import { FamixBaseElement } from "../FamixBaseElement";
import { FamixMSEExporter } from "../FamixMSEExporter";

export class Entity extends FamixBaseElement {
    addPropertiesToExporter(exporter: FamixMSEExporter) {
    }

    getMSE() {
        const mse: FamixMSEExporter = new FamixMSEExporter("FamixTypeScript.Entity", this)
        this.addPropertiesToExporter(mse)
        return mse.getMSE()
    }
}
