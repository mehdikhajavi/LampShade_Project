function ConvertBytes(bytes) {
    var i = Math.floor(Math.log(bytes) / Math.log(1024)),
        sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    return (bytes / Math.pow(1024, i)).toFixed(2) * 1 + ' ' + sizes[i];
}


function notify(status) {

    if (status.IsSuccedded == true) {
        $.notify({
            // options
            icon: '',
            title: '',
            message: status.message,
            target: '_blank',
            allow_dismiss: false,


        }, {
            // settings
            type: 'success',
            animate: {
                enter: "animated fadeInRight",
                exit: "animated fadeOutDown"
            },
            placement: {
                from: 'top',
                align: 'right'
            },
            z_index: 9999,

        });
    }
    else if (status.IsSuccedded == false) {

        $.notify({
            // options
            icon: '',
            title: '',
            message: status.message,
            target: '_blank',
            allow_dismiss: false,

        }, {
            // settings
            type: 'danger',
            animate: {
                enter: "animated fadeInRight",
                exit: "animated fadeOutDown"
            },
            placement: {
                from: 'top',
                align: 'right'
            },
            z_index: 9999,



        });
    }

}

function NotifyValidation(Textalert) {

    $.notify({
        // options
        icon: '',
        title: '',
        message: Textalert,
        target: '_blank',
        allow_dismiss: false,

    }, {
        // settings
        type: 'danger',
        animate: {
            enter: "animated fadeInRight",
            exit: "animated fadeOutDown"
        },
        placement: {
            from: 'top',
            align: 'right'
        },
        z_index: 9999,
    });

}

function NotifyMessage(Textalert) {

    $.notify({
        // options
        icon: '',
        title: '',
        message: Textalert,
        target: '_blank',
        allow_dismiss: false,

    }, {
        // settings
        type: 'primary',
        animate: {
            enter: "animated fadeInRight",
            exit: "animated fadeOutDown"
        },
        placement: {
            from: 'top',
            align: 'right'
        },
        z_index: 9999,
    });

}

function NotifySuccess(Textalert) {

    $.notify({
        // options
        icon: 'glyphicon glyphicon-warning-sign',
        title: '',
        message: Textalert,
        target: '_blank',
        allow_dismiss: false,

    }, {
        // settings
        type: 'success',
        animate: {
            enter: "animated fadeInRight",
            exit: "animated fadeOutDown"
        },
        placement: {
            from: 'top',
            align: 'right'
        },
        z_index: 9999,
    });

}

