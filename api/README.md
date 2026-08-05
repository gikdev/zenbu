# CWM Clean Architecture Template

`v1.0.0` | .NET 10 | C# 14 | Aspire 13 | EF Core 10 | xUnit v3

A production-ready **Clean Architecture** starter template for **.NET 10** by [Mukesh Murugan](https://codewithmukesh.com).

Built with the latest packages, zero commercial dependencies, and everything you need to start shipping features from day one.

## Architecture

- Api Layer
  - Depends On 🔽
- Infrastructure Layer
  - Depends On 🔽
- Application Layer
  - Depends On 🔽
- Domain Layer

## Getting Started

### Prerequisites

- [.NET 10 SDK](https://dotnet.microsoft.com/download/dotnet/10.0)

### Run with Aspire (recommended)

```bash
cd src/App.AppHost
dotnet run
```

This starts everything:
- **SQLite** database
- **API** with auto-migration and seed data
- **Aspire Dashboard** for OpenTelemetry (traces, metrics, logs)

Open the Aspire Dashboard URL from the console output to see your telemetry.

### Run without Aspire

```bash
# Run the API
cd src/App.Api
dotnet run
```

### Explore the API

Navigate to `https://localhost:7200/scalar/v1` for the interactive Scalar API docs.

**Default admin credentials** (seeded automatically):
- Email: `admin@app.dev`
- Password: `Admin@123`

### Run Tests

```bash
dotnet test App.slnx
```

## Sample: Todos Feature

The template includes a complete **Todos** CRUD feature as a reference implementation:

| Endpoint | Method | Auth | Description |
|----------|--------|------|-------------|
| `/api/todos` | GET | Yes | Get all todos (paginated) |
| `/api/todos/{id}` | GET | Yes | Get a todo by ID |
| `/api/todos` | POST | Yes | Create a new todo |
| `/api/todos/{id}` | PUT | Yes | Update a todo |
| `/api/todos/{id}/complete` | PATCH | Yes | Mark as completed |
| `/api/todos/{id}` | DELETE | Yes | Delete a todo |

### Adding a New Feature

Follow the Todos pattern:

1. **Domain** — Add your entity in `Domain/Entities/`
2. **Application** — Create a feature folder in `Application/Features/YourFeature/` with command/query records, handlers, and validators
3. **Infrastructure** — Add EF Core configuration in `Infrastructure/Persistence/Configurations/` and repository in `Infrastructure/Persistence/Repositories/`
4. **Api** — Add endpoints in `Api/Endpoints/` and register in `Program.cs`

## Key Design Decisions

| Decision | Why |
|----------|-----|
| **Manual CQRS** over MediatR | Zero licensing risk. MediatR is commercial since v13. You learn the pattern, not a library. |
| **Scalar** over Swagger UI | Modern, faster, better UX. Swagger UI is legacy. |
| **HybridCache** over IMemoryCache | Built-in stampede protection, L1+L2 cache, automatic serialization. |
| **Result pattern** over exceptions | Explicit error handling, no hidden control flow, better API contracts. |
| **Manual handler registration** over Scrutor | Zero dependencies for DI scanning. Assembly reflection is 40 lines of code. |
| **.slnx** over .sln | XML-based, merge-friendly, smaller, future of .NET solutions. |

## About

Built by [Mukesh Murugan](https://codewithmukesh.com) — .NET content creator helping developers build production-ready applications. ([Newsletter](https://codewithmukesh.com/newsletter))
