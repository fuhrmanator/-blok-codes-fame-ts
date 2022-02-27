// This code automagically generated from a metamodel using ts-morph
import { TSourceLanguage } from "../Famix-Traits/TSourceLanguage";
import { Entity } from "../FamixTypeScript/Entity";
import { FamixMSEExporter } from "../FamixMSEExporter";

export class SourceLanguage extends Entity implements TSourceLanguage {
    addPropertiesToExporter(exporter: FamixMSEExporter) {
    }

    getMSE() {
        const mse: FamixMSEExporter = new FamixMSEExporter("FamixTypeScript.SourceLanguage", this)
        this.addPropertiesToExporter(mse)
        return mse.getMSE()
    }
}
