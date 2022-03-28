using Framework.Infrastructure;
using ShopManagement.Domain.ProductCategoryAgg;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace ShopManagement.Infrastructure.EFCore.Repositories
{
    public class ProductCategoryRepository : RepositoryBase<int , ProductCategoryModel> , IProductCategoryRepository
    {
        private readonly ShopContext shopContext;

        public ProductCategoryRepository(ShopContext shopContext) : base(shopContext)
        {
            this.shopContext = shopContext;
        }
        public List<ProductCategoryModel> Search(string Name)
        {
            if (!string.IsNullOrWhiteSpace(Name))
            {
                return shopContext.ProductCategories.Where(x=>x.Name.Contains(Name)).ToList();
            }
            else
            {
                return GetAll();
            }
        }
    }
}
