// This code automagically generated from a metamodel using ts-morph
import { TFileAnchor } from "../Famix-Traits/TFileAnchor";
import { TIndexedFileNavigation } from "../Famix-Traits/TIndexedFileNavigation";
import { undefined } from "../undefined";
import { AbstractFileAnchor } from "../FamixTypeScript/AbstractFileAnchor";
import { FamixMSEExporter } from "../FamixMSEExporter";

export class IndexedFileAnchor extends AbstractFileAnchor implements TFileAnchor, TIndexedFileNavigation, undefined {
    addPropertiesToExporter(exporter: FamixMSEExporter) {
    }

    getMSE() {
        const mse: FamixMSEExporter = new FamixMSEExporter("FamixTypeScript.IndexedFileAnchor", this)
        this.addPropertiesToExporter(mse)
        return mse.getMSE()
    }
}
