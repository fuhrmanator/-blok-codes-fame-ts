// This code automagically generated from a metamodel using ts-morph
import { Object } from "../Moose/Object";
import { FamixMSEExporter } from "../FamixMSEExporter";
import { Association } from "../Tagging/Association";
import { SetWithOpposite } from "../../helpers";
import { FameProperty } from "../../helpers";
import { FameProperty } from "../../helpers";
import { FameProperty } from "../../helpers";

export class Entity extends Object {
    private _allTagAssociations: Set<Association> = new class extends SetWithOpposite<Association> {
        constructor(private context: Entity) { super() }
        clearOpposite(value: Association): this {
            value.entity = undefined
            return this
        }
        setOpposite(value: Association): this {
            value.entity = this.context
            return this
        }
    }(this) /* pass outer this */;

    get allTagAssociations() {
        return this._allTagAssociations
    }

    set allTagAssociations(theAssociationSet: Set<Association>) {
        this._allTagAssociations = JSON.parse(JSON.stringify(theAssociationSet)) // deep copy
    }

    addAlltagassociations(theAssociation: Association) {
        this._allTagAssociations.add(theAssociation)
    }

    @FameProperty({ name: "isDead", derived: true, container: false })
    get isDead() {
        // @FameProperty(name = "isDead", derived = true)
        // TODO: this is a derived property; implement this method manually
        throw new Error('Function not implemented.')
    }

    @FameProperty({ name: "isTagged", derived: true, container: false })
    get isTagged() {
        // @FameProperty(name = "isTagged", derived = true)
        // TODO: this is a derived property; implement this method manually
        throw new Error('Function not implemented.')
    }

    @FameProperty({ name: "numberOfTags", derived: true, container: false })
    get numberOfTags() {
        // @FameProperty(name = "numberOfTags", derived = true)
        // TODO: this is a derived property; implement this method manually
        throw new Error('Function not implemented.')
    }

    addPropertiesToExporter(exporter: FamixMSEExporter) {
        exporter.addProperty("allTagAssociations", this.allTagAssociations)
        exporter.addProperty("isDead", this.isDead)
        exporter.addProperty("isTagged", this.isTagged)
        exporter.addProperty("numberOfTags", this.numberOfTags)
    }

    getMSE() {
        const mse: FamixMSEExporter = new FamixMSEExporter("Moose.Entity", this)
        this.addPropertiesToExporter(mse)
        return mse.getMSE()
    }
}
