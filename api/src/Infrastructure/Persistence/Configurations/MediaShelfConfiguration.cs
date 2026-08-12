using App.Domain.Models.MediaLibrary.MediaShelves;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace App.Infrastructure.Persistence.Configurations;

public sealed class MediaShelfConfiguration : IEntityTypeConfiguration<MediaShelf> {
    public void Configure(EntityTypeBuilder<MediaShelf> builder) {
        builder.Property(x => x.Id)
            .ValueGeneratedNever();
    }
}
