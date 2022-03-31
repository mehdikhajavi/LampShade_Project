function openTextEditorWindow(TargetInput, Title) {

    $('#TextEditorWindow').remove()
    $('#TextEditorMainWindow').remove()
    var wndContent = $(`<textarea class="k-rtl"  id="TextEditorWindow"  rows="10" cols="30" style="width:100%; height:100%"  aria-label="editor"></textarea>`)


    wnd = $('<div id="TextEditorMainWindow" class="k-rtl"></div>')
        .kendoWindow({
            width: "90vw",
            height: "85vh",
            title: Title,
            visible: false,
            actions: [
                "Check",
                "Maximize",
                "Close"
            ],

            open: function (e) {
                wndContent.kendoEditor({
                    tools: [

                        "bold",
                        "italic",
                        "underline",
                        "justifyLeft",
                        "justifyCenter",
                        "justifyRight",
                        "insertUnorderedList",
                        "createLink",
                        "unlink",
                        "insertImage",
                        "print",

                        "foreColor",
                        "backColor",
                        "formatting",
                        "fontName"

                    ],
                });
                $(`#TextEditorWindow`).data("kendoEditor").value($(TargetInput).val())
            },
            modal: true
        }).data("kendoWindow");
    wnd.wrapper
        .find(".k-i-check").parent().click(function (e) {
            e.preventDefault();
            $(TargetInput).val($(`#TextEditorWindow`).data("kendoEditor").value())
            wnd.close()
            $('#TextEditorWindow').remove()
            $('#TextEditorMainWindow').remove()

        });
    wnd.content(wndContent);
    wnd.center().open().maximize();


}

function showResultHtmlWindow(HtmlCode, Title) {



    wnd = $('<div></div>')
        .kendoWindow({
            width: "90vw",
            height: "85vh",
            title: Title,
            visible: false,
            actions: [
                "Close"
            ],
            modal: true
        }).data("kendoWindow");
    wnd.content($.parseHTML(HtmlCode))
    wnd.center().open().maximize();
}


function openKeyValueWindow(TargetInput, Title) {



    $('#KeyValueMainWindow').remove()
    var defaultRows = ""
    try {
        var defaultData = JSON.parse($(TargetInput).val())
        defaultData.forEach(function (item) {
            defaultRows += `<tr><td><textarea  name="Key" value='${item.key}'  id="Key" class="form-control"  onkeyup="textAreaAdjust(this)" style="width:95%;resize:none">${item.key}</textarea></td><td><textarea name="value" value='${item.value}' id="value"  class="form-control"  onkeyup="textAreaAdjust(this)" style="width:95%;resize:none">${item.value}</textarea></td><td class="m-0 p-0 text-center align-middle"><i onclick="removerowopenKeyValueWindow(this)" class="iconsminds-remove" style="font-size:1.7rem;    cursor: pointer;"></i></td></tr>`;
        })
    }
    catch {

    }

    wndContent = `<form id="tbodyForm"><table class="table" >
<thead class="thead">
<tr><th scope="col">کلید ویژگی</th><th scope="col">مقدار ویژگی</th><th scope="col" class="m-0 p-0 text-center align-middle"><i onclick="addrowopenKeyValueWindow()" class="iconsminds-add" style="font-size:1.7rem;    cursor: pointer;"></i></th></tr>
</thead>

<tbody id="tbody">
${defaultRows}

</tbody>

</table></form>`
    wnd = $('<div id="KeyValueMainWindow" class="k-rtl"></div>')
        .kendoWindow({
            width: "90vw",
            height: "85vh",
            title: Title,
            visible: false,
            actions: [
                "Check",
                "Close"
            ],
            modal: true
        }).data("kendoWindow");
    wnd.wrapper.find(".k-i-check").parent().click(function (e) {
        e.preventDefault();
        var data = []
        var dataform = $('#tbodyForm').serializeArray();
        dataform.forEach(function (item, index) {
            if (item.name == dataform[0].name) {
                data.push({ key: `${item.value}` })
            }
            else {
                data[data.length - 1][item.name] = item.value
            }

        })
        $(TargetInput).val((JSON.stringify(data)))
        wnd.close()
        $('#KeyValueMainWindow').remove()


    });
    wnd.content(wndContent);
    wnd.center().open().maximize();


}

