// This code automagically generated from a metamodel using ts-morph
import { undefined } from "../undefined";
import { TWithDereferencedInvocations } from "../Famix-Traits/TWithDereferencedInvocations";
import { ContainerEntity } from "../FamixTypeScript/ContainerEntity";
import { FamixMSEExporter } from "../FamixMSEExporter";

export class BehaviouralEntity extends ContainerEntity implements undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, TWithDereferencedInvocations, undefined, undefined {
    addPropertiesToExporter(exporter: FamixMSEExporter) {
    }

    getMSE() {
        const mse: FamixMSEExporter = new FamixMSEExporter("FamixTypeScript.BehaviouralEntity", this)
        this.addPropertiesToExporter(mse)
        return mse.getMSE()
    }
}
