// This code automagically generated from a metamodel using ts-morph
import { SpecializedGroup } from "../Moose/SpecializedGroup";
import { FamixMSEExporter } from "../FamixMSEExporter";
import { FameProperty } from "../../helpers";

export class TypeGroup extends SpecializedGroup {
    @FameProperty({ name: "abstractness", derived: true, container: false })
    get abstractness() {
        // @FameProperty(name = "abstractness", derived = true)
        // TODO: this is a derived property; implement this method manually
        throw new Error('Function not implemented.')
    }

    @FameProperty({ name: "afferentCoupling", derived: true, container: false })
    get afferentCoupling() {
        // @FameProperty(name = "afferentCoupling", derived = true)
        // TODO: this is a derived property; implement this method manually
        throw new Error('Function not implemented.')
    }

    private _averageNumberOfAttributes?: number;

    get averageNumberOfAttributes() {
        return this._averageNumberOfAttributes
    }

    set averageNumberOfAttributes(theNumber: number | undefined) {
        this._averageNumberOfAttributes = theNumber
    }

    private _averageNumberOfMethods?: number;

    get averageNumberOfMethods() {
        return this._averageNumberOfMethods
    }

    set averageNumberOfMethods(theNumber: number | undefined) {
        this._averageNumberOfMethods = theNumber
    }

    private _averageNumberOfMethods?: number;

    get averageNumberOfMethods() {
        return this._averageNumberOfMethods
    }

    set averageNumberOfMethods(theNumber: number | undefined) {
        this._averageNumberOfMethods = theNumber
    }

    private _averageNumberOfStatements?: number;

    get averageNumberOfStatements() {
        return this._averageNumberOfStatements
    }

    set averageNumberOfStatements(theNumber: number | undefined) {
        this._averageNumberOfStatements = theNumber
    }

    @FameProperty({ name: "bunchCohesion", derived: true, container: false })
    get bunchCohesion() {
        // @FameProperty(name = "bunchCohesion", derived = true)
        // TODO: this is a derived property; implement this method manually
        throw new Error('Function not implemented.')
    }

    @FameProperty({ name: "distance", derived: true, container: false })
    get distance() {
        // @FameProperty(name = "distance", derived = true)
        // TODO: this is a derived property; implement this method manually
        throw new Error('Function not implemented.')
    }

    @FameProperty({ name: "efferentCoupling", derived: true, container: false })
    get efferentCoupling() {
        // @FameProperty(name = "efferentCoupling", derived = true)
        // TODO: this is a derived property; implement this method manually
        throw new Error('Function not implemented.')
    }

    @FameProperty({ name: "instability", derived: true, container: false })
    get instability() {
        // @FameProperty(name = "instability", derived = true)
        // TODO: this is a derived property; implement this method manually
        throw new Error('Function not implemented.')
    }

    addPropertiesToExporter(exporter: FamixMSEExporter) {
        exporter.addProperty("abstractness", this.abstractness)
        exporter.addProperty("afferentCoupling", this.afferentCoupling)
        exporter.addProperty("averageNumberOfAttributes", this.averageNumberOfAttributes)
        exporter.addProperty("averageNumberOfMethods", this.averageNumberOfMethods)
        exporter.addProperty("averageNumberOfMethods", this.averageNumberOfMethods)
        exporter.addProperty("averageNumberOfStatements", this.averageNumberOfStatements)
        exporter.addProperty("bunchCohesion", this.bunchCohesion)
        exporter.addProperty("distance", this.distance)
        exporter.addProperty("efferentCoupling", this.efferentCoupling)
        exporter.addProperty("instability", this.instability)
    }

    getMSE() {
        const mse: FamixMSEExporter = new FamixMSEExporter("Famix-Traits.TypeGroup", this)
        this.addPropertiesToExporter(mse)
        return mse.getMSE()
    }
}
