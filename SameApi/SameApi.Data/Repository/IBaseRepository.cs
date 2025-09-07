﻿using SameApi.Data.DbContexts;
using SameApi.Data.Model;

namespace SameApi.Data.Repository
{
    public interface IBaseRepository<TContext, TModelDao>
        where TModelDao : class, IModelDao
        where TContext : IBaseDbContext
    {
        TContext _context { get; }

        Task<IEnumerable<TModelDao>> GetAllAsync(bool withNoTracking = true);
        Task<TModelDao?> GetByIdAsync(int id, bool withNoTracking = true);

        Task AddAndSaveAsync(TModelDao entity);
        Task RemoveAsync(TModelDao entity);
        Task RemoveByIdAsync(int id, bool withNoTracking = true);


        /* all the task for crud*/
    }
}
