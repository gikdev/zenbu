using App.Application.Abstractions.Messaging;

namespace App.Application.Features.Jot.Jottings.Create;

public sealed record CreateJottingCommand(string Title, string Content) : ICommand<JottingResponse>;
