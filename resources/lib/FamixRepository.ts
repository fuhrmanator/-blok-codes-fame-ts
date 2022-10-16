import { FamixBaseElement } from './FamixBaseElement';

export abstract class FamixRepository {
    protected abstract readonly records: Record<string, unknown>;

    protected abstract counter: number;

    abstract toJSON(): string;

    abstract addElement(element: FamixBaseElement): void;
}
