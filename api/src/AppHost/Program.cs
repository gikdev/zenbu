var builder = DistributedApplication.CreateBuilder(args);

var sqlite = builder.AddSqlite(
    name: "sqlite",
    databasePath: Path.Join(".", "Data"),
    databaseFileName: "app.db"
);

builder.AddProject<Projects.App_Api>("api")
    .WithReference(sqlite)
    .WaitFor(sqlite)
    .WithExternalHttpEndpoints();

builder.Build().Run();
