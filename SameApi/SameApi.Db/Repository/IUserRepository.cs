﻿using SameApi.Data.Repository;
using SameApi.Db.DbContexts;
using SameApi.Model;

namespace SameApi.Db.Repository
{
    public interface IUserRepository : IBaseRepository<ISameApitDbContext, UserDao>
    {
    }
}