using App.Domain.Models.MediaLibrary.MediaCategories;
using App.Domain.Models.MediaLibrary.MediaSessions;

namespace App.Domain.Models.MediaLibrary.Services;

public static class MediaDashboardInsightsService {
    public static MediaDashboardInsightsDto Generate(
        MediaDashboardInsightsProps p
    ) {
        // Completed sessions joined with categories
        var completedSessions = p.Sessions
            .Where(s => s.TrackingStatus == TrackingStatus.Completed)
            .Join(
                p.Items,
                s => s.MediaItemId,
                i => i.Id,
                (session, item) => new { session, item }
            )
            .Join(
                p.Categories,
                x => x.item.CategoryId,
                c => c.Id,
                (x, category) => new { x.session, x.item, category }
            )
            .ToList();

        // 1. Time per Category (Convert Unit to string)
        var categoryTotals = completedSessions
            .GroupBy(x => x.category.Title)
            .Select(g => new CategoryTotalDto(
                CategoryName: g.Key,
                Total: g.Sum(x => x.session.ActualTimeSpent ?? x.item.StandardLength ?? 0),
                Unit: g.First().category.Unit.ToString()
            ))
            .ToList();

        // 2. Global Totals (No enums here, stays the same)
        long globalTotalPages = completedSessions
            .Where(x => x.category.Unit == MediaUnit.Pages)
            .Sum(x => x.session.ActualTimeSpent ?? x.item.StandardLength ?? 0);

        long globalTotalMinutes = completedSessions
            .Where(x => x.category.Unit == MediaUnit.Minutes)
            .Sum(x => x.session.ActualTimeSpent ?? x.item.StandardLength ?? 0);

        // 3. Shelf Status Breakdown (Convert TrackingStatus key to string)
        var shelfStatusBreakdowns = p.Sessions
            .Join(
                p.Shelves,
                s => s.MediaShelfId,
                sh => sh.Id,
                (session, shelf) => new { session, shelf }
            )
            .GroupBy(x => x.shelf.Name)
            .Select(g => new ShelfStatusBreakdownDto(
                ShelfName: g.Key,
                Total: g.Count(),
                Counts: g.GroupBy(x => x.session.TrackingStatus)
                         .ToDictionary(
                            x => x.Key.ToString(),
                            x => x.Count()
                         )
            ))
            .ToList();

        return new MediaDashboardInsightsDto {
            CategoryTotals = categoryTotals,
            GlobalTotalMinutes = globalTotalMinutes,
            GlobalTotalPages = globalTotalPages,
            ShelfBreakdowns = shelfStatusBreakdowns,
        };
    }
}
