// This code automagically generated from a metamodel using ts-morph
import { TWithFunctions } from "../Famix-Traits/TWithFunctions";
import { undefined } from "../undefined";
import { TWithAnnotationTypes } from "../Famix-Traits/TWithAnnotationTypes";
import { TWithClasses } from "../Famix-Traits/TWithClasses";
import { TWithTypes } from "../Famix-Traits/TWithTypes";
import { NamedEntity } from "../FamixTypeScript/NamedEntity";
import { FamixMSEExporter } from "../FamixMSEExporter";

export class ContainerEntity extends NamedEntity implements TWithFunctions, undefined, TWithAnnotationTypes, TWithClasses, TWithTypes, undefined {
    addPropertiesToExporter(exporter: FamixMSEExporter) {
    }

    getMSE() {
        const mse: FamixMSEExporter = new FamixMSEExporter("FamixTypeScript.ContainerEntity", this)
        this.addPropertiesToExporter(mse)
        return mse.getMSE()
    }
}
