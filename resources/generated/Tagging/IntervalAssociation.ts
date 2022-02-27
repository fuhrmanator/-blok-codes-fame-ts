// This code automagically generated from a metamodel using ts-morph
import { Association } from "../Tagging/Association";
import { FamixMSEExporter } from "../FamixMSEExporter";
import { undefined } from "../undefined";

export class IntervalAssociation extends Association {
    private _sourceAnchor?: undefined;

    get sourceAnchor() {
        return this._sourceAnchor
    }

    set sourceAnchor(theUndefined: undefined | undefined) {
        this._sourceAnchor = theUndefined
    }

    private _start?: number;

    get start() {
        return this._start
    }

    set start(theNumber: number | undefined) {
        this._start = theNumber
    }

    private _stop?: number;

    get stop() {
        return this._stop
    }

    set stop(theNumber: number | undefined) {
        this._stop = theNumber
    }

    addPropertiesToExporter(exporter: FamixMSEExporter) {
        exporter.addProperty("sourceAnchor", this.sourceAnchor)
        exporter.addProperty("start", this.start)
        exporter.addProperty("stop", this.stop)
    }

    getMSE() {
        const mse: FamixMSEExporter = new FamixMSEExporter("Tagging.IntervalAssociation", this)
        this.addPropertiesToExporter(mse)
        return mse.getMSE()
    }
}
