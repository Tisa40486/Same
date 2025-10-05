using Microsoft.EntityFrameworkCore;
using SameApi.Data.Repository;
using SameApi.Db.DbContexts;
using SameApi.Model;

namespace SameApi.Db.Repository.Implementation
{
    public class UserRepository : BaseRepository<IApiSameDbContext, UserDao>, IUserRepository
    {
        public UserRepository(IApiSameDbContext context) : base(context)
        { }
        public async Task<List<UserDao>> GetAllUsersAsync()
        {

            return await _context.Users
                                 .Include(user => user.GenderDao)
                                 .Include(user => user.SchoolDao)
                                 .AsNoTracking()
                                 .ToListAsync();
        }
    }

}