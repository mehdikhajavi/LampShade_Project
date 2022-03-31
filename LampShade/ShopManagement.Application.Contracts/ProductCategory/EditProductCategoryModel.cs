using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShopManagement.Application.Contracts.ProductCategory
{

    public class EditProductCategoryModel :CreateProductCategoryModel
    {
        public int Id { get; set; }
        public string CreationDate { get; set; }
    }
}
