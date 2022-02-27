// This code automagically generated from a metamodel using ts-morph
import { Entity } from "../Moose/Entity";
import { FamixMSEExporter } from "../FamixMSEExporter";
import { Tag } from "../Tagging/Tag";
import { FameProperty } from "../../helpers";

export class Association extends Entity {
    private _entity?: Entity;

    get entity() {
        return this._entity
    }

    set entity(theEntitySet: Entity | undefined) {
        if (this._entity != null) {
            if (this._entity === theEntitySet) return;
            this._entity.allTagAssociations.delete(this)
        }

        this._entity = theEntitySet
        if (theEntitySet == null) return
        theEntitySet.allTagAssociations.add(this)
    }

    @FameProperty({ name: "tag", derived: true, container: false })
    get tag() {
        // @FameProperty(name = "tag", derived = true)
        // TODO: this is a derived property; implement this method manually
        throw new Error('Function not implemented.')
    }

    private _tagId?: number;

    get tagId() {
        return this._tagId
    }

    set tagId(theNumber: number | undefined) {
        this._tagId = theNumber
    }

    addPropertiesToExporter(exporter: FamixMSEExporter) {
        exporter.addProperty("entity", this.entity)
        exporter.addProperty("tag", this.tag)
        exporter.addProperty("tagId", this.tagId)
    }

    getMSE() {
        const mse: FamixMSEExporter = new FamixMSEExporter("Tagging.Association", this)
        this.addPropertiesToExporter(mse)
        return mse.getMSE()
    }
}
