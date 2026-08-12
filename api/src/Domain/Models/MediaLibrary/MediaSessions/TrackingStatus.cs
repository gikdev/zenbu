namespace App.Domain.Models.MediaLibrary.MediaSessions;

public enum TrackingStatus {
    Planned = 0,
    Consuming = 1,
    OnHold = 2,
    Completed = 3,
    Dropped = 4,
}
