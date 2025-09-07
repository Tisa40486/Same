using SameApi.Db.DbContexts;

namespace SameApi.Db.UnitOfWork
{
    public class SameApiUnitOfWork : ISameApiUnitOfWork
    {
        public ISameApitDbContext Context  { get; }
        //public IRepository repository { get; }

        public SameApiUnitOfWork(ISameApitDbContext context/* IRepository repository*/)
        {
            this.Context = context;
            //this.repository = personRepository;
        }

        public async Task<int> SaveChangesAsync()
        {
            return await Context.SaveChangesAsync();
        }

    }
}
