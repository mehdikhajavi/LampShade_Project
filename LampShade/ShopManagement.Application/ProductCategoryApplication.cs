using Framework.Application;
using ShopManagement.Application.Contracts.ProductCategory;
using ShopManagement.Domain.ProductCategoryAgg;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShopManagement.Application
{
    public class ProductCategoryApplication : IProductCategoryApplication
    {
        private readonly IProductCategoryRepository productCategoryRepository;

        public ProductCategoryApplication(IProductCategoryRepository productCategoryRepository)
        {
            this.productCategoryRepository = productCategoryRepository;
        }
        public OperationResult Create(CreateProductCategoryModel command)
        {
            var operationResult = new OperationResult();
            if (productCategoryRepository.Exists(x => x.Name == command.Name))
            {
                return operationResult.Failed("امکان ثبت رکورد تکراری وجود ندارد");
            }

            var slug = command.Slug.Slugify();
            var productCategory = new ProductCategoryModel(command.Name, command.Description, command.Picture,
                command.PictureAlt, command.PictureTitle, command.Keywords, command.MetaDescription, slug);

            productCategoryRepository.Add(productCategory);
            productCategoryRepository.SaveChanges();
            return operationResult.Succedded();
        }

        public OperationResult Edit(EditProductCategoryModel command)
        {
            var operationResult = new OperationResult();
            var productCategory = productCategoryRepository.Get(command.Id);
            if (productCategory == null)
            {
                return operationResult.Failed("رکوردی با اطلاعات درخواستی یافت نشد");

            }
            if (productCategoryRepository.Exists(x => x.Name == command.Name && x.Id != command.Id))
            {
                return operationResult.Failed("امکان ثبت رکورد تکراری وجود ندارد");
            }

            var slug = command.Slug.Slugify();
            productCategory.Edit(command.Name, command.Description, command.Picture,
               command.PictureAlt, command.PictureTitle, command.Keywords, command.MetaDescription, slug);

            productCategoryRepository.SaveChanges();
            return operationResult.Succedded();


        }

        public List<EditProductCategoryModel> GetAll()
        {
            List<EditProductCategoryModel> result = new List<EditProductCategoryModel>();
            foreach(var productCategory in productCategoryRepository.GetAll())
            {
                result.Add(new EditProductCategoryModel
                {
                    Id = productCategory.Id,
                    Name = productCategory.Name,
                    Picture = productCategory.Picture,
                    Description = productCategory.Description,
                    Keywords = productCategory.Keywords,
                    MetaDescription = productCategory.MetaDescription,
                    PictureAlt = productCategory.PictureAlt,
                    PictureTitle = productCategory.PictureTitle,
                    Slug = productCategory.Slug,
                     CreationDate = productCategory.CreationDate.ToString()
                    

                });
            }
            return result;



        }

        public EditProductCategoryModel GetDetails(int Id)
        {
            var productCategory = productCategoryRepository.Get(Id);
            return new EditProductCategoryModel
            {
                Id = productCategory.Id,
                Name = productCategory.Name,
                Picture = productCategory.Picture,
                Description = productCategory.Description,
                Keywords = productCategory.Keywords,
                MetaDescription = productCategory.MetaDescription,
                PictureAlt = productCategory.PictureAlt,
                PictureTitle = productCategory.PictureTitle,
                Slug = productCategory.Slug

            };
        }

        public List<ProductCategoryViewModel> Search(ProductCategorySearchModel searchModel)
        {
            List<ProductCategoryModel> productCategories = productCategoryRepository.Search(searchModel.Name);
            List<ProductCategoryViewModel> ProductCategoriesViewModel = new List<ProductCategoryViewModel>();

            foreach (var productCategory in productCategories)
            {
                ProductCategoriesViewModel.Add(new ProductCategoryViewModel
                {
                    CreationDate = productCategory.CreationDate.ToString(),
                    Id = productCategory.Id,
                    Name = productCategory.Name,
                    Picture = productCategory.Picture

                });
            }
            return ProductCategoriesViewModel;
        }
    }
}
