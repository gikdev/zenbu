namespace App.Application.Features.Jot.Jottings;

public sealed record JottingResponse {
    public required Guid Id { get; init; }
    public required string Title { get; init; }
    public required string Content { get; init; }
}
