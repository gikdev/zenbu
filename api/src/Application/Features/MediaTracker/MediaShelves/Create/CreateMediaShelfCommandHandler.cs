using App.Application.Abstractions.Data;
using App.Application.Abstractions.Identity;
using App.Application.Abstractions.Messaging;
using App.Domain.Common;
using App.Domain.Models.MediaLibrary.MediaShelves;

namespace App.Application.Features.MediaTracker.MediaShelves.Create;

public sealed class CreateMediaShelfCommandHandler(
    IAppDbContext dbContext,
    ICurrentUser currentUser
) : ICommandHandler<CreateMediaShelfCommand, Result<MediaShelfResponse>> {
    public async Task<Result<MediaShelfResponse>> HandleAsync(
        CreateMediaShelfCommand command,
        CancellationToken cancellationToken = default
    ) {
        if (string.IsNullOrWhiteSpace(currentUser.UserId)) {
            return Result.Failure<MediaShelfResponse>(
                Error.Validation(
                    "UserIsNotAuthenticated",
                    "User is not authenticated."
                )
            );
        }

        // 2. Safely parse the string to a Guid
        if (!Guid.TryParse(currentUser.UserId, out var ownerId)) {
            return Result.Failure<MediaShelfResponse>(
                Error.Validation(
                    "InvalidUserIdentifierFormat",
                    "Invalid user identifier format."
                )
            );
        }

        var mediaShelf = new MediaShelf {
            OwnerId = ownerId,
            Name = command.Name,
            Notes = command.Notes,
        };

        dbContext.MediaShelves.Add(mediaShelf);
        await dbContext.SaveChangesAsync(cancellationToken);

        var response = new MediaShelfResponse {
            Id = mediaShelf.Id,
            CreatedAt = mediaShelf.CreatedAt,
            UpdatedAt = mediaShelf.UpdatedAt,
            Name = mediaShelf.Name,
            Notes = mediaShelf.Notes,
        };

        return Result.Success(response);
    }
}
