// This code automagically generated from a metamodel using ts-morph
import { TClass } from "../Famix-Traits/TClass";
import { undefined } from "../undefined";
import { TInvocationsReceiver } from "../Famix-Traits/TInvocationsReceiver";
import { TType } from "../Famix-Traits/TType";
import { TWithInheritances } from "../Famix-Traits/TWithInheritances";
import { TWithExceptions } from "../Famix-Traits/TWithExceptions";
import { TWithAttributes } from "../Famix-Traits/TWithAttributes";
import { TWithMethods } from "../Famix-Traits/TWithMethods";
import { Type } from "../FamixTypeScript/Type";
import { FamixMSEExporter } from "../FamixMSEExporter";

export class Class extends Type implements TClass, undefined, TInvocationsReceiver, undefined, undefined, undefined, undefined, TType, undefined, TWithInheritances, undefined, TWithExceptions, undefined, undefined, TWithAttributes, TWithMethods {
    addPropertiesToExporter(exporter: FamixMSEExporter) {
    }

    getMSE() {
        const mse: FamixMSEExporter = new FamixMSEExporter("FamixTypeScript.Class", this)
        this.addPropertiesToExporter(mse)
        return mse.getMSE()
    }
}
