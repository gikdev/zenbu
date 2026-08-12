using App.Domain.Models.MediaLibrary.MediaItems;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace App.Infrastructure.Persistence.Configurations;

public sealed class MediaItemConfiguration : IEntityTypeConfiguration<MediaItem> {
    public void Configure(EntityTypeBuilder<MediaItem> builder) {
        builder.Property(x => x.Id)
            .ValueGeneratedNever();
    }
}
