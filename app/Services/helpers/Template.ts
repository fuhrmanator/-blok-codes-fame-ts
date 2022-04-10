import { camelCase } from 'lodash';
import { GetAccessorDeclarationStructure, OptionalKind, SetAccessorDeclarationStructure } from 'ts-morph';

import { Exception } from '../../Exceptions/Exception';

type SetWithOppositeTemplateParam = {
    base: string;
    className: string;
    oppositeName: string;
    typeName: string;
};

type AccessorsDefinitionTemplateParam = {
    base: string;
    multivalued: boolean;
    oppositeName: string;
    propName: string;
    typeName: string;
};

type AccessorsDefinitionTemplate = {
    getAccessor: OptionalKind<GetAccessorDeclarationStructure>;
    setAccessor: OptionalKind<SetAccessorDeclarationStructure>;
};

export const getSetWithOppositeTemplate = (param: SetWithOppositeTemplateParam): string =>
    `new class extends SetWithOpposite<${param.typeName}> {\n` +
    `  constructor(private context: ${param.className}) { super(); }\n` +
    `  clearOpposite(value: ${param.typeName}): this {\n` +
    (param.base === 'ManyMany'
        ? `    value.${param.oppositeName}.delete(this.context);\n`
        : `    value.${param.oppositeName} = undefined;\n`) +
    `    return this;\n` +
    `  }\n` +
    `  setOpposite(value: ${param.typeName}): this {\n` +
    (param.base === 'ManyMany'
        ? `    value.${param.oppositeName}.add(this.context);\n`
        : `    value.${param.oppositeName} = this.context;\n`) +
    `    return this;\n` +
    `  }\n` +
    `}(this) /* pass outer this */`;

export const getAccessorsDefinitionTemplate = (
    param: AccessorsDefinitionTemplateParam
): AccessorsDefinitionTemplate => {
    const setter = param.base === 'One' ? camelCase(`the ${param.typeName}`) : camelCase(`the ${param.typeName} Set`);

    let getAccessor: AccessorsDefinitionTemplate['getAccessor'] = {
        name: param.propName,
        returnType: param.multivalued ? `Set<${param.typeName}>` : param.typeName,
        statements: [`return this._${param.propName}`],
    };

    let setAccessor: AccessorsDefinitionTemplate['setAccessor'] = {
        name: param.propName,
        parameters: [{ name: setter, type: `${param.typeName} | undefined` }],
        statements: [`this._${param.propName} = ${setter}`],
    };

    switch (param.base) {
        case 'One':
            // getter/setter already initialized above
            break;
        case 'Many':
            setAccessor = {
                name: param.propName,
                parameters: [{ name: setter, type: `Set<${param.typeName}>` }],
                statements: [`this._${param.propName} = JSON.parse(JSON.stringify(${setter})); //deep copy`],
            };
            break;
        case 'ManyOne':
            setAccessor = {
                name: param.propName,
                parameters: [{ name: setter, type: `Set<${param.typeName}>` }],
                statements: [`this._${param.propName} = JSON.parse(JSON.stringify(${setter})); // deep copy`],
            };
            break;
        case 'OneMany':
            setAccessor = {
                name: param.propName,
                parameters: [{ name: setter, type: `${param.typeName} | undefined` }],
                statements: [
                    `if (this._${param.propName} != null) {`,
                    `   if (this._${param.propName} === ${setter}) return;`,
                    `   this._${param.propName}.${param.oppositeName}.delete(this);`,
                    `}`,
                    `this._${param.propName} = ${setter};`,
                    `if (${setter} == null) return;`,
                    `${setter}.${param.oppositeName}.add(this);`,
                ],
            };
            break;
        case 'OneOne':
            setAccessor = {
                name: param.propName,
                parameters: [{ name: setter, type: `${param.typeName} | undefined` }],
                statements: [
                    `if (this._${param.propName} == null ? ${setter} !== null : !this._${param.propName} === ${setter}) {`,
                    `  const old_${param.propName} = this._${param.propName};`,
                    `  this._${param.propName} = ${setter};`,
                    `  if (old_${param.propName} !== null) old_${param.propName}.${param.oppositeName} = null;`,
                    `  if (${setter} !== null) ${setter}.${param.oppositeName} = this;`,
                    `}`,
                ],
            };
            break;
        case 'ManyMany':
            setAccessor = {
                name: param.propName,
                parameters: [{ name: setter, type: `Set<${param.typeName}>` }],
                statements: [`this._${param.propName} = JSON.parse(JSON.stringify(${setter})); // deep copy`],
            };
            break;
        default:
            throw new Exception(`invalid value for ${param.base} (switch)`);
    }

    return { getAccessor, setAccessor };
};
