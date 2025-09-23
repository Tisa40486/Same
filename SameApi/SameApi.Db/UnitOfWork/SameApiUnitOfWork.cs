using SameApi.Db.DbContexts;
using SameApi.Db.Repository;

namespace SameApi.Db.UnitOfWork
{
    public class SameApiUnitOfWork : IApiSameUnitOfWork
    {
        public IApiSameDbContext Context  { get; }
        public IUserRepository UserRepository { get; }
        public IGenderRepository GenderRepository { get; }

        public SameApiUnitOfWork(IApiSameDbContext context , IUserRepository repository, IGenderRepository genderRepository)
        {
            Context = context;
            UserRepository = repository;
            GenderRepository = genderRepository;
        }

        public async Task<int> SaveChangesAsync()
        {
            return await Context.SaveChangesAsync();
        }

    }
}
