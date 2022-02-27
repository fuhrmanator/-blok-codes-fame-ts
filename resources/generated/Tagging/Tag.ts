// This code automagically generated from a metamodel using ts-morph
import { Entity } from "../Moose/Entity";
import { FamixMSEExporter } from "../FamixMSEExporter";
import { Category } from "../Tagging/Category";
import { SetWithOpposite } from "../../helpers";
import { FameProperty } from "../../helpers";

export class Tag extends Entity {
    private _categories: Set<Category> = new class extends SetWithOpposite<Category> {
        constructor(private context: Tag) { super() }
        clearOpposite(value: Category): this {
            value.markedTags.delete(this.context)
            return this
        }
        setOpposite(value: Category): this {
            value.markedTags.add(this.context)
            return this
        }
    }(this) /* pass outer this */;

    get categories() {
        return this._categories
    }

    set categories(theCategorySet: Set<Category>) {
        this._categories = JSON.parse(JSON.stringify(theCategorySet)) // deep copy
    }

    addCategories(theCategory: Category) {
        this._categories.add(theCategory)
    }

    @FameProperty({ name: "children", derived: true, container: false })
    get children(): Tag {
        // @FameProperty(name = "children", derived = true)
        // TODO: this is a derived property; implement this method manually
        throw new Error('Function not implemented.')
    }

    private _description?: string;

    get description() {
        return this._description
    }

    set description(theString: string | undefined) {
        this._description = theString
    }

    private _id?: number;

    get id() {
        return this._id
    }

    set id(theNumber: number | undefined) {
        this._id = theNumber
    }

    private _isHidden?: boolean;

    get isHidden() {
        return this._isHidden
    }

    set isHidden(theBoolean: boolean | undefined) {
        this._isHidden = theBoolean
    }

    private _name?: string;

    get name() {
        return this._name
    }

    set name(theString: string | undefined) {
        this._name = theString
    }

    private _parentTag?: Tag;

    get parentTag() {
        return this._parentTag
    }

    set parentTag(theTagSet: Tag | undefined) {
        if (this._parentTag != null) {
            if (this._parentTag === theTagSet) return;
            this._parentTag.subTags.delete(this)
        }

        this._parentTag = theTagSet
        if (theTagSet == null) return
        theTagSet.subTags.add(this)
    }

    private _serializedColor?: string;

    get serializedColor() {
        return this._serializedColor
    }

    set serializedColor(theString: string | undefined) {
        this._serializedColor = theString
    }

    private _subTags: Set<Tag> = new class extends SetWithOpposite<Tag> {
        constructor(private context: Tag) { super() }
        clearOpposite(value: Tag): this {
            value.parentTag = undefined
            return this
        }
        setOpposite(value: Tag): this {
            value.parentTag = this.context
            return this
        }
    }(this) /* pass outer this */;

    get subTags() {
        return this._subTags
    }

    set subTags(theTagSet: Set<Tag>) {
        this._subTags = JSON.parse(JSON.stringify(theTagSet)) // deep copy
    }

    addSubtags(theTag: Tag) {
        this._subTags.add(theTag)
    }

    addPropertiesToExporter(exporter: FamixMSEExporter) {
        exporter.addProperty("categories", this.categories)
        exporter.addProperty("children", this.children)
        exporter.addProperty("description", this.description)
        exporter.addProperty("id", this.id)
        exporter.addProperty("isHidden", this.isHidden)
        exporter.addProperty("name", this.name)
        exporter.addProperty("parentTag", this.parentTag)
        exporter.addProperty("serializedColor", this.serializedColor)
        exporter.addProperty("subTags", this.subTags)
    }

    getMSE() {
        const mse: FamixMSEExporter = new FamixMSEExporter("Tagging.Tag", this)
        this.addPropertiesToExporter(mse)
        return mse.getMSE()
    }
}
