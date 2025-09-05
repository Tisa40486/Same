using SameApi.Db.DbContexts;

namespace SameApi.Db.UnitOfWork
{
    public interface ISameApiUnitOfWork
    {
        ISameApitDbContext Context { get; }
        //repository
        Task<int> SaveChangesAsync();
    }
}