function ajax_read(url) {
    return $.ajax({
         url: url,
        contentType: "application/json",
    });
}






function kendo_grid_read(url, options) {
    $.ajax({
        url: url,
        async: true,
        contentType: "application/json",
        success: function (result) {

            options.success(result);

        },
        error: function (result) {

            options.error(result);
        }
    });
}
function kendo_grid_update(url, options, refreshbutton, columnId) {
    try {
        options.data.models[0][columnId] = parseInt(options.data.models[0][columnId]);
    }
    catch {

    }
    $.ajax({
        url: url,
        data: JSON.stringify(options.data.models[0]),
        type: "Put",
        contentType: "application/json charset=utf-8",
        async: true,
        success: function (result) {
            options.success(result);
            $(`#${refreshbutton}`).click()
            console.log(result)
            NotifySuccess(result)
        },
        error: function (result, error) {
            options.error(result)
            result.responseText.substring(1, result.responseText.length - 1).split(",").forEach(function (value) {
                NotifyValidation(value.replaceAll('"', ''))
                console.log(value.replaceAll('"', ''))
            })
        },


    });
}
function kendo_grid_destroy(url, options, refreshbutton, columnId) {
    options.data.models[0][columnId] = parseInt(options.data.models[0][columnId]);
    $.ajax({
        url: url,
        data: JSON.stringify(options.data.models[0]),
        type: "Delete",
        contentType: "application/json charset=utf-8",
        async: true,
        success: function (result) {
            options.success(result);
            $(`#${refreshbutton}`).click()
            console.log(result)
            NotifySuccess(result)
        },
        error: function (result, error) {

            options.error(result)
            result.responseText.substring(1, result.responseText.length - 1).split(",").forEach(function (value) {
                NotifyValidation(value.replaceAll('"', ''))
                console.log(value.replaceAll('"', ''))
            })
        }
    });
}
function kendo_grid_destroy2(url, options, refreshbutton) {
    $.ajax({
        url: url,
        data: JSON.stringify(options.data),
        type: "Delete",
        contentType: "application/json charset=utf-8",
        async: true,
        success: function (result) {

            options.success(result);
            $(`#${refreshbutton}`).click()
            console.log(result)
            NotifySuccess(result)
        },
        error: function (result, error) {

            options.error(result)
            result.responseText.substring(1, result.responseText.length - 1).split(",").forEach(function (value) {
                NotifyValidation(value.replaceAll('"', ''))
                console.log(value.replaceAll('"', ''))
            })
        }
    });
}
function kendo_grid_destroy3(url, options, refreshbutton) {
    $.ajax({
        url: url,
        type: "Delete",
        contentType: "application/json charset=utf-8",
        async: true,
        success: function (result) {
            options.success(result);
            $(`#${refreshbutton}`).click()
            console.log(result)
            NotifySuccess(result)
        },
        error: function (result, error) {
            options.error(result)
            result.responseText.substring(1, result.responseText.length - 1).split(",").forEach(function (value) {
                NotifyValidation(value.replaceAll('"', ''))
                console.log(value.replaceAll('"', ''))
            })
        }
    });
}
function kendo_grid_add(url, options, refreshbutton, columnId) {
    try {
        options.data.models[0][columnId] = 0;
    }
    catch {

    }
    $.ajax({
        url: url,
        data: JSON.stringify(options.data.models[0]),
        type: "POST",
        async: false,
        contentType: "application/json charset=utf-8",
        success: function (result) {
            options.success(result);
            $(`#${refreshbutton}`).click()
            console.log(result)
            NotifySuccess(result)
        },
        error: function (result) {
            options.error(result)
            result.responseText.substring(1, result.responseText.length - 1).split(",").forEach(function (value) {
                NotifyValidation(value.replaceAll('"', ''))
                console.log(value.replaceAll('"', ''))
            })
         
        }
    });
}
function addfilelinkMedia(DatabaseTable, MediaId, DesId, refreshbutton) {

    $.ajax({
        url: `/Media/AddMediaLink/${DatabaseTable}/${DesId}/${MediaId}`,
        contentType: "application/json charset=utf-8",
        async: true,
        type: "POST",
        success: function (result) {

            var dialog = $("#addfilegridwindow").data("kendoWindow");

            dialog.close();

            /*            $('#addfilemodal').modal('toggle')*/
            notify(result)
            $(`#${refreshbutton}`).click()

        },
        error: function (result) {
            console.log(result, error)
            notify(result)
            $(`#${refreshbutton}`).click()
        },

    });

}
function deletefilelinkMedia(DatabaseTable, MediaLinkTableId, refreshbutton) {

    $.ajax({
        url: `/Media/DeleteMediaLink/${DatabaseTable}/${MediaLinkTableId}`,
        contentType: "application/json charset=utf-8",
        async: true,
        type: "Post",
        success: function (result) {

            /*            $('#addfilemodal').modal('toggle')*/
            notify(result)
            $(`#${refreshbutton}`).click()

        },
        error: function (result) {
            console.log(result, error)
            notify(result)
            $(`#${refreshbutton}`).click()
        },

    });

}
function kendo_grid_add2(url, options, refreshbutton, columnId) {
    options.data[columnId] = 0;
    $.ajax({
        url: url,
        data: JSON.stringify(options.data),
        type: "POST",
        async: true,
        contentType: "application/json charset=utf-8",
        success: function (result) {
            options.success(result);
            $(`#${refreshbutton}`).click()
            notify(result)
        },
        error: function (result, error) {
            console.log(result, error)
            $(`#${refreshbutton}`).click()
            notify(result)
        }
    });
}
function kendo_grid_update2(url, options, refreshbutton) {
    $.ajax({
        url: url,
        data: JSON.stringify(options.data),
        type: "PUT",
        async: true,
        contentType: "application/json charset=utf-8",
        success: function (result) {

            options.success(result);
            $(`#${refreshbutton}`).click()
            notify(result)
        },
        error: function (result, error) {

            console.log(result, error)
            $(`#${refreshbutton}`).click()
            notify(result)
        }
    });
}
function kendo_grid_addwithnoti(controller, action, options, refreshbutton) {
    $.ajax({
        url: controller + "/" + action,
        data: options.data,
        type: "POST",
        async: true,
        success: function (result) {

            NotifyMessage(result)
            $(`#${refreshbutton}`).click()
            notify(result)
        },
        error: function (result, error) {

            console.log(result, error)
            $(`#${refreshbutton}`).click()
            notify(result)
        }
    });
}
function kendo_grid_updatewithnoti(controller, action, options, refreshbutton) {
    $.ajax({
        url: controller + "/" + action,
        data: options.data,
        type: "POST",
        async: true,
        success: function (result) {

            NotifyMessage(result)
            $(`#${refreshbutton}`).click()
            notify(result)
        },
        error: function (result, error) {

            console.log(result, error)
            $(`#${refreshbutton}`).click()
            notify(result)
        }
    });
}
function kendo_grid_addwithnoti_data(controller, action, data, refreshbutton) {
    $.ajax({
        url: controller + "/" + action,
        data: data,
        type: "POST",
        async: true,
        success: function (result) {

            NotifyMessage(result)
            $(`#${refreshbutton}`).click()
            notify(result)
        },
        error: function (result, error) {

            console.log(result, error)
            $(`#${refreshbutton}`).click()
            notify(result)
        }
    });
}
function AddTable(controller, action, id) {


    var notvalidinput = $(`#${id} .input_validation_add`).filter(function () {
        return !this.value;
    }).next();


    if (notvalidinput.length == 0) {

        $('.modal').modal('hide');
        var data = new FormData();
        $(`#${id} .ajax_text`).each(function (i, obj) {
            data.append($(this).attr("name"), $(this).val())
        });
        $(`#${id} .ajax_file`).each(function (i, obj) {
            data.append($(this).attr("name"), $(this)[0].files[0])
        });

        $.ajax({
            type: "POST",
            data: data,
            url: `/${controller}/${action}`,
            processData: false,
            contentType: false,
            async: true,



            success: function (result, status, xhr) {

                $(`#${id} .ajax_text`).val('')
                $(`#${id} .ajax_file`).val('')

                notify(result)
            },
            error: function (result, error) {
                notify(result)
                console.log(result, error)
            }
        });

        return false;
    }
    else {

        $.each(notvalidinput, function (index, value) {

            NotifyValidation(value.innerText);

        });

    }


}


