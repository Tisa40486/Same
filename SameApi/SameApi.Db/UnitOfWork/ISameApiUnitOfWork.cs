using SameApi.Db.DbContexts;
using SameApi.Db.Repository;

namespace SameApi.Db.UnitOfWork
{
    public interface ISameApiUnitOfWork
    {
        ISameApiDbContext Context { get; }
        IUserRepository UserRepository { get; }
        IGenderRepository GenderRepository { get; }
        Task<int> SaveChangesAsync();
        
    }
}