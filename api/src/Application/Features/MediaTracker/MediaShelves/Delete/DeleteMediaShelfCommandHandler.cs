using App.Application.Abstractions.Data;
using App.Application.Abstractions.Identity;
using App.Application.Abstractions.Messaging;
using App.Domain.Common;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace App.Application.Features.MediaTracker.MediaShelves.Delete;

public sealed class DeleteMediaShelfCommandHandler(
    IAppDbContext dbContext,
    ICurrentUser currentUser,
    ILogger<DeleteMediaShelfCommandHandler> logger
) : ICommandHandler<DeleteMediaShelfCommand> {
    public async Task<Result> HandleAsync(DeleteMediaShelfCommand command, CancellationToken cancellationToken = default) {
        var mediaShelf = await dbContext.MediaShelves
            .Where(s => s.Id == command.Id && s.OwnerId.ToString() == currentUser.UserId)
            .FirstOrDefaultAsync(cancellationToken);

        logger.LogInformation(
            "Delete attempt: MediaShelf ID: {Id}, Found OwnerId: {OwnerId}, Requesting UserId: {UserId}",
            command.Id,
            mediaShelf?.OwnerId.ToString() ?? "null/N/A",
            currentUser.UserId
        );

        if (mediaShelf is null) {
            var error = Error.NotFound(
                "MediaShelf.NotFound",
                $"MediaShelf with ID '{command.Id}' was not found."
            );

            return Result.Failure(error);
        }

        dbContext.MediaShelves.Remove(mediaShelf);
        await dbContext.SaveChangesAsync(cancellationToken);

        return Result.Success();
    }
}
