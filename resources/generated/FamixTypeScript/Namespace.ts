// This code automagically generated from a metamodel using ts-morph
import { undefined } from "../undefined";
import { TNamespace } from "../Famix-Traits/TNamespace";
import { ScopingEntity } from "../FamixTypeScript/ScopingEntity";
import { FamixMSEExporter } from "../FamixMSEExporter";

export class Namespace extends ScopingEntity implements undefined, TNamespace, undefined, undefined, undefined, undefined, undefined {
    addPropertiesToExporter(exporter: FamixMSEExporter) {
    }

    getMSE() {
        const mse: FamixMSEExporter = new FamixMSEExporter("FamixTypeScript.Namespace", this)
        this.addPropertiesToExporter(mse)
        return mse.getMSE()
    }
}
