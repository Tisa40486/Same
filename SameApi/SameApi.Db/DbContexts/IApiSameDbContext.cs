using Microsoft.EntityFrameworkCore;
using SameApi.Data.DbContexts;
using SameApi.Model;

namespace SameApi.Db.DbContexts
{
    public interface IApiSameDbContext : IBaseDbContext
    {
        public DbSet<UserDao> Users { get; set; }
    }
}