function SetTempId(Id) {
    localStorage.removeItem('TempId');
    localStorage.setItem('TempId', Id);
}
function GetTempId() {
    return localStorage.getItem('TempId');
}
function encoding(text) {
    var Base64 = { _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", encode: function (r) { var t, e, o, a, h, c, n, d = "", C = 0; for (r = Base64._utf8_encode(r); C < r.length;)a = (t = r.charCodeAt(C++)) >> 2, h = (3 & t) << 4 | (e = r.charCodeAt(C++)) >> 4, c = (15 & e) << 2 | (o = r.charCodeAt(C++)) >> 6, n = 63 & o, isNaN(e) ? c = n = 64 : isNaN(o) && (n = 64), d = d + this._keyStr.charAt(a) + this._keyStr.charAt(h) + this._keyStr.charAt(c) + this._keyStr.charAt(n); return d }, decode: function (r) { var t, e, o, a, h, c, n = "", d = 0; for (r = r.replace(/[^A-Za-z0-9\+\/\=]/g, ""); d < r.length;)t = this._keyStr.indexOf(r.charAt(d++)) << 2 | (a = this._keyStr.indexOf(r.charAt(d++))) >> 4, e = (15 & a) << 4 | (h = this._keyStr.indexOf(r.charAt(d++))) >> 2, o = (3 & h) << 6 | (c = this._keyStr.indexOf(r.charAt(d++))), n += String.fromCharCode(t), 64 != h && (n += String.fromCharCode(e)), 64 != c && (n += String.fromCharCode(o)); return n = Base64._utf8_decode(n) }, _utf8_encode: function (r) { r = r.replace(/\r\n/g, "\n"); for (var t = "", e = 0; e < r.length; e++) { var o = r.charCodeAt(e); o < 128 ? t += String.fromCharCode(o) : (127 < o && o < 2048 ? t += String.fromCharCode(o >> 6 | 192) : (t += String.fromCharCode(o >> 12 | 224), t += String.fromCharCode(o >> 6 & 63 | 128)), t += String.fromCharCode(63 & o | 128)) } return t }, _utf8_decode: function (r) { for (var t = "", e = 0, o = c1 = c2 = 0; e < r.length;)(o = r.charCodeAt(e)) < 128 ? (t += String.fromCharCode(o), e++) : 191 < o && o < 224 ? (c2 = r.charCodeAt(e + 1), t += String.fromCharCode((31 & o) << 6 | 63 & c2), e += 2) : (c2 = r.charCodeAt(e + 1), c3 = r.charCodeAt(e + 2), t += String.fromCharCode((15 & o) << 12 | (63 & c2) << 6 | 63 & c3), e += 3); return t } };
    return Base64.encode(text).replace('/', '-')
}
function decoding(text) {
    var Base64 = { _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", encode: function (r) { var t, e, o, a, h, c, n, d = "", C = 0; for (r = Base64._utf8_encode(r); C < r.length;)a = (t = r.charCodeAt(C++)) >> 2, h = (3 & t) << 4 | (e = r.charCodeAt(C++)) >> 4, c = (15 & e) << 2 | (o = r.charCodeAt(C++)) >> 6, n = 63 & o, isNaN(e) ? c = n = 64 : isNaN(o) && (n = 64), d = d + this._keyStr.charAt(a) + this._keyStr.charAt(h) + this._keyStr.charAt(c) + this._keyStr.charAt(n); return d }, decode: function (r) { var t, e, o, a, h, c, n = "", d = 0; for (r = r.replace(/[^A-Za-z0-9\+\/\=]/g, ""); d < r.length;)t = this._keyStr.indexOf(r.charAt(d++)) << 2 | (a = this._keyStr.indexOf(r.charAt(d++))) >> 4, e = (15 & a) << 4 | (h = this._keyStr.indexOf(r.charAt(d++))) >> 2, o = (3 & h) << 6 | (c = this._keyStr.indexOf(r.charAt(d++))), n += String.fromCharCode(t), 64 != h && (n += String.fromCharCode(e)), 64 != c && (n += String.fromCharCode(o)); return n = Base64._utf8_decode(n) }, _utf8_encode: function (r) { r = r.replace(/\r\n/g, "\n"); for (var t = "", e = 0; e < r.length; e++) { var o = r.charCodeAt(e); o < 128 ? t += String.fromCharCode(o) : (127 < o && o < 2048 ? t += String.fromCharCode(o >> 6 | 192) : (t += String.fromCharCode(o >> 12 | 224), t += String.fromCharCode(o >> 6 & 63 | 128)), t += String.fromCharCode(63 & o | 128)) } return t }, _utf8_decode: function (r) { for (var t = "", e = 0, o = c1 = c2 = 0; e < r.length;)(o = r.charCodeAt(e)) < 128 ? (t += String.fromCharCode(o), e++) : 191 < o && o < 224 ? (c2 = r.charCodeAt(e + 1), t += String.fromCharCode((31 & o) << 6 | 63 & c2), e += 2) : (c2 = r.charCodeAt(e + 1), c3 = r.charCodeAt(e + 2), t += String.fromCharCode((15 & o) << 12 | (63 & c2) << 6 | 63 & c3), e += 3); return t } };
    return Base64.decode(text).replace('-', '/')

}
function goBack() {
    window.history.go(-1)

}
function goBackTo2() {
    window.history.go(-2)

}
function alertcurentpage() {
    alert(window.location.href)
}
function GetByid(id) {
    return $(`#${id}`).val();
}
function setCookie(cname, cvalue, exdays) {
    Cookies.remove(cname)
    Cookies.set(cname, cvalue, { expires: exdays })
}
function getCookie(cname) {
    return Cookies.get(cname)


}
function removeCookie(cname) {
    Cookies.remove(cname)
}
function pathname() {
    return window.location.pathname;
}
function pathnameofprev() {
    return window.history.back.href
}

function kendo_collaps() {
    var grid = $("#grid").data("kendoGrid");
    $(".k-master-row").each(function (index) {
        grid.collapseRow(this);
    });
    grid.refresh();
}

function getselection_from_kendogrid(gridid, selector) {
    var entityGrid = $(`#${gridid}`).data("kendoGrid");
    var rows = entityGrid.select();
    result = '';
    rows.each(function (index, row) {
        result = result + entityGrid.dataItem(row)[selector] + ','
    });
    return result.substring(0, result.length - 1);
}
function reloadkendogrid(gridtable) {
    $(`.${gridtable}`).data('kendoGrid').dataSource.read()
    $(`.${gridtable}`).data('kendoGrid').refresh()
}
function clickonrefreshbutton(buttonId) {
    $(`#${buttonId}`).click();
}
function reloadkendogridbybutton(buttonId) {
    $(`#${buttonId}`).click()
}
function reloadkendogridbyid(gridid) {
    $(`#${gridid}`).data('kendoGrid').dataSource.read()
    $(`#${gridid}`).data('kendoGrid').refresh()
}

function fadigit_to_endigit(digit) {
    return digit.toString().replace(/۰/g, "0")
        .replace(/۱/g, '1').replace(/۲/g, '2').replace(/۳/g, '3')
        .replace(/۴/g, '4').replace(/۵/g, '5').replace(/۶/g, '6').replace(/۷/g, '7').replace(/۸/g, '8').replace(/۹/g, '9')
}
var resizeKendoDropDown = function (e) {
    var $dropDown = $(e.sender.element),
        dataWidth = $dropDown.data("kendoDropDownList").list.width(),
        listWidth = dataWidth + 20,
        containerWidth = listWidth + 6;

    // Set widths to the new values
    $dropDown.data("kendoDropDownList").list.width(listWidth);
    $dropDown.closest(".k-widget").width(containerWidth);
}

function PrintById(Id) {
    var mywindow = window.open('', 'PRINT');
    mywindow.document.write('<html><head></head><body>');
    mywindow.document.write($(`#${Id}`).html());
    mywindow.document.write('</body></html>');


    mywindow.document.close() //IE
    mywindow.focus() //IE

    mywindow.print();
    mywindow.close();

    return true;
}

function GetDataAndSetData(controller, action) {



    var data = new FormData();
    $(`.ajax_text`).each(function (i, obj) {
        data.append($(this).attr("name"), $(this).val())
    });
    $(`.ajax_file`).each(function (i, obj) {
        data.append($(this).attr("name"), $(this)[0].files[0])
    });

    $.ajax({
        type: "POST",
        url: `/${controller}/${action}`,
        async: true,




        success: function (result, status, xhr) {

            var obj = JSON.parse(result);


            for (var pair of data.entries()) {


                if ($(`[name ='${pair[0]}']`).attr('type-ajax-edit') == 'input_text') {
                    $(`[name ='${pair[0]}']`).val(`${obj[pair[0]]}`)
                }
                else if ($(` [name ='${pair[0]}']`).attr('type-ajax-edit') == 'input_textarea') {
                    $(`[name ='${pair[0]}']`).val(`${obj[pair[0]]}`)
                }
                else if ($(`[name ='${pair[0]}']`).attr('type-ajax-edit') == 'input_editor') {
                    $(`[name ='${pair[0]}']`).prev().prev().html(`${obj[pair[0]]}`)
                }
                else if ($(`[name ='${pair[0]}']`).attr('type-ajax-edit') == 'input_select') {
                    $(`[name ='${pair[0]}']`).val(`${obj[pair[0]]}`)
                }
                //else if ($(`#${idDiv} [name ='${pair[0]}']`).attr('type-ajax-edit') == 'input_file') {
                //    $(`#${idDiv}  [name ='${pair[0]}']`).replaceWith(`<input id="testimage" name="${pair[0]}" value="${obj[pair[0]]}" type="file" class="form-control input_validation ajax_file " ">`); 
                //}




            }


        },
        error: function (xhr, status, error) {
            console.log(status, error)
        }
    });

    return false;



}
