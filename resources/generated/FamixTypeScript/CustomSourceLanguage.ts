// This code automagically generated from a metamodel using ts-morph
import { undefined } from "../undefined";
import { SourceLanguage } from "../FamixTypeScript/SourceLanguage";
import { FamixMSEExporter } from "../FamixMSEExporter";

export class CustomSourceLanguage extends SourceLanguage implements undefined, undefined, undefined, undefined, undefined {
    addPropertiesToExporter(exporter: FamixMSEExporter) {
    }

    getMSE() {
        const mse: FamixMSEExporter = new FamixMSEExporter("FamixTypeScript.CustomSourceLanguage", this)
        this.addPropertiesToExporter(mse)
        return mse.getMSE()
    }
}
