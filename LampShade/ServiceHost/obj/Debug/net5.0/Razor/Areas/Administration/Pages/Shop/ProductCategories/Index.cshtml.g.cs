#pragma checksum "X:\Microsoft Visual Studio-Project\LampShade_project\Code\LampShade\ServiceHost\Areas\Administration\Pages\Shop\ProductCategories\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "e12a92d2b04b7bd4a814b7b090866977243ac1c3"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(ServiceHost.Areas.Administration.Pages.Shop.ProductCategories.Areas_Administration_Pages_Shop_ProductCategories_Index), @"mvc.1.0.razor-page", @"/Areas/Administration/Pages/Shop/ProductCategories/Index.cshtml")]
namespace ServiceHost.Areas.Administration.Pages.Shop.ProductCategories
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"e12a92d2b04b7bd4a814b7b090866977243ac1c3", @"/Areas/Administration/Pages/Shop/ProductCategories/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"fb0e07ca471ffd6fceb9fb5a1272d30c7f92445d", @"/Areas/Administration/Pages/_ViewImports.cshtml")]
    public class Areas_Administration_Pages_Shop_ProductCategories_Index : global::Microsoft.AspNetCore.Mvc.RazorPages.Page
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("\r\n");
#nullable restore
#line 6 "X:\Microsoft Visual Studio-Project\LampShade_project\Code\LampShade\ServiceHost\Areas\Administration\Pages\Shop\ProductCategories\Index.cshtml"
  
    Layout = "Shared/_AdminLayout";
    ViewData["title"] = "مدیریت گروه محصولات";

