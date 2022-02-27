// This code automagically generated from a metamodel using ts-morph
import { SpecializedGroup } from "../Moose/SpecializedGroup";
import { FamixMSEExporter } from "../FamixMSEExporter";

export class NamespaceGroup extends SpecializedGroup {
    addPropertiesToExporter(exporter: FamixMSEExporter) {
    }

    getMSE() {
        const mse: FamixMSEExporter = new FamixMSEExporter("Famix-Traits.NamespaceGroup", this)
        this.addPropertiesToExporter(mse)
        return mse.getMSE()
    }
}
