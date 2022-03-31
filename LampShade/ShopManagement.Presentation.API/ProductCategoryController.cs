using Framework.Application;
using Microsoft.AspNetCore.Mvc;
using ShopManagement.Application.Contracts.ProductCategory;
using System;
using System.Collections.Generic;

namespace ShopManagement.Presentation.API
{
    [ApiController]
    public class ProductCategoryController : ControllerBase
    {
        private readonly IProductCategoryApplication _productCategoryApplication;

        public ProductCategoryController(IProductCategoryApplication productCategoryApplication)
        {
            _productCategoryApplication = productCategoryApplication;
        }

        [Route("api/administrator/[controller]")]
        [HttpGet]
        public List<EditProductCategoryModel> Get()
        {
            return _productCategoryApplication.GetAll();
        }

        [Route("api/administrator/[controller]")]
        [HttpPost]
        public OperationResult Post(CreateProductCategoryModel command)
        {
            return _productCategoryApplication.Create(command);
        }

        [Route("api/administrator/[controller]")]
        [HttpPut]
        public OperationResult put(EditProductCategoryModel command)
        {
            return _productCategoryApplication.Edit(command);
        }

    }
}
