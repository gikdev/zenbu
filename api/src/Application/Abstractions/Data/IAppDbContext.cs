using App.Domain.Models;
using App.Domain.Models.MediaLibrary.MediaCategories;
using App.Domain.Models.MediaLibrary.MediaItems;
using App.Domain.Models.MediaLibrary.MediaSessions;
using App.Domain.Models.MediaLibrary.MediaShelves;
using Microsoft.EntityFrameworkCore;

namespace App.Application.Abstractions.Data;

public interface IAppDbContext {
    DbSet<MediaCategory> MediaCategories { get; }
    DbSet<MediaItem> MediaItems { get; }
    DbSet<MediaSession> MediaSessions { get; }
    DbSet<MediaShelf> MediaShelves { get; }
    DbSet<TodoItem> Todos { get; }
    Task<int> SaveChangesAsync(CancellationToken cancellationToken = default);
}