function showResultKeyValueWindow(data, Title) {


    $('#KeyValueMainWindow').remove()
    var defaultRows = ""

    try {
        eval(data).forEach(function (item) {
            defaultRows += `<tr><td><textarea  name="Key" value='${item.key}' class="form-control"   style="width:95%;resize:none">${item.key}</textarea></td><td><textarea name="value" value='${item.value}'  class="form-control"  style="width:95%;resize:none">${item.value}</textarea></td></tr>`;
        })
    }
    catch (e) { console.log(e) }

    wndContent = `<form id="tbodyForm"><table class="table" >
<thead class="thead">
<tr><th scope="col">کلید ویژگی</th><th scope="col">مقدار ویژگی</th></tr>
</thead>

<tbody id="tbody">
${defaultRows}

</tbody>

</table></form>`
    wnd = $('<div id="KeyValueMainWindow" class="k-rtl"></div>')
        .kendoWindow({
            width: "90vw",
            height: "85vh",
            title: Title,
            visible: false,
            actions: [
                "Close"
            ],
            modal: true
        }).data("kendoWindow");

    wnd.content(wndContent);
    wnd.center().open().maximize();


}
function openMediaLibraryWindow(TargetInputId, TargetInputLable, MaxSelectCount) {


    $('#addfilegrid').remove()
    $('#addfilegridwindow').remove()

    wndContent = $(`<div class="k-rtl" id="addfilegrid"></div>`).kendoGrid({
        dataSource: {
            transport: {
                read: function (options) {
                    kendo_grid_read('/api/medias', options)

                },
                destroy: function (options) {
                    kendo_grid_destroy('/api/medias', options, 'addfilepopupTable', 'mediaId')                        /*                        kendo_grid_destroy('/Media/delete', options, `gridmainrefresh`,'mediaId')*/
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
                        fileName: { editable: false },
                        size: { editable: false },
                        extension: { editable: false },
                        date: { editable: false },
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
                template: `<button type='button' id='addfilepopupTableRefresh'  class='k-button btn-refresh' ><span class="simple-icon-refresh" style="font-size:17px"></span></button>`,

            },
            { name: "create", text: "افزودن فایل جدید" },



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
                                saveUrl: "/api/Medias",
                                autoUpload: true
                            },
                            showFileList: false,
                            complete: function (e) {
                                $('#addfilepopupTableRefresh').click()
                            }


                        }).data("kendoUpload");
                }
            },
            {
                field: "", title: "تصویر",
                template: `<img class='customer-photo  rounded'  src='/FileName/#:data.fileName#' onclick=" img_modal('/FileName/#:data.fileName#','#:data.title#')" style='cursor: pointer;max-width:40px' onerror="this.src='/transparent.png';" > `
            },
            {
                field: "", title: "عنوان",
                template: '#:data.title#'
            },
            {
                field: "", title: "سایز",
                template: function (options) {
                    return ConvertBytes(parseInt(options.size))
                }
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

            //===============================================================================> default Select
            var grid = this;
            var rows = grid.items();

            $(rows).each(function (e) {
                var row = this;
                var dataItem = grid.dataItem(row);

                $(`#${TargetInputId}`).val().split(",").forEach(function (item, index) {

                    if (dataItem.fileName == item) {
                        grid.select(row);
                    }
                })
            });





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






    wnd = $('<div id="addfilegridwindow"></div>')
        .kendoWindow({
            width: "95%",
            height: "95%",
            title: 'انتخاب تصویر از کتابخانه چندرسانه ای',
            visible: false,
            actions: [
                "Check",
                "Close"
            ],
            modal: true
        }).data("kendoWindow");
    wnd.wrapper
        .find(".k-i-check").parent().click(function (e) {
            e.preventDefault();
            var entityGrid = $(`#addfilegrid`).data("kendoGrid");
            var rows = entityGrid.select();
            result = '';
            if (rows.length == 0) {
                $(`#${TargetInputId}`).val('')
                $(TargetInputLable).val('')
                wnd.close()
                $('#addfilegrid').remove()
                $('#addfilegridwindow').remove()
            }
            else if (rows.length > MaxSelectCount) {
                NotifyMessage(`شما مجاز به انتخاب حداکثر ${MaxSelectCount} فایل هستید`)
            }
            else {
                result = '';
                rows.each(function (index, row) {
                    result = result + entityGrid.dataItem(row)['fileName'] + ','
                });
                $(`#${TargetInputId}`).val(result.substring(0, result.length - 1))
                $(TargetInputLable).val('تصویر انتخاب شده است')
                wnd.close()
                $('#addfilegrid').remove()
                $('#addfilegridwindow').remove()
            }



        });
    wnd.content(wndContent)
    wnd.center().open().maximize();










}


