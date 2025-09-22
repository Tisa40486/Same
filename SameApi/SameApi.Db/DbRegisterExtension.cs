using Microsoft.Extensions.DependencyInjection;
using SameApi.Db.DbContexts;
using SameApi.Db.Repository;
using SameApi.Db.Repository.Implementation;
using SameApi.Db.UnitOfWork;

namespace SameApi.Db
{
    public static class DbRegisterExtension
    {
        public static void RegisterSameApiDbContainer(this IServiceCollection services)
        {
            services.AddScoped<ISameApiDbContext, SameApiDbContext>();
            services.AddScoped<IUserRepository, UserRepository>();
            services.AddScoped<ISameApiUnitOfWork, SameApiUnitOfWork>();
            services.AddScoped<IGenderRepository, GenderRepository>();
        }
    }
}