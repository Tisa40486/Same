using SameApi.Db.DbContexts;
using SameApi.Db.Repository;
using SameApi.Db.Repository.Implementation;

namespace SameApi.Db.UnitOfWork
{
    public class SameApiUnitOfWork : ISameApiUnitOfWork
    {
        public ISameApitDbContext Context  { get; }
        public IUserRepository UserRepository { get; }

        public SameApiUnitOfWork(ISameApitDbContext context , IUserRepository repository)
        {
            this.Context = context;
            this.UserRepository = repository;
        }

        public async Task<int> SaveChangesAsync()
        {
            return await Context.SaveChangesAsync();
        }

    }
}
