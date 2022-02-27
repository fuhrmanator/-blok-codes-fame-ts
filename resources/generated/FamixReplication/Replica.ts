// This code automagically generated from a metamodel using ts-morph
import { Entity } from "../Moose/Entity";
import { FamixMSEExporter } from "../FamixMSEExporter";

export class Replica extends Entity {
    addPropertiesToExporter(exporter: FamixMSEExporter) {
    }

    getMSE() {
        const mse: FamixMSEExporter = new FamixMSEExporter("FamixReplication.Replica", this)
        this.addPropertiesToExporter(mse)
        return mse.getMSE()
    }
}
