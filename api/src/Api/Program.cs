using App.Api.Endpoints;
using App.Api.Extensions;
using App.Application;
using App.Infrastructure;
using App.Infrastructure.Persistence;
using App.ServiceDefaults;
using Microsoft.OpenApi;
using Scalar.AspNetCore;
using Serilog;

Log.Logger = new LoggerConfiguration()
    .WriteTo.Console()
    .CreateBootstrapLogger();

try {
    var builder = WebApplication.CreateBuilder(args);

    // Aspire service defaults (OpenTelemetry, health checks, service discovery)
    builder.AddServiceDefaults();

    // Serilog
    builder.Host.UseSerilog(
        (ctx, loggerConfig) => loggerConfig.ReadFrom.Configuration(ctx.Configuration)
    );

    builder.Services.AddLocalization(
        // options => options.ResourcesPath = "Resources"
    );

    builder.Services.Configure<RequestLocalizationOptions>(options => {
        string[] cultures = ["en", "fa", "ja"];

        options
            .SetDefaultCulture(cultures[0])
            .AddSupportedCultures(cultures)
            .AddSupportedUICultures(cultures);
    });

    // Aspire-managed SQLite
    builder.AddSqliteConnection("sqlite");

    // Application & Infrastructure
    builder.Services.AddApplication();
    builder.Services.AddInfrastructure(builder.Configuration);

    // Global exception handling
    builder.Services.AddExceptionHandler<GlobalExceptionHandler>();

    // OpenAPI with JWT Bearer security scheme
    builder.Services.AddOpenApi(options => {
        options.AddDocumentTransformer((document, _, _) => {
            var info = document.Info ?? new OpenApiInfo();
            info.Title = "App API";
            info.Description = "A production-ready Clean Architecture template for .NET 10 by Mukesh Murugan";
            info.Contact = new OpenApiContact {
                Name = "Mukesh Murugan",
                Url = new Uri("https://codewithmukesh.com")
            };
            document.Info = info;

            var components = document.Components ?? new OpenApiComponents();
            components.SecuritySchemes ??= new Dictionary<string, IOpenApiSecurityScheme>();
            components.SecuritySchemes["Bearer"] = new OpenApiSecurityScheme {
                Type = SecuritySchemeType.Http,
                Scheme = "bearer",
                BearerFormat = "JWT",
                Description = "Enter your JWT token"
            };

            document.Components = components;

            var schemeReference = new OpenApiSecuritySchemeReference("Bearer");
            var securityRequirement = new OpenApiSecurityRequirement {
                [schemeReference] = []
            };

            document.Security ??= [];
            document.Security.Add(securityRequirement);
            return Task.CompletedTask;
        });
    });

    // ProblemDetails
    builder.Services.AddProblemDetails();

    var app = builder.Build();

    // Global exception handler
    app.UseExceptionHandler();
    app.UseStatusCodePages();

    app.UseRequestLocalization();

    app.MapOpenApi();
    app.MapOpenApi("openapi.yml");
    app.MapScalarApiReference(options => {
        options.WithTitle("App API");
        options.WithDefaultHttpClient(ScalarTarget.JavaScript, ScalarClient.Fetch);
    });

    app.UseAuthentication();
    app.UseAuthorization();

    app.UseSerilogRequestLogging();

    // Map endpoints
    app.MapIdentityEndpoints();
    app.MapTodoEndpoints();
    app.MapWelcomeEndpoints();

    // Aspire default endpoints (health, alive)
    app.MapDefaultEndpoints();

    // Seed database in development
    if (app.Environment.IsDevelopment()) {
        await AppDbSeeder.SeedAsync(app.Services);
    }

    await app.RunAsync();
} catch (Exception ex) when (ex is not HostAbortedException) {
    Log.Fatal(ex, "Application terminated unexpectedly");
} finally {
    await Log.CloseAndFlushAsync();
}
