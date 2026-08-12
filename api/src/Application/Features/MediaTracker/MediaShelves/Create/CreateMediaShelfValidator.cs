using FluentValidation;

namespace App.Application.Features.MediaTracker.MediaShelves.Create;

public sealed class CreateMediaShelfValidator : AbstractValidator<CreateMediaShelfCommand> {
    public CreateMediaShelfValidator() {
        RuleFor(x => x.Name)
            .NotEmpty()
            .MaximumLength(200);

        RuleFor(x => x.Notes)
            .MaximumLength(1000);
    }
}
