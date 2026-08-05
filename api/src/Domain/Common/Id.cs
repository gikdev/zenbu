namespace App.Domain.Common;

public readonly record struct Id<T>(Guid Value) {
    public static Id<T> New() => new(Guid.NewGuid());
    public static Id<T> FromGuid(Guid value) => new(value);
}