function img_modal(imgSource, Title) {


    var wndContent = `<img src="${imgSource}" style="height:80vh" onerror="this.src='/transparent.png';"></img>`

    wnd = $('<div></div>')
        .kendoWindow({
            height: "85vh",
            width:"85vw",
            title: `${Title}`,
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


async function openProjectProgressWindow() {
    var ProjectProgressData;
    var wndContent = `<table class="table table-sm table-borderless"><tbody>`

    try {
        ProjectProgressData = await ajax_read("/api/ProjectProgress")
        ProjectProgressData.forEach(function (item, index) {

            wndContent = wndContent + `<tr><td><span class="log-indicator border-theme-2 align-middle"></span></td><td><span class="font-weight-medium">${item.projectProgressDescription} </span></td><td><span class="font-weight-medium"> ${item.projectProgressDate}</span></td></tr>
`

        })

        wndContent = wndContent + `</tbody></table>`
    } catch (err) {
        console.log(err);
    }


    wnd = $('<div></div>')
        .kendoWindow({
            height: "85%",
            width: "85%",
            title: `جزئیات پیشرفت پروژه  `,
            visible: false,
            actions: [
                "Close"
            ],
            modal: true
        }).data("kendoWindow");
    wnd.content(wndContent)
    setTimeout(function () { wnd.center().open().maximize(); }, 1000);


}

function openIconLibraryWindow(TargetInput) {


    $('#addfilegrid').remove()
    $('#addfilegridwindow').remove()

    wndContent = $(`<div class="k-rtl" id="addfilegrid"></div>`).kendoGrid({
        dataSource: {
            transport: {
                read: function (options) {
                    kendo_grid_read('/api/Icons', options)

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
                    id: "iconId",
                    fields: {

                        iconClass: { validation: { required: true } },
                        iconCo: { editable: false },





                    }
                }
            },
        },
        pageable: true,
        scrollable: true,
        resizable: true,
        mobile: true,
        filterable: true,
        toolbar: [
            { name: "search", text: "جستجو ..." },

            {
                template: `<button type='button' id='addfilepopupTable'  class='k-button btn-refresh' ><span class="simple-icon-refresh" style="font-size:17px"></span></button>`,

            },



        ],
        columns: [
            {
                selectable: true,
                width: '50px'
            },
            {
                field: "iconClass", title: "نام آیکون",
            },
            {
                field: "iconClass", title: "آیکون",
                template: `<i style="font-size:50px" class="#:data.iconClass#"></i> `
            },



        ],
        persistSelection: true,
        selectable: 'multiple',
        editable: "popup",
        dataBound: function () {

            //===============================================================================> default Select
            var grid = this;
            var rows = grid.items();

            $(rows).each(function (e) {
                var row = this;
                var dataItem = grid.dataItem(row);

                $(TargetInput).val().split(",").forEach(function (item, index) {

                    if (dataItem.iconClass == item) {
                        grid.select(row);
                    }
                })
            });





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






    wnd = $('<div id="addfilegridwindow"></div>')
        .kendoWindow({
            width: "95%",
            height: "95%",
            title: 'انتخاب آیکون از کتابخانه آیکون ها',
            visible: false,
            actions: [
                "Check",
                "Close"
            ],
            modal: true
        }).data("kendoWindow");
    wnd.wrapper
        .find(".k-i-check").parent().click(function (e) {
            e.preventDefault();
            var entityGrid = $(`#addfilegrid`).data("kendoGrid");
            var rows = entityGrid.select();
            result = '';

            if (rows.length > 1) {
                NotifyMessage(`شما مجاز به انتخاب حداکثر یک آیکون هستید`)
            }
            else {
                result = '';
                rows.each(function (index, row) {
                    result = result + entityGrid.dataItem(row)['iconClass'] + ','
                });
                $(TargetInput).val(result.substring(0, result.length - 1))
                wnd.close()
                $('#addfilegrid').remove()
                $('#addfilegridwindow').remove()
            }



        });
    wnd.content(wndContent)
    wnd.center().open().maximize();










}







function addrowopenKeyValueWindow() {
    $('#tbody').append('<tr><td><textarea  name="Key"  id="Key" class="form-control"  onkeyup="textAreaAdjust(this)" style="width:95%;resize:none"></textarea></td><td><textarea name="value"  id="value"  class="form-control"  onkeyup="textAreaAdjust(this)" style="width:95%;resize:none"></textarea></td><td class="m-0 p-0 text-center align-middle"><i onclick="removerowopenKeyValueWindow(this)" class="iconsminds-remove" style="font-size:1.7rem;    cursor: pointer;"></i></td></tr>')
}

function removerowopenKeyValueWindow(target) {
    $(target).parent().parent().remove()
}



function textAreaAdjust(o) {

    o.style.height = "100%";

    o.style.height = (o.scrollHeight) + "px";
}