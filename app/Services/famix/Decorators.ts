/* eslint-disable @typescript-eslint/no-explicit-any */
interface Package {
    ref: number;
}

interface Property {
    FM3: PropertyFM3;
    id: number;
    name: string;
    class: Package;
    container: boolean;
    derived: boolean;
    multivalued: boolean;
    opposite?: Package;
    type: Superclass;
}

enum PropertyFM3 {
    FM3Property = 'FM3.Property',
}

interface Superclass {
    ref: RefEnum | number;
}

enum RefEnum {
    Boolean = 'Boolean',
    Number = 'Number',
    Object = 'Object',
    String = 'String',
}

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
