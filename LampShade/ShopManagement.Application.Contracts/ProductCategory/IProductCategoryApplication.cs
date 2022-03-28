using Framework.Application;
using ShopManagement.Domain.ProductCategoryAgg;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShopManagement.Application.Contracts.ProductCategory
{
    public interface IProductCategoryApplication
    {
        OperationResult Create(CreateProductCategoryModel command);
        OperationResult Edit(EditProductCategoryModel command);
        ProductCategoryViewModel GetDetails(int Id);
        List<ProductCategoryViewModel> Search(ProductCategorySearchModel searchModel);
    }
}
