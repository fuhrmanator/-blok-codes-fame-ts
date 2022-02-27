// This code automagically generated from a metamodel using ts-morph
import { FamixMSEExporter } from "../FamixMSEExporter";

export class Object {
    addPropertiesToExporter(exporter: FamixMSEExporter) {
    }

    getMSE() {
        const mse: FamixMSEExporter = new FamixMSEExporter("Moose.Object", this)
        this.addPropertiesToExporter(mse)
        return mse.getMSE()
    }
}
