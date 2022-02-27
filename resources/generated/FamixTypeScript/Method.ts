// This code automagically generated from a metamodel using ts-morph
import { undefined } from "../undefined";
import { TWithCaughtExceptions } from "../Famix-Traits/TWithCaughtExceptions";
import { TCanBeSynchronized } from "../FamixTypeScript/TCanBeSynchronized";
import { TMethod } from "../Famix-Traits/TMethod";
import { TWithDeclaredExceptions } from "../Famix-Traits/TWithDeclaredExceptions";
import { TWithThrownExceptions } from "../Famix-Traits/TWithThrownExceptions";
import { BehaviouralEntity } from "../FamixTypeScript/BehaviouralEntity";
import { FamixMSEExporter } from "../FamixMSEExporter";

export class Method extends BehaviouralEntity implements undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, TWithCaughtExceptions, undefined, undefined, undefined, undefined, TCanBeSynchronized, TMethod, TWithDeclaredExceptions, TWithThrownExceptions {
    addPropertiesToExporter(exporter: FamixMSEExporter) {
    }

    getMSE() {
        const mse: FamixMSEExporter = new FamixMSEExporter("FamixTypeScript.Method", this)
        this.addPropertiesToExporter(mse)
        return mse.getMSE()
    }
}
