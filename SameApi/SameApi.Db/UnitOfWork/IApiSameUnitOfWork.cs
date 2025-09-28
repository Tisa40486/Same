using SameApi.Db.DbContexts;
using SameApi.Db.Repository;

namespace SameApi.Db.UnitOfWork
{
    public interface IApiSameUnitOfWork
    {
        IApiSameDbContext Context { get; }
        IUserRepository UserRepository { get; }
        IGenderRepository GenderRepository { get; }
        IProfessionRepository ProfessionRepository { get; }
        Task<int> SaveChangesAsync();
        
    }
}