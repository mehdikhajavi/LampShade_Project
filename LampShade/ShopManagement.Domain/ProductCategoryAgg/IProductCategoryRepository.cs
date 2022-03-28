using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace ShopManagement.Domain.ProductCategoryAgg
{
    public interface IProductCategoryRepository
    {
        void Add(ProductCategoryModel category);
        ProductCategoryModel Get(int id);
        List<ProductCategoryModel> GetAll();
        bool Exists(Expression<Func<ProductCategoryModel,bool>> expression);
        void SaveChanges();
        ProductCategoryModel GetDetails(int id);
        List<ProductCategoryModel> Search(string Name);
    }
}
