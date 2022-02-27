// This code automagically generated from a metamodel using ts-morph
import { undefined } from "../undefined";
import { Entity } from "../FamixTypeScript/Entity";
import { FamixMSEExporter } from "../FamixMSEExporter";

export class SourcedEntity extends Entity implements undefined, undefined, undefined {
    addPropertiesToExporter(exporter: FamixMSEExporter) {
    }

    getMSE() {
        const mse: FamixMSEExporter = new FamixMSEExporter("FamixTypeScript.SourcedEntity", this)
        this.addPropertiesToExporter(mse)
        return mse.getMSE()
    }
}
