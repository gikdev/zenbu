using App.Application.Abstractions.Messaging;
using App.Domain.Common;
using App.Domain.Models.MediaLibrary.MediaShelves;

namespace App.Application.Features.MediaTracker.MediaShelves.Create;

public sealed record CreateMediaShelfCommand : ICommand<Result<MediaShelf>> {
    public required string Name { get; init; }
    public required string? Notes { get; init; }
}
