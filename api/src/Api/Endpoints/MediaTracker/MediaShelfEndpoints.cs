using App.Api.Extensions;
using App.Application.Abstractions.Messaging;
using App.Application.Features.MediaTracker.MediaShelves;
using App.Application.Features.MediaTracker.MediaShelves.Create;
using App.Application.Features.MediaTracker.MediaShelves.Delete;
using App.Domain.Common;

namespace App.Api.Endpoints.MediaTracker;

public static class MediaShelfEndpoints {
    public static void MapMediaTrackerMediaShelfEndpoints(this IEndpointRouteBuilder app) {
        var group = app
            .MapGroup("/api/media-tracker/media-shelves")
            .WithTags("Media Shelves")
            .RequireAuthorization()
            .ProducesProblem(StatusCodes.Status401Unauthorized);

        // --------------------

        group.MapPost(
            "/",
            async (
                CreateMediaShelfCommand command,
                ICommandHandler<CreateMediaShelfCommand, Result<MediaShelfResponse>> handler,
                CancellationToken cancellationToken
            ) => EndpointUtils.AutoResolveCreatedAt(
                await handler.HandleAsync(command, cancellationToken),
                "GetTodoById",
                value => new { id = value.Id }
            )
        )
        .AddEndpointFilter<ValidationFilter<CreateMediaShelfCommand>>()
        .WithName("CreateMediaShelf")
        .WithSummary("Create a new media shelf")
        .Produces<MediaShelfResponse>(StatusCodes.Status201Created)
        .ProducesValidationProblem(StatusCodes.Status400BadRequest)
        .Produces(StatusCodes.Status401Unauthorized);

        // --------------------

        group.MapDelete(
            "/{id:guid}",
            async (
                Guid id,
                ICommandHandler<DeleteMediaShelfCommand, Result> handler,
                CancellationToken cancellationToken
            ) => EndpointUtils.AutoResolveNoContent(
                await handler.HandleAsync(new DeleteMediaShelfCommand(id), cancellationToken)
            )
        )
        .WithName("DeleteMediaShelf")
        .WithSummary("Delete a media shelf")
        .Produces(StatusCodes.Status204NoContent)
        .Produces(StatusCodes.Status404NotFound);
    }
}
