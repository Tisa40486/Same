using SameApi.Data.Repository;
using SameApi.Db.DbContexts;
using SameApi.Model;

namespace SameApi.Db.Repository.Implementation
{
    class UserRepository : BaseRepository<ISameApitDbContext, UserDao>, IUserRepository
    {
        public UserRepository(ISameApitDbContext context) : base(context)
        {
        }
    }
}