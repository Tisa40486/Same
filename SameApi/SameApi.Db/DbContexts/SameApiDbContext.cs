using Microsoft.EntityFrameworkCore;
using SameApi.Data.DbContexts;
using SameApi.Model;

namespace SameApi.Db.DbContexts
{
    public class SameApiDbContext : BaseDbContext, ISameApitDbContext 
    {
        public SameApiDbContext(DbContextOptions<SameApiDbContext> options) : base(options)
        { 
        }
        public DbSet<UserDao> Users { get; set; }
        //put dbset
    }
}