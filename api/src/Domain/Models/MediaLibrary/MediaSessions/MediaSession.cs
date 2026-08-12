using App.Domain.Common;

namespace App.Domain.Models.MediaLibrary.MediaSessions;

public sealed class MediaSession : AggregateRoot, IHasOwner {
    public required Guid OwnerId { get; init; }
    public required Guid MediaItemId { get; init; }
    public required Guid MediaShelfId { get; init; }
    public TrackingStatus TrackingStatus { get; private set; } = TrackingStatus.Planned;
    public string? Notes { get; set; }
    public uint? ActualTimeSpent { get; set; }
    public DateTimeOffset? StartedAt { get; private set; }
    public DateTimeOffset? CompletedAt { get; private set; }

    public void SetTrackingStatus(TrackingStatus status) {
        if (status == TrackingStatus.Consuming) {
            StartedAt = DateTimeOffset.UtcNow;
        }

        if (status == TrackingStatus.Completed) {
            CompletedAt = DateTimeOffset.UtcNow;
        }

        TrackingStatus = status;
    }
}
