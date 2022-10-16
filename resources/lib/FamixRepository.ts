import { FamixBaseElement } from './FamixBaseElement';

export abstract class FamixRepository<T = FamixBaseElement> {
    protected abstract readonly records: Record<string, T>;

    protected abstract counter: number;

    abstract getInstance(): FamixRepository<T>;

    abstract clear(): void;

    abstract toJSON(): string;

    abstract addElement(element: T): void;
}
