﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShopManagement.Domain.ProductCategoryAgg
{
    public interface IProductCategoryRepository
    {
        void Add(ProductCategoryModel category);
        ProductCategoryModel Get(int id);
        List<ProductCategoryModel> GetAll();
    }
}
