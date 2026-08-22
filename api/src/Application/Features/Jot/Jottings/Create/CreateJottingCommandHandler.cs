using App.Application.Abstractions.Data;
using App.Application.Abstractions.Identity;
using App.Application.Abstractions.Messaging;
using App.Domain.Models.Jot;

namespace App.Application.Features.Jot.Jottings.Create;

public sealed class CreateJottingCommandHandler(
    IAppDbContext db,
    ICurrentUser user
) : ICommandHandler<CreateJottingCommand, JottingResponse> {
    public async Task<JottingResponse> HandleAsync(CreateJottingCommand command, CancellationToken cancellationToken = default) {
        var newJotting = new Jotting {
            Content = command.Content,
            OwnerId = user.UserIdGuid,
            Title = command.Title,
        };

        db.Jottings.Add(newJotting);
        await db.SaveChangesAsync(cancellationToken);

        return JottingResponse.FromDomain(newJotting);
    }
}
