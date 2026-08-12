
namespace App.Application.Features.MediaTracker.MediaShelves;

public sealed record MediaShelfResponse {
    public required Guid Id { get; init; }
    public required DateTimeOffset CreatedAt { get; init; }
    public required DateTimeOffset? UpdatedAt { get; init; }

    public required string Name { get; init; }
    public required string? Notes { get; init; }
}
