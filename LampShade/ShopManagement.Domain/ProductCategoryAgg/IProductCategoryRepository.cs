using Framework.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace ShopManagement.Domain.ProductCategoryAgg
{
    public interface IProductCategoryRepository: IRepository<int , ProductCategoryModel>
    {
        List<ProductCategoryModel> Search(string Name);
    }
}
