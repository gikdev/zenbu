using App.Application.Abstractions.Messaging;
using App.Domain.Common;

namespace App.Application.Features.MediaTracker.MediaShelves.Create;

public sealed record CreateMediaShelfCommand(
    string Name,
    string? Notes
) : ICommand<Result<MediaShelfResponse>>;
