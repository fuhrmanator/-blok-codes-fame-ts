// This code automagically generated from a metamodel using ts-morph
import { SpecializedGroup } from "../Moose/SpecializedGroup";
import { FamixMSEExporter } from "../FamixMSEExporter";

export class AnnotationTypeGroup extends SpecializedGroup {
    addPropertiesToExporter(exporter: FamixMSEExporter) {
    }

    getMSE() {
        const mse: FamixMSEExporter = new FamixMSEExporter("Famix-Traits.AnnotationTypeGroup", this)
        this.addPropertiesToExporter(mse)
        return mse.getMSE()
    }
}
