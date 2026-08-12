using App.Domain.Common;

namespace App.Domain.Models.MediaLibrary;

public sealed class MediaShelf : AggregateRoot, IHasOwner {
    public required Guid OwnerId { get; init; }
    public required string Name { get; set; }
    public string? Notes { get; set; }
}
