using App.Domain.Models.MediaLibrary.MediaCategories;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace App.Infrastructure.Persistence.Configurations;

public sealed class MediaCategoryConfiguration : IEntityTypeConfiguration<MediaCategory> {
    public void Configure(EntityTypeBuilder<MediaCategory> builder) {
        builder.Property(x => x.Id)
            .ValueGeneratedNever();

        builder.Ignore(x => x.Unit);
    }
}
