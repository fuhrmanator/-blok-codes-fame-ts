import { Exception } from '../../../../app/Exceptions/Exception';
import { getAccessorsDefinitionTemplate, getSetWithOppositeTemplate } from '../../../../app/Services/helpers';

describe('Template', () => {
    it('should get set with opposite template', () => {
        const param = {
            base: 'One',
            className: 'Test',
            oppositeName: 'WithoutTest',
            typeName: 'Test',
        };

        expect(getSetWithOppositeTemplate(param)).toEqual(
            `new class extends SetWithOpposite<Test> {\n` +
                `  constructor(private context: Test) { super(); }\n` +
                `  clearOpposite(value: Test): this {\n` +
                `    value.WithoutTest = undefined;\n` +
                `    return this;\n` +
                `  }\n` +
                `  setOpposite(value: Test): this {\n` +
                `    value.WithoutTest = this.context;\n` +
                `    return this;\n` +
                `  }\n` +
                `}(this as any) /* pass outer this */`
        );
    });

    it('should get set with opposite template many many', () => {
        const param = {
            base: 'ManyMany',
            className: 'Test',
            oppositeName: 'WithoutTest',
            typeName: 'Test',
        };

        expect(getSetWithOppositeTemplate(param)).toEqual(
            `new class extends SetWithOpposite<Test> {\n` +
                `  constructor(private context: Test) { super(); }\n` +
                `  clearOpposite(value: Test): this {\n` +
                `    const set = new Set(value.WithoutTest);\n` +
                `    set.delete(this.context);\n` +
                `    value.WithoutTest = [...set];\n` +
                `    return this;\n` +
                `  }\n` +
                `  setOpposite(value: Test): this {\n` +
                `    const set = new Set(value.WithoutTest);\n` +
                `    set.add(this.context);\n` +
                `    value.WithoutTest = [...set];\n` +
                `    return this;\n` +
                `  }\n` +
                `}(this as any) /* pass outer this */`
        );
    });

    it('should get accessors definition template with one relationship', () => {
        const param = {
            base: 'One',
            multivalued: false,
            oppositeName: 'WithoutTest',
            propName: 'test',
            typeName: 'Test',
        };

        expect(getAccessorsDefinitionTemplate(param)).toEqual({
            getAccessor: {
                name: 'test',
                returnType: 'Test',
                statements: ['return this._test;'],
            },
            setAccessor: {
                name: 'test',
                parameters: [{ name: 'theTest', type: 'Test | undefined' }],
                statements: ['this._test = theTest;'],
            },
        });
    });

    it('should get accessors definition template with many relationships', () => {
        const param = {
            base: 'Many',
            multivalued: true,
            oppositeName: 'WithoutTest',
            propName: 'test',
            typeName: 'Test',
        };

        expect(getAccessorsDefinitionTemplate(param)).toEqual({
            getAccessor: {
                name: 'test',
                returnType: 'Test[]',
                statements: ['return [...this._test];'],
            },
            setAccessor: {
                name: 'test',
                parameters: [{ name: 'theTestSet', type: 'Test[]' }],
                statements: ['this._test = JSON.parse(JSON.stringify(theTestSet)); //deep copy'],
            },
        });
    });

    it('should get accessors definition template with many to one relationship', () => {
        const param = {
            base: 'ManyOne',
            multivalued: false,
            oppositeName: 'WithoutTest',
            propName: 'test',
            typeName: 'Test',
        };

        expect(getAccessorsDefinitionTemplate(param)).toEqual({
            getAccessor: {
                name: 'test',
                returnType: 'Test',
                statements: ['return this._test;'],
            },
            setAccessor: {
                name: 'test',
                parameters: [{ name: 'theTestSet', type: 'Test[]' }],
                statements: ['this._test = JSON.parse(JSON.stringify(theTestSet)); // deep copy'],
            },
        });
    });

    it('should get accessors definition template with one to many relationship', () => {
        const param = {
            base: 'OneMany',
            multivalued: true,
            oppositeName: 'WithoutTest',
            propName: 'test',
            typeName: 'Test',
        };

        expect(getAccessorsDefinitionTemplate(param)).toEqual({
            getAccessor: {
                name: 'test',
                returnType: 'Test[]',
                statements: ['return [...this._test];'],
            },
            setAccessor: {
                name: 'test',
                parameters: [{ name: 'theTestSet', type: 'Test | undefined' }],
                statements: [
                    `if (this._test != null) {`,
                    `   if (this._test === theTestSet) return;`,
                    `   const set = new Set(this._test.WithoutTest);`,
                    `   set.delete(this);`,
                    `   this._test.WithoutTest = [...set];`,
                    `}`,
                    `this._test = theTestSet;`,
                    `if (theTestSet == null) return;`,
                    `const set = new Set(theTestSet.WithoutTest);`,
                    `set.add(this);`,
                    `theTestSet.WithoutTest = [...set];`,
                ],
            },
        });
    });

    it('should get accessors definition template with one to one relationship', () => {
        const param = {
            base: 'OneOne',
            multivalued: false,
            oppositeName: 'WithoutTest',
            propName: 'test',
            typeName: 'Test',
        };

        expect(getAccessorsDefinitionTemplate(param)).toEqual({
            getAccessor: {
                name: 'test',
                returnType: 'Test',
                statements: ['return this._test;'],
            },
            setAccessor: {
                name: 'test',
                parameters: [{ name: 'theTestSet', type: 'Test | undefined' }],
                statements: [
                    `if (this._test == null ? theTestSet !== null : this._test !== theTestSet) {`,
                    `  const old_test = this._test;`,
                    `  this._test = theTestSet;`,
                    `  if (old_test !== null) old_test.WithoutTest = null;`,
                    `  if (theTestSet !== null) theTestSet.WithoutTest = this;`,
                    `}`,
                ],
            },
        });
    });

    it('should get accessors definition template with many to many relationship', () => {
        const param = {
            base: 'ManyMany',
            multivalued: false,
            oppositeName: 'WithoutTest',
            propName: 'test',
            typeName: 'Test',
        };

        expect(getAccessorsDefinitionTemplate(param)).toEqual({
            getAccessor: {
                name: 'test',
                returnType: 'Test',
                statements: ['return this._test;'],
            },
            setAccessor: {
                name: 'test',
                parameters: [{ name: 'theTestSet', type: 'Test[]' }],
                statements: ['this._test = JSON.parse(JSON.stringify(theTestSet)); // deep copy'],
            },
        });
    });

    it('should throw error when get accessors definition template with invalid base', () => {
        const param = {
            base: 'Invalid',
            multivalued: false,
            oppositeName: 'WithoutTest',
            propName: 'test',
            typeName: 'Test',
        };

        expect(() => getAccessorsDefinitionTemplate(param)).toThrowError(Exception);
        expect(() => getAccessorsDefinitionTemplate(param)).toThrowError('invalid value for Invalid (switch)');
    });
});
