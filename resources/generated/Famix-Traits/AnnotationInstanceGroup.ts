// This code automagically generated from a metamodel using ts-morph
import { SpecializedGroup } from "../Moose/SpecializedGroup";
import { FamixMSEExporter } from "../FamixMSEExporter";

export class AnnotationInstanceGroup extends SpecializedGroup {
    addPropertiesToExporter(exporter: FamixMSEExporter) {
    }

    getMSE() {
        const mse: FamixMSEExporter = new FamixMSEExporter("Famix-Traits.AnnotationInstanceGroup", this)
        this.addPropertiesToExporter(mse)
        return mse.getMSE()
    }
}
