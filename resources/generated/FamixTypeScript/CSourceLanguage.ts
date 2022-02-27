// This code automagically generated from a metamodel using ts-morph
import { SourceLanguage } from "../FamixTypeScript/SourceLanguage";
import { FamixMSEExporter } from "../FamixMSEExporter";

export class CSourceLanguage extends SourceLanguage {
    addPropertiesToExporter(exporter: FamixMSEExporter) {
    }

    getMSE() {
        const mse: FamixMSEExporter = new FamixMSEExporter("FamixTypeScript.CSourceLanguage", this)
        this.addPropertiesToExporter(mse)
        return mse.getMSE()
    }
}
