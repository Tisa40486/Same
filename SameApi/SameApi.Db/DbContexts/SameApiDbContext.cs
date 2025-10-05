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
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // ... autre configuration ...

            modelBuilder.Entity<LKP_GenderDao>().HasData(
                new LKP_GenderDao { Id = 1, Name = "Male" },
                new LKP_GenderDao { Id = 2, Name = "Female" },
                new LKP_GenderDao { Id = 3, Name = "Other" }
            );
        }
    }
}