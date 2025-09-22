using SameApi.Db.DbContexts;
using SameApi.Db.Repository;

namespace SameApi.Db.UnitOfWork
{
    public class SameApiUnitOfWork : ISameApiUnitOfWork
    {
        public ISameApiDbContext Context  { get; }
        public IUserRepository UserRepository { get; }
        public IGenderRepository GenderRepository { get; }

        public SameApiUnitOfWork(ISameApiDbContext context , IUserRepository repository, IGenderRepository genderRepository)
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
