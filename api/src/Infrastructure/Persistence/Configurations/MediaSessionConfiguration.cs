using App.Domain.Models.MediaLibrary.MediaSessions;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace App.Infrastructure.Persistence.Configurations;

public sealed class MediaSessionConfiguration : IEntityTypeConfiguration<MediaSession> {
    public void Configure(EntityTypeBuilder<MediaSession> builder) {
        builder.Property(x => x.Id)
            .ValueGeneratedNever();
    }
}
