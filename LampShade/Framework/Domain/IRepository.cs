using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Framework.Domain
{
    public interface IRepository<TKey , T> where T : class
    {
        void Add(T entity);
        T Get(TKey id);
        List<T> GetAll();
        bool Exists(Expression<Func<T, bool>> expression);
        void SaveChanges();
    }
}
