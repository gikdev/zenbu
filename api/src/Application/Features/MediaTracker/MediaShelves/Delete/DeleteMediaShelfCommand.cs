using App.Application.Abstractions.Messaging;

namespace App.Application.Features.MediaTracker.MediaShelves.Delete;

public sealed record DeleteMediaShelfCommand(Guid Id) : ICommand;
