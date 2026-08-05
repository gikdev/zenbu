using App.Domain.Common;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace App.Infrastructure.Persistence.Common;

public class IdValueConverter<T> : ValueConverter<Id<T>, Guid> {
    public IdValueConverter() : base(
        id => id.Value,
        value => Id<T>.FromGuid(value)
    ) {}
}
