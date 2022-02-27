// This code automagically generated from a metamodel using ts-morph
import { AbstractGroup } from "../Moose/AbstractGroup";
import { FamixMSEExporter } from "../FamixMSEExporter";

export class TagModel extends AbstractGroup {
    addPropertiesToExporter(exporter: FamixMSEExporter) {
    }

    getMSE() {
        const mse: FamixMSEExporter = new FamixMSEExporter("Tagging.TagModel", this)
        this.addPropertiesToExporter(mse)
        return mse.getMSE()
    }
}
