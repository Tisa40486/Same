using SameApi.Data.Repository;
using SameApi.Db.DbContexts;
using SameApi.Model.LKP;

namespace SameApi.Db.Repository.Implementation
{
    public class GenderRepository : BaseRepository<ISameApiDbContext, LKP_GenderDao>, IGenderRepository
    {
        private readonly ISameApiDbContext _dbContext;

        public GenderRepository(ISameApiDbContext dbContext): base(dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task AddAndSaveAsync(LKP_GenderDao entity)
        {
            _dbContext.Set<LKP_GenderDao>().Add(entity);
            await _dbContext.SaveChangesAsync();
        }
    }
}