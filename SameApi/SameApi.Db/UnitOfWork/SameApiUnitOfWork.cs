using ApiTest.Db.Repository.Implementation;
using SameApi.Db.DbContexts;

namespace SameApi.Db.UnitOfWork
{
    public class SameApiUnitOfWork : ISameApiUnitOfWork
    {
        public IApiTestDbContext Context  { get; }
        public IPersonRepository PersonRepository { get; }

        public SameApiUnitOfWork(ApiTestDbContext context, IPersonRepository personRepository)
        {
            this.Context = context;
            this.PersonRepository = personRepository;
        }

        public async Task<int> SaveChangesAsync()
        {
            return await Context.SaveChangesAsync();
        }

    }
}
