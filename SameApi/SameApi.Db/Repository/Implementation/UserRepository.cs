using SameApi.Data.Repository;
using SameApi.Db.DbContexts;
using SameApi.Model;

namespace SameApi.Db.Repository.Implementation
{
    class UserRepository : BaseRepository<IApiSameDbContext, UserDao>, IUserRepository
    {
        public UserRepository(IApiSameDbContext context) : base(context)
        {
        }
    }
}