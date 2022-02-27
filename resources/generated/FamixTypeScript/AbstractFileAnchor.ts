// This code automagically generated from a metamodel using ts-morph
import { TFileAnchor } from "../Famix-Traits/TFileAnchor";
import { undefined } from "../undefined";
import { SourceAnchor } from "../FamixTypeScript/SourceAnchor";
import { FamixMSEExporter } from "../FamixMSEExporter";

export class AbstractFileAnchor extends SourceAnchor implements TFileAnchor, undefined {
    addPropertiesToExporter(exporter: FamixMSEExporter) {
    }

    getMSE() {
        const mse: FamixMSEExporter = new FamixMSEExporter("FamixTypeScript.AbstractFileAnchor", this)
        this.addPropertiesToExporter(mse)
        return mse.getMSE()
    }
}
