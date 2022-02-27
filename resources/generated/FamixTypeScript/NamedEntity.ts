// This code automagically generated from a metamodel using ts-morph
import { undefined } from "../undefined";
import { TInvocationsReceiver } from "../Famix-Traits/TInvocationsReceiver";
import { TCanBeFinal } from "../Famix-Traits/TCanBeFinal";
import { TWithAnnotationInstances } from "../Famix-Traits/TWithAnnotationInstances";
import { TCanBeAbstract } from "../Famix-Traits/TCanBeAbstract";
import { SourcedEntity } from "../FamixTypeScript/SourcedEntity";
import { FamixMSEExporter } from "../FamixMSEExporter";

export class NamedEntity extends SourcedEntity implements undefined, undefined, undefined, TInvocationsReceiver, TCanBeFinal, undefined, TWithAnnotationInstances, undefined, TCanBeAbstract, undefined, undefined {
    addPropertiesToExporter(exporter: FamixMSEExporter) {
    }

    getMSE() {
        const mse: FamixMSEExporter = new FamixMSEExporter("FamixTypeScript.NamedEntity", this)
        this.addPropertiesToExporter(mse)
        return mse.getMSE()
    }
}
