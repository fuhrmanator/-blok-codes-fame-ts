// This code automagically generated from a metamodel using ts-morph
import { TTraitUser } from "../Famix-Traits/TTraitUser";
import { TParameterizedTypeUser } from "../Famix-Traits/TParameterizedTypeUser";
import { undefined } from "../undefined";
import { TWithTypeAliases } from "../Famix-Traits/TWithTypeAliases";
import { TWithInheritances } from "../Famix-Traits/TWithInheritances";
import { TType } from "../Famix-Traits/TType";
import { TWithAttributes } from "../Famix-Traits/TWithAttributes";
import { TWithMethods } from "../Famix-Traits/TWithMethods";
import { ContainerEntity } from "../FamixTypeScript/ContainerEntity";
import { FamixMSEExporter } from "../FamixMSEExporter";

export class Type extends ContainerEntity implements TTraitUser, TParameterizedTypeUser, undefined, undefined, undefined, TWithTypeAliases, undefined, TWithInheritances, TType, undefined, undefined, TWithAttributes, TWithMethods {
    addPropertiesToExporter(exporter: FamixMSEExporter) {
    }

    getMSE() {
        const mse: FamixMSEExporter = new FamixMSEExporter("FamixTypeScript.Type", this)
        this.addPropertiesToExporter(mse)
        return mse.getMSE()
    }
}
