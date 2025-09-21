using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi.Models;
using SameApi.Business;
using SameApi.Db;
using Swashbuckle.AspNetCore.SwaggerGen;
using Swashbuckle.AspNetCore.SwaggerUI;

var builder = WebApplication.CreateBuilder(args);

// -------------------- CORS --------------------
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactDevClient", policy =>
    {
        policy.WithOrigins("http://localhost:3000")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

// -------------------- Controllers --------------------
builder.Services.AddControllers();

// -------------------- Swagger --------------------
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "Api Test",
        Version = "v1"
    });

    c.AddServer(new OpenApiServer
    {
        Url = "https://localhost:7171",
        Description = "Local dev server"
    });
});

// -------------------- Services --------------------
builder.Services.AddSameApibContext(builder.Configuration);
builder.Services.RegisterSameApiDbContainer();
builder.Services.AddAutoMapper(typeof(SameApiProfile).Assembly);
builder.Services.AddMediatR(x => x.RegisterServicesFromAssemblies(typeof(SameApiProfile).Assembly));

var app = builder.Build();

// -------------------- Middleware --------------------
app.UseCors("AllowReactDevClient");

if (app.Environment.IsDevelopment())
{
    // Swagger uniquement en développement
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "Api Test v1");
        c.RoutePrefix = "swagger"; // Accessible via /swagger
    });
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();
