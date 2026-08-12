namespace App.Domain.Models.MediaLibrary.Services;

public sealed record MediaDashboardInsightsDto {
    public required List<CategoryTotalDto> CategoryTotals { get; init; }
    public required long GlobalTotalMinutes { get; init; }
    public required long GlobalTotalPages { get; init; }
    public required List<ShelfStatusBreakdownDto> ShelfBreakdowns { get; init; }
}

public sealed record CategoryTotalDto(string CategoryName, long Total, string Unit);
public sealed record ShelfStatusBreakdownDto(string ShelfName, int Total, Dictionary<string, int> Counts);
