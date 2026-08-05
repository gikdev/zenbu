using App.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace App.Application.Abstractions.Data;

public interface IAppDbContext {
    DbSet<TodoItem> Todos { get; }
    Task<int> SaveChangesAsync(CancellationToken cancellationToken = default);
}
