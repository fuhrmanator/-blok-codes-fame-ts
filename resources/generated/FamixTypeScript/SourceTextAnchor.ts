// This code automagically generated from a metamodel using ts-morph
import { THasImmediateSource } from "../Famix-Traits/THasImmediateSource";
import { undefined } from "../undefined";
import { SourceAnchor } from "../FamixTypeScript/SourceAnchor";
import { FamixMSEExporter } from "../FamixMSEExporter";

export class SourceTextAnchor extends SourceAnchor implements THasImmediateSource, undefined {
    addPropertiesToExporter(exporter: FamixMSEExporter) {
    }

    getMSE() {
        const mse: FamixMSEExporter = new FamixMSEExporter("FamixTypeScript.SourceTextAnchor", this)
        this.addPropertiesToExporter(mse)
        return mse.getMSE()
    }
}
