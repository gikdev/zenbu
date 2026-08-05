namespace App.Domain.Common;

public abstract class DomainEvent : IDomainEvent {
    public DateTimeOffset OccurredAt { get; } = DateTimeOffset.UtcNow;
}
