// This code automagically generated from a metamodel using ts-morph
import { TSourceLanguage } from "../Famix-Traits/TSourceLanguage";
import { TUnknownSourceLanguage } from "../Famix-Traits/TUnknownSourceLanguage";
import { SourceLanguage } from "../FamixTypeScript/SourceLanguage";
import { FamixMSEExporter } from "../FamixMSEExporter";

export class UnknownSourceLanguage extends SourceLanguage implements TSourceLanguage, TUnknownSourceLanguage {
    addPropertiesToExporter(exporter: FamixMSEExporter) {
    }

    getMSE() {
        const mse: FamixMSEExporter = new FamixMSEExporter("FamixTypeScript.UnknownSourceLanguage", this)
        this.addPropertiesToExporter(mse)
        return mse.getMSE()
    }
}
