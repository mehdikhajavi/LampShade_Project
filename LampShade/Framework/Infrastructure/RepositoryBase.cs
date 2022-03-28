using Framework.Domain;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Framework.Infrastructure
{
    public class RepositoryBase<TKey, T> : IRepository<TKey, T> where T : class
    {
        private readonly DbContext dbContext;

        public RepositoryBase(DbContext dbContext )
        {
            this.dbContext = dbContext;
        }
        public void Add(T entity)
        {
            dbContext.Add<T>(entity);
        }

        public bool Exists(Expression<Func<T, bool>> expression)
        {
            return dbContext.Set<T>().Any(expression);
        }

        public T Get(TKey id)
        {
           return dbContext.Find<T>(id);
        }

        public List<T> GetAll()
        {
           return dbContext.Set<T>().ToList();  
        }

        public void SaveChanges()
        {
            dbContext.SaveChanges();
        }
    }
}
