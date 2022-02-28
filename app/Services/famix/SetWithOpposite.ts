/**
 * Wrap a Set to support multiple values, e.g., incomingAccesses are a set, but each entry has an "oppositeName"
 */
export abstract class SetWithOpposite<T> extends Set {
    public abstract clearOpposite(value: T): this;

    public abstract setOpposite(value: T): this;

    constructor(values?: readonly T[] | null) {
        super();
        values?.forEach((value) => this.add(value));
    }

    public readonly add = (value: T): this => {
        if (this.has(value)) {
            return this;
        }

        super.add(value);
        this.setOpposite(value);

        return this;
    };

    public readonly delete = (value: T): boolean => {
        const result = super.delete(value);

        if (result) {
            this.clearOpposite(value);
        }

        return result;
    };

    public readonly clear = (): void => {
        for (const value of this) {
            this.delete(value);
        }
    };
}
