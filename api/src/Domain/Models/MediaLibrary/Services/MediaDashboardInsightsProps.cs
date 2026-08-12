using App.Domain.Models.MediaLibrary.MediaCategories;
using App.Domain.Models.MediaLibrary.MediaItems;
using App.Domain.Models.MediaLibrary.MediaSessions;
using App.Domain.Models.MediaLibrary.MediaShelves;

namespace App.Domain.Models.MediaLibrary.Services;

public sealed record MediaDashboardInsightsProps {
    public required IReadOnlyList<MediaCategory> Categories { get; init; }
    public required IReadOnlyList<MediaItem> Items { get; init; }
    public required IReadOnlyList<MediaSession> Sessions { get; init; }
    public required IReadOnlyList<MediaShelf> Shelves { get; init; }
}
