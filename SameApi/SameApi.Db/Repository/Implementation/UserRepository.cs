using SameApi.Data.Repository;
using SameApi.Db.DbContexts;
using SameApi.Model;

namespace SameApi.Db.Repository.Implementation
{
    class UserRepository : BaseRepository<ISameApiDbContext, UserDao>, IUserRepository
    {
        public UserRepository(ISameApiDbContext context) : base(context)
        {
        }
    }
}