#line default
#line hidden
#nullable disable
            WriteLiteral(@"
<style>

    .k-button.k-button-icontext.btn-destroy.k-grid-delete , .k-button.k-button-icontext.btn-edit.k-grid-edit{
            flex-flow: row-reverse !important;
    }
 
</style>
<div class=""container-fluid"">

    <div class=""row"">

        <div class=""col-12"">
            <h1>  ");
#nullable restore
#line 23 "X:\Microsoft Visual Studio-Project\LampShade_project\Code\LampShade\ServiceHost\Areas\Administration\Pages\Shop\ProductCategories\Index.cshtml"
             Write(ViewData["Title"]);

#line default
#line hidden
#nullable disable
            WriteLiteral(@"</h1>


            <nav class=""breadcrumb-container d-none d-sm-block d-lg-inline-block"" aria-label=""breadcrumb"">
                <ol class=""breadcrumb pt-0"">
                    <li class=""breadcrumb-item""><a href=""#"">خانه</a></li>
                    <li class=""breadcrumb-item""><a href=""#"">مدیریت</a></li>
                    <li class=""breadcrumb-item active"" aria-current=""page"">گروه محصولات</li>
                </ol>
            </nav>


        </div>
    </div>
    <div class=""row"">

        <div class=""col-12 mb-4 data-table-rows data-tables-hide-filter"">
            <div class=""x_content""><div class=""demo-container""><div class=""k-rtl""><div class=""gridframe"" style=""overflow: hidden;""><div id=""grid""></div></div></div></div></div>



        </div>
    </div>
</div>
<div class=""demo-section k-content k-rtl"">
    <ul id=""context-menu"" style=""display:none"">
        <li id=""refreshRow""> <span class=""simple-icon-refresh"" style=""vertical-align:sub;font-size:17px""></span> بروزرسانی </");
            WriteLiteral(@"li>
        <li id=""excel""><span class=""simple-icon-doc"" style=""vertical-align:sub;font-size:17px""></span> خروجی اکسل  </li>
        <li id=""addRow""> <span class=""simple-icon-plus"" style=""vertical-align:sub;font-size:17px""></span> افزودن گروه محصولات جدید</li>
        <li id=""editRow""> <span class=""simple-icon-pencil"" style=""vertical-align:sub;font-size:17px""></span> ویرایش</li>
        <li id=""removeRow""> <span class=""simple-icon-close"" style=""vertical-align:sub;font-size:17px""></span> غیر فعال کردن</li>
");
            WriteLiteral(@"    </ul>
</div>

<script>


    $(document).ready(function () {
        var crudServiceBaseUrl = ""/api/administrator/productcategory""
        //=================================================================================================================================> region-table
        $(""#grid"").kendoGrid({
            dataSource: new kendo.data.DataSource({
                transport: {
                    read: function (options) {
                        kendo_grid_read(crudServiceBaseUrl, options)
                    },
                       update: function (options) {
                           console.log(options)
                        kendo_grid_update(crudServiceBaseUrl, options, 'gridmainrefresh','id')
                    },
                    destroy: function (options) {
                        kendo_grid_destroy(crudServiceBaseUrl, options, 'gridmainrefresh')
                    },
                    create: function (options) {
                        kendo_");
            WriteLiteral(@"grid_add(crudServiceBaseUrl, options, 'gridmainrefresh')
                    },
                    parameterMap: function (options, operation) {
                        if (operation !== ""read"" && options.models) {
                            return { models: kendo.stringify(options) };
                        }
                    }
                },
                batch: true,
                pageSize: 20,
                schema: {
                    model: {
                         id: ""id"",
                        fields: {
                              id: { editable: false, nullable: true },
                            name: { text: ""نام "", validation: { required: true } },
                            creationDate: { text: ""تاریخ تولید"", editable: false },
                            slug: { text: ""اسلاگ "", validation: { required: true } },
                            picture: { text: ""عکس "" },
                            pictureAlt: { text: ""Alt "" },
                           ");
            WriteLiteral(@" pictureTitle: { text: ""عنوان "" , validation: { required: true }},
                            description: { text: ""توضیحات "" },
                            keywords: { text: ""کلمات کلیدی "", validation: { required: true } },
                            metaDescription: { text: ""توضیحات متا "", validation: { required: true } },




                        }
                    }
                },


            }),
            pageable: true,
            scrollable: true,
            resizable: true,
            mobile: true,
            toolbar: [
                { name: ""search"", text: ""جستجو ..."" },

                {
                    template: `<button type='button' id='gridmainrefresh'  class='k-button btn-refresh' ><span class=""simple-icon-refresh"" style=""font-size:17px""></span></button>`,

                },
                                { name: ""create"", text: ""افزودن گروه محصولات"" },

                { name: ""excel"", text: ""خروجی اکسل"" }

            ],
            p");
            WriteLiteral(@"ageable: {
                pageSizes: true,
            },
            dataBound: function () {


                //=============================================================================> column width auto
                //for (var i = 0; i < this.columns.length; i++) {
                //    this.autoFitColumn(i);
                //}
},
            filterable: true,
            sortable: true,
            columns: [

                  { field: ""picture"", title: ""عکس"" },
                { field: ""name"", title: ""نام"" },
                   { field: ""slug"", title: ""اسلاگ"",hidden:true },
              
                { field: ""pictureAlt"", title: ""Alt"" ,hidden:true},
                { field: ""pictureTitle"", title: ""عنوان"",hidden:true },
                { field: ""description"", title: ""توضیحات"" ,hidden:true},
                { field: ""keywords"", title: ""کلمات کلیدی"" ,hidden:true},
                { field: ""metaDescription"", title: ""توضیحات متا"",hidden:true },
                { field:");
            WriteLiteral(@" ""creationDate"", title: ""تاریخ تولید""  },

             { command:[{ className: ""btn-destroy"", name: ""destroy"", text: "" حذف "" },
             { className: ""btn-edit"", name: ""edit"", text: "" ویرایش "" }]  } 




            ],
            editable: ""popup"",
            edit: function (data) {
                   $('.k-edit-field.k-no-editor').prev().remove()
                $('.k-edit-field.k-no-editor').remove()


            },
            cancel:function(e){
              
               $('#grid').data('kendoGrid').dataSource.cancelChanges();
              
            },
        
        }).on(""click"", "".btn-refresh"", function (e) {
            var childGrid = $(e.target).closest("".k-grid"").data(""kendoGrid"");
            childGrid.dataSource.read();
        });;

        $("".gridframe"").width(7 * $(window).width() / 8)
        $(""#grid .k-grid-header-wrap"").css(""overflow"", ""hidden"");
        $(""#grid .k-grid-content"").css(""overflow-y"", ""scroll"").css(""overflow-x"", ""auto"").scroll(f");
            WriteLiteral(@"unction () {
            var left = $(this).scrollLeft();
            var wrap = $(""#grid > .k-grid-header-wrap"");
            if (wrap.scrollLeft() != left) wrap.scrollLeft(left);
        });

        var grid = $(""#grid"").data(""kendoGrid"");

























        $(`#context-menu`).show()
        $(`#context-menu`).kendoContextMenu({
            target: ""#grid"",
            filter: ""td"",
            animation: {
                open: {
                    effects: ""fadeIn""
                }
            },
            scrollable: true,
            select: function (e) {
                var row = $(e.target).parent()[0];
                var item = e.item.id;
                switch (item) {

                    case ""refreshRow"":
                        grid.dataSource.read();
                        break;
                    case ""excel"":
                        grid.saveAsExcel();
                        break;
                    case ""addRow"":");
            WriteLiteral(@"
                        grid.addRow();
                        break;
                    case ""editRow"":
                        grid.editRow(row);
                        break;
                    case ""removeRow"":
                        grid.removeRow(row);
                        break;

                    default:
                        break;
                };

            }
        });





    });


</script>");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<ServiceHost.Areas.Administration.Pages.Shop.ProductCategories.IndexModel> Html { get; private set; }
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.ViewDataDictionary<ServiceHost.Areas.Administration.Pages.Shop.ProductCategories.IndexModel> ViewData => (global::Microsoft.AspNetCore.Mvc.ViewFeatures.ViewDataDictionary<ServiceHost.Areas.Administration.Pages.Shop.ProductCategories.IndexModel>)PageContext?.ViewData;
        public ServiceHost.Areas.Administration.Pages.Shop.ProductCategories.IndexModel Model => ViewData.Model;
    }
}
#pragma warning restore 1591