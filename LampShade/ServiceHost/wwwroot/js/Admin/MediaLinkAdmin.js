

function addfilepopup(title, id, table, refreshbutton) {

    $('#addfilegrid').remove()
    wndContent = $(`<div class="k-rtl" id="addfilegrid"></div>`).kendoGrid({
        dataSource: {
            transport: {
                read: function (options) {
                    kendo_grid_read('/Media/get', options)

                },
                destroy: function (options) {
                    kendo_grid_destroy('/Media/delete', options, `addfilepopupTable`)
                },
                create: function (options) {
                    options.success(true);
                    $(`#gridmainrefresh`).click()
                },

                parameterMap: function (options, operation) {
                    if (operation !== "read" && options.models) {
                        return { models: kendo.stringify(options.models) };
                    }
                }
            },
            batch: true,
            pageSize: 20,
            schema: {
                model: {
                    id: "mediaId",
                    fields: {

                        file: { validation: { required: true } },
                        title: { editable: false },
                        size: { editable: false },
                        extension: { editable: false },
                        date: { editable: false },
                        time: { editable: false },
                        DateTime: { editable: false },




                    }
                }
            },
        },
        pageable: true,
        scrollable: true,
        resizable: true,
        mobile: true,

        toolbar: [
            { name: "search", text: "جستجو ..." },

            {
                template: `<button type='button' id='addfilepopupTable'  class='k-button btn-refresh' ><span class="simple-icon-refresh" style="font-size:17px"></span></button>`,

            },
            {
                template: ` <button class='btn  btn-outline-primary' onclick="addfilelinkMedia('${table}', getselection_from_kendogrid('addfilegrid', 'mediaId'), ${id},'${refreshbutton}')" >انتخاب تصاویر</button>
`,

            },


        ],
        columns: [
            {
                        selectable: true,
                        width: '50px'
                    },
            {
                field: "file", title: "انتخاب فایل", hidden: true,
                editor: function (container, options) {
                    $('<input name="' + options.field + '" type="file" class="k-textbox"  />').appendTo(container)
                        .kendoUpload({

                            async: {
                                saveUrl: "/Media/Add"
                            },


                        }).data("kendoUpload");
                }
            },
            {
                field: "", title: "تصویر",
                template: `<div> <object class='customer-photo  rounded' data='#:data.path#'  onclick=" img_modal('#:data.path#','#:data.title#')" style='cursor: pointer;max-width:40px'>
                                   <img class='customer-photo  rounded'  src='/images/defaultFileLogo.png'  style='cursor: pointer;max-width:40px'>
                                    </object> </div>`
            },
            {
                field: "", title: "عنوان",
                template: '#:data.title#'
            },
            {
                field: "", title: "سایز",
                template: '#:data.size#'
            },
            {
                field: "", title: "فرمت",
                template: '#:data.extension#'
            },
            {
                field: "", title: "تاریخ ثبت",
                template: '#:data.dateTime#'
            },


        ],
        persistSelection: true,
        selectable: 'multiple',
        editable: "popup",
        dataBound: function () {


            //=============================================================================> column width auto
            for (var i = 0; i < this.columns.length; i++) {
                this.autoFitColumn(i);
            }




        },
        edit: function () {
            $('.k-edit-field.k-no-editor').prev().remove();
            $('.k-edit-field.k-no-editor').remove();

        },
    }).on("click", ".btn-refresh", function (e) {
        var childGrid = $(e.target).closest(".k-grid").data("kendoGrid");
        childGrid.dataSource.read();
    });




    $('#addfilegridwindow').remove()

    wnd = $('<div id="addfilegridwindow"></div>')
        .kendoWindow({
            width: "95%",
            height: "95%",
            title: title,
            visible: false,
            actions: [
                "Maximize",
                "Close"
            ],
            modal: true
        }).data("kendoWindow");
    wnd.content(wndContent)
    wnd.center().open();










}



