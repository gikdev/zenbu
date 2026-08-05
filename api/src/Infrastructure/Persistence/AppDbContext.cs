using App.Application.Abstractions.Data;
using App.Domain.Common;
using App.Domain.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace App.Infrastructure.Persistence;

public sealed class AppDbContext(
    DbContextOptions<AppDbContext> options
) : IdentityDbContext<ApplicationUser>(options), IAppDbContext {
    public DbSet<TodoItem> Todos => Set<TodoItem>();

    public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default) {
        UpdateAuditableEntities();
        return base.SaveChangesAsync(cancellationToken);
    }

    protected override void OnModelCreating(ModelBuilder builder) {
        base.OnModelCreating(builder);
        builder.ApplyConfigurationsFromAssembly(typeof(AppDbContext).Assembly);
    }

    private void UpdateAuditableEntities() {
        var entries = ChangeTracker.Entries<IEntity>();

        foreach (var entry in entries) {
            switch (entry.State) {
                case EntityState.Added:
                    entry.Entity.CreatedAt = DateTimeOffset.UtcNow;
                    break;
                case EntityState.Modified:
                    entry.Entity.LastModifiedAt = DateTimeOffset.UtcNow;
                    break;
            }
        }
    }
}
