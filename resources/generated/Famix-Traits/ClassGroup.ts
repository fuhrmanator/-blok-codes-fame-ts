// This code automagically generated from a metamodel using ts-morph
import { TypeGroup } from "../Famix-Traits/TypeGroup";
import { FamixMSEExporter } from "../FamixMSEExporter";

export class ClassGroup extends TypeGroup {
    addPropertiesToExporter(exporter: FamixMSEExporter) {
    }

    getMSE() {
        const mse: FamixMSEExporter = new FamixMSEExporter("Famix-Traits.ClassGroup", this)
        this.addPropertiesToExporter(mse)
        return mse.getMSE()
    }
}