function OpenLinkMediaGrid(TableName, MediaLinkId, title) {


    $(`#OpenLinkMediaGridTable${MediaLinkId}`).remove()
    wndContent = $(`<div class="k-rtl" id="OpenLinkMediaGridTable${MediaLinkId}"></div>`).kendoGrid({
        dataSource: {
            transport: {
                read: function (options) {


                    kendo_grid_read(`/Media/GetMediaLink?table=${TableName}&MediaLinkId=${MediaLinkId}`, options)

                },
                destroy: function (options) {
                    //options.data.models[0].table = TableName;
                    deletefilelinkMedia(TableName, parseInt(options.data.models[0].mediaLinkTableId), `OpenLinkMediaGridTable${MediaLinkId}refresh`)
                //    kendo_grid_destroy(`/Media/deleteMediaLink`, options, `OpenLinkMediaGridTable`, `mediaLinkTableId`)
                },


                parameterMap: function (options, operation) {
                    if (operation !== "read" && options.models) {
                        return { models: kendo.stringify(options.models) };
                    }
                }
            },
            batch: true,
            pageSize: 20,
            schema: {
                model: {
                    id: 'mediaLinkTableId',
                    fields: {

                        title: { editable: false },
                        size: { editable: false },
                        extension: { editable: false },
                        date: { editable: false },
                        time: { editable: false },
                        DateTime: { editable: false },
       
             





                    }
                }
            },
        },
        pageable: true,
        scrollable: true,
        resizable: true,
        mobile: true,

        toolbar: [
            { name: "search", text: "جستجو ..." },

            {
                template: `<button type='button' id='OpenLinkMediaGridTable${MediaLinkId}refresh'  class='k-button btn-refresh' ><span class="simple-icon-refresh" style="font-size:17px"></span></button>`,

            },
            { template: `

                    <button class="k-button k-button-icontext" onclick='addfilepopup("انتخاب فایل از کتابخانه چندرسانه ای","${MediaLinkId}", "${TableName}", "OpenLinkMediaGridTable${MediaLinkId}refresh")'><span class="k-icon k-i-plus"></span> انتخاب فایل از کتابخانه چندرسانه ای </button>
                                        `,
            }


        ],
        columns: [
            {
                field: "", title: "تصویر",
                template: `<div> <object class='customer-photo  rounded' data='#:data.path#'  onclick=" img_modal('#:data.path#','#:data.title#')" style='cursor: pointer;max-width:40px'>
                                   <img class='customer-photo  rounded'  src='/images/defaultFileLogo.png'  style='cursor: pointer;max-width:40px'>
                                    </object> </div>`
            },
            {
                field: "", title: "عنوان",
                template: '#:data.title#'
            },
            {
                field: "", title: "سایز",
                template: '#:data.size#'
            },
            {
                field: "", title: "فرمت",
                template: '#:data.extension#'
            },
            {
                field: "", title: "تاریخ ثبت",
                template: '#:data.dateTime#'
            },
            {
                field: "", title: "تاریخ ثبت",
                template: '#:data.dateTime#'
            },
            {
                command: [{
                    name: "destroy", text: "", iconClass: "simple-icon-trash"}], title: "حذف مدیا", width: "250px"
            }
            //{ field: "dateTime ", title: "تاریخ ثبت" },

        ],
        editable: "popup",
        dataBound: function () {


            //=============================================================================> column width auto
            for (var i = 0; i < this.columns.length; i++) {
                this.autoFitColumn(i);
            }




        },
        edit: function () {
            $('.k-edit-field.k-no-editor').prev().remove();
            $('.k-edit-field.k-no-editor').remove();

        },
    }).on("click", ".btn-refresh", function (e) {
        var childGrid = $(e.target).closest(".k-grid").data("kendoGrid");
        childGrid.dataSource.read();
    });





    wnd = $('<div></div>')
        .kendoWindow({
            width: "95%",
            height: "95%",
            title: title,
            visible: false,
            actions: [
                "Maximize",
                "Close"
            ],
            modal: true
        }).data("kendoWindow");
    wnd.content(wndContent)
    wnd.center().open();




}
