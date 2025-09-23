using Microsoft.EntityFrameworkCore;
using SameApi.Data.DbContexts;
using SameApi.Model;
using SameApi.Model.LKP;

namespace SameApi.Db.DbContexts
{
    public class SameApiDbContext : BaseDbContext, IApiSameDbContext 
    {
        public SameApiDbContext(DbContextOptions<SameApiDbContext> options) : base(options)
        { 
        }
        public DbSet<UserDao> Users { get; set; }
        public DbSet<LKP_GenderDao> Genders { get; set; }

    }
}