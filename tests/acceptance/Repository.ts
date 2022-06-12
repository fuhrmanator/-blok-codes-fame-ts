import { FamixRepository } from '../../resources/generated/FamixRepository';
import { Class } from '../../resources/generated/FamixTypeScript/Class';
import { ScopingEntity } from '../../resources/generated/FamixTypeScript/ScopingEntity';

describe('FamixRepository', () => {
    let repo: FamixRepository;

    let clazz: Class;
    let entity: ScopingEntity;

    beforeAll(() => {
        repo = new FamixRepository();
    });

    describe('Class', () => {
        beforeAll(() => {
            clazz = new Class(repo);
        });

        it('should instantiate', () => {
            expect(clazz).toBeTruthy();
        });

        it('should have an id', () => {
            expect(clazz.id).toBe(1);
        });

        it('should have a name', () => {
            expect(clazz.name).toBe('weightOfAClass');
        });

        it('should export JSON', () => {
            expect(clazz.toJSON()).toEqual(
                JSON.stringify({
                    FM3: 'FamixTypeScript.Class',
                    id: 1,
                })
            );
        });
    });

    describe('ScopingEntity', () => {
        beforeAll(() => {
            entity = new ScopingEntity(repo);
        });

        it('should instantiate', () => {
            expect(entity).toBeTruthy();
        });

        it('should have an id', () => {
            expect(entity.id).toBe(2);
        });

        it('should have a name', () => {
            expect(entity.name).toBe('numberOfClasses');
        });

        it('should export JSON', () => {
            expect(entity.toJSON()).toEqual(
                JSON.stringify({
                    FM3: 'FamixTypeScript.ScopingEntity',
                    id: 2,
                })
            );
        });
    });
});
