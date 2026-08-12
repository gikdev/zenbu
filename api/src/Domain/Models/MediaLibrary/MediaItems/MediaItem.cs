using App.Domain.Common;

namespace App.Domain.Models.MediaLibrary.MediaItems;

public sealed class MediaItem : AggregateRoot, IHasOwner {
    public required Guid OwnerId { get; init; }
    public required Guid CategoryId { get; set; }
    public required string Title { get; set; }
    public required uint? StandardLength { get; set; }
    public string? Notes { get; set; }
}
