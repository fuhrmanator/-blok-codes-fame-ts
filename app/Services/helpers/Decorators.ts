/* eslint-disable @typescript-eslint/no-explicit-any */
import { Package, Property } from '../generated/TypescriptMetaModel';

type FameDescriptionParam = {
    fameDescription: string;
    famePackage: Package;
    fameProperties?: [Property];
};

type FamePropertyParam = {
    container?: boolean;
    derived?: boolean;
    name?: string;
    opposite?: string;
    type?: string;
};

export const FameDescription =
    (param: FameDescriptionParam): any =>
    (target: any): void => {
        target.famePackage = param.famePackage;
        target.fameDescription = param.fameDescription;
        target.fameProperties = param.fameProperties;
    };

export const FameProperty =
    (param: FamePropertyParam): any =>
    (target: any): void => {
        target.container = param.container;
        target.derived = param.derived;
        target.name = param.name;
        target.opposite = param.opposite;
        target.type = param.type;
    };
