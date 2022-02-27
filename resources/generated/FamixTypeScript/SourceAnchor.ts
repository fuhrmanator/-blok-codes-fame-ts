// This code automagically generated from a metamodel using ts-morph
import { undefined } from "../undefined";
import { Entity } from "../FamixTypeScript/Entity";
import { FamixMSEExporter } from "../FamixMSEExporter";

export class SourceAnchor extends Entity implements undefined {
    addPropertiesToExporter(exporter: FamixMSEExporter) {
    }

    getMSE() {
        const mse: FamixMSEExporter = new FamixMSEExporter("FamixTypeScript.SourceAnchor", this)
        this.addPropertiesToExporter(mse)
        return mse.getMSE()
    }
}
