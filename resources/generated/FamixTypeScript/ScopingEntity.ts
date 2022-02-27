// This code automagically generated from a metamodel using ts-morph
import { TWithGlobalVariables } from "../Famix-Traits/TWithGlobalVariables";
import { ContainerEntity } from "../FamixTypeScript/ContainerEntity";
import { FamixMSEExporter } from "../FamixMSEExporter";
import { SetWithOpposite } from "../../helpers";

export class ScopingEntity extends ContainerEntity implements TWithGlobalVariables {
    private _childScopes: Set<ScopingEntity> = new class extends SetWithOpposite<ScopingEntity> {
        constructor(private context: ScopingEntity) { super() }
        clearOpposite(value: ScopingEntity): this {
            value.parentScope = undefined
            return this
        }
        setOpposite(value: ScopingEntity): this {
            value.parentScope = this.context
            return this
        }
    }(this) /* pass outer this */;

    get childScopes() {
        return this._childScopes
    }

    set childScopes(theScopingentitySet: Set<ScopingEntity>) {
        this._childScopes = JSON.parse(JSON.stringify(theScopingentitySet)) // deep copy
    }

    addChildscopes(theScopingentity: ScopingEntity) {
        this._childScopes.add(theScopingentity)
    }

    private _parentScope?: ScopingEntity;

    get parentScope() {
        return this._parentScope
    }

    set parentScope(theScopingentitySet: ScopingEntity | undefined) {
        if (this._parentScope != null) {
            if (this._parentScope === theScopingentitySet) return;
            this._parentScope.childScopes.delete(this)
        }

        this._parentScope = theScopingentitySet
        if (theScopingentitySet == null) return
        theScopingentitySet.childScopes.add(this)
    }

    addPropertiesToExporter(exporter: FamixMSEExporter) {
        exporter.addProperty("childScopes", this.childScopes)
        exporter.addProperty("parentScope", this.parentScope)
    }

    getMSE() {
        const mse: FamixMSEExporter = new FamixMSEExporter("FamixTypeScript.ScopingEntity", this)
        this.addPropertiesToExporter(mse)
        return mse.getMSE()
    }
}
