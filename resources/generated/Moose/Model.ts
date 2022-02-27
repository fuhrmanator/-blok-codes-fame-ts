// This code automagically generated from a metamodel using ts-morph
import { AbstractGroup } from "../Moose/AbstractGroup";
import { FamixMSEExporter } from "../FamixMSEExporter";
import { FameProperty } from "../../helpers";
import { TSourceLanguage } from "../Famix-Traits/TSourceLanguage";

export class Model extends AbstractGroup {
    @FameProperty({ name: "averageCyclomaticComplexity", derived: true, container: false })
    get averageCyclomaticComplexity() {
        // @FameProperty(name = "averageCyclomaticComplexity", derived = true)
        // TODO: this is a derived property; implement this method manually
        throw new Error('Function not implemented.')
    }

    private _numberOfClasses?: number;

    get numberOfClasses() {
        return this._numberOfClasses
    }

    set numberOfClasses(theNumber: number | undefined) {
        this._numberOfClasses = theNumber
    }

    private _numberOfClassesPerPackage?: number;

    get numberOfClassesPerPackage() {
        return this._numberOfClassesPerPackage
    }

    set numberOfClassesPerPackage(theNumber: number | undefined) {
        this._numberOfClassesPerPackage = theNumber
    }

    private _numberOfClassesPerPackage?: number;

    get numberOfClassesPerPackage() {
        return this._numberOfClassesPerPackage
    }

    set numberOfClassesPerPackage(theNumber: number | undefined) {
        this._numberOfClassesPerPackage = theNumber
    }

    private _numberOfLinesOfCode?: number;

    get numberOfLinesOfCode() {
        return this._numberOfLinesOfCode
    }

    set numberOfLinesOfCode(theNumber: number | undefined) {
        this._numberOfLinesOfCode = theNumber
    }

    private _numberOfLinesOfCodePerClass?: number;

    get numberOfLinesOfCodePerClass() {
        return this._numberOfLinesOfCodePerClass
    }

    set numberOfLinesOfCodePerClass(theNumber: number | undefined) {
        this._numberOfLinesOfCodePerClass = theNumber
    }

    private _numberOfLinesOfCodePerMethod?: number;

    get numberOfLinesOfCodePerMethod() {
        return this._numberOfLinesOfCodePerMethod
    }

    set numberOfLinesOfCodePerMethod(theNumber: number | undefined) {
        this._numberOfLinesOfCodePerMethod = theNumber
    }

    private _numberOfLinesOfCodePerPackage?: number;

    get numberOfLinesOfCodePerPackage() {
        return this._numberOfLinesOfCodePerPackage
    }

    set numberOfLinesOfCodePerPackage(theNumber: number | undefined) {
        this._numberOfLinesOfCodePerPackage = theNumber
    }

    private _numberOfMethods?: number;

    get numberOfMethods() {
        return this._numberOfMethods
    }

    set numberOfMethods(theNumber: number | undefined) {
        this._numberOfMethods = theNumber
    }

    private _numberOfModelClasses?: number;

    get numberOfModelClasses() {
        return this._numberOfModelClasses
    }

    set numberOfModelClasses(theNumber: number | undefined) {
        this._numberOfModelClasses = theNumber
    }

    private _numberOfModelMethods?: number;

    get numberOfModelMethods() {
        return this._numberOfModelMethods
    }

    set numberOfModelMethods(theNumber: number | undefined) {
        this._numberOfModelMethods = theNumber
    }

    private _sourceLanguage?: TSourceLanguage;

    get sourceLanguage() {
        return this._sourceLanguage
    }

    set sourceLanguage(theTsourcelanguage: TSourceLanguage | undefined) {
        this._sourceLanguage = theTsourcelanguage
    }

    addPropertiesToExporter(exporter: FamixMSEExporter) {
        exporter.addProperty("averageCyclomaticComplexity", this.averageCyclomaticComplexity)
        exporter.addProperty("numberOfClasses", this.numberOfClasses)
        exporter.addProperty("numberOfClassesPerPackage", this.numberOfClassesPerPackage)
        exporter.addProperty("numberOfClassesPerPackage", this.numberOfClassesPerPackage)
        exporter.addProperty("numberOfLinesOfCode", this.numberOfLinesOfCode)
        exporter.addProperty("numberOfLinesOfCodePerClass", this.numberOfLinesOfCodePerClass)
        exporter.addProperty("numberOfLinesOfCodePerMethod", this.numberOfLinesOfCodePerMethod)
        exporter.addProperty("numberOfLinesOfCodePerPackage", this.numberOfLinesOfCodePerPackage)
        exporter.addProperty("numberOfMethods", this.numberOfMethods)
        exporter.addProperty("numberOfModelClasses", this.numberOfModelClasses)
        exporter.addProperty("numberOfModelMethods", this.numberOfModelMethods)
        exporter.addProperty("sourceLanguage", this.sourceLanguage)
    }

    getMSE() {
        const mse: FamixMSEExporter = new FamixMSEExporter("Moose.Model", this)
        this.addPropertiesToExporter(mse)
        return mse.getMSE()
    }
}
