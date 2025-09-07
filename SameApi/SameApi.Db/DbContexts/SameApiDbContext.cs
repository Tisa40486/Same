using Microsoft.EntityFrameworkCore;
using SameApi.Data.DbContexts;

namespace SameApi.Db.DbContexts
{
    public class SameApiDbContext : BaseDbContext, ISameApitDbContext 
    {
        public SameApiDbContext(DbContextOptions<SameApiDbContext> options) : base(options)
        { 
        }

        //put dbset
    }
}