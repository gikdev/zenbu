using App.Domain.Common;

namespace App.Domain.Models.MediaLibrary.MediaCategories;

public sealed class MediaCategory : AggregateRoot, IHasOwner {
    public required Guid OwnerId { get; init; }
    public required string Title { get; set; }
    public required MediaFormat Format { get; set; }
    public MediaUnit Unit => Format switch {
        MediaFormat.Video => MediaUnit.Minutes,
        MediaFormat.Audio => MediaUnit.Minutes,
        MediaFormat.Text => MediaUnit.Pages,
        _ => MediaUnit.Other
    };
}
