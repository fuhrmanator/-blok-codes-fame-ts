import { FamixBaseElement } from './FamixBaseElement';

export abstract class AbstractFamixRepository<T = FamixBaseElement> {
    protected abstract readonly records: Record<string, T>;
    protected abstract counter: number;

    protected constructor() {}

    abstract getInstance(): AbstractFamixRepository<T>;

    abstract clear(): void;

    abstract toJSON(): string;
}
