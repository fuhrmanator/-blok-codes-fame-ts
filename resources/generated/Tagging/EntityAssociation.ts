// This code automagically generated from a metamodel using ts-morph
import { Association } from "../Tagging/Association";
import { FamixMSEExporter } from "../FamixMSEExporter";

export class EntityAssociation extends Association {
    addPropertiesToExporter(exporter: FamixMSEExporter) {
    }

    getMSE() {
        const mse: FamixMSEExporter = new FamixMSEExporter("Tagging.EntityAssociation", this)
        this.addPropertiesToExporter(mse)
        return mse.getMSE()
    }
}
