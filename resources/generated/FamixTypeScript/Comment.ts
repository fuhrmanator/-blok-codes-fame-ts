// This code automagically generated from a metamodel using ts-morph
import { TComment } from "../Famix-Traits/TComment";
import { SourcedEntity } from "../FamixTypeScript/SourcedEntity";
import { FamixMSEExporter } from "../FamixMSEExporter";

export class Comment extends SourcedEntity implements TComment {
    addPropertiesToExporter(exporter: FamixMSEExporter) {
    }

    getMSE() {
        const mse: FamixMSEExporter = new FamixMSEExporter("FamixTypeScript.Comment", this)
        this.addPropertiesToExporter(mse)
        return mse.getMSE()
    }
}
