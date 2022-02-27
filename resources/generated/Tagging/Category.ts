// This code automagically generated from a metamodel using ts-morph
import { Entity } from "../Moose/Entity";
import { FamixMSEExporter } from "../FamixMSEExporter";
import { Tag } from "../Tagging/Tag";
import { SetWithOpposite } from "../../helpers";

export class Category extends Entity {
    private _markedTags: Set<Tag> = new class extends SetWithOpposite<Tag> {
        constructor(private context: Category) { super() }
        clearOpposite(value: Tag): this {
            value.categories.delete(this.context)
            return this
        }
        setOpposite(value: Tag): this {
            value.categories.add(this.context)
            return this
        }
    }(this) /* pass outer this */;

    get markedTags() {
        return this._markedTags
    }

    set markedTags(theTagSet: Set<Tag>) {
        this._markedTags = JSON.parse(JSON.stringify(theTagSet)) // deep copy
    }

    addMarkedtags(theTag: Tag) {
        this._markedTags.add(theTag)
    }

    private _name?: string;

    get name() {
        return this._name
    }

    set name(theString: string | undefined) {
        this._name = theString
    }

    addPropertiesToExporter(exporter: FamixMSEExporter) {
        exporter.addProperty("markedTags", this.markedTags)
        exporter.addProperty("name", this.name)
    }

    getMSE() {
        const mse: FamixMSEExporter = new FamixMSEExporter("Tagging.Category", this)
        this.addPropertiesToExporter(mse)
        return mse.getMSE()
    }
}
