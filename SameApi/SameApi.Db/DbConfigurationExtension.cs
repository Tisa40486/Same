using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using SameApi.Db.DbContexts;
using Microsoft.EntityFrameworkCore;

namespace SameApi.Db
{
    public static class DbConfigurationExtension
    {
        public static void AddSameApibContext(this IServiceCollection services, IConfiguration configuration)
        {
            var connectionString = configuration.GetConnectionString("DefaultConnection");

            services.AddDbContext<SameApiDbContext>(options =>
                options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString), o =>
                {
                    o.UseQuerySplittingBehavior(QuerySplittingBehavior.SplitQuery).UseRelationalNulls();
                    o.CommandTimeout((int)TimeSpan.FromMinutes(10).TotalSeconds);
                }));
        }
    }
}