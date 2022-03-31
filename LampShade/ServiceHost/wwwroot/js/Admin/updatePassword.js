

$('.unmask').on('click', function () {
    if ($(this).prev('input').attr('type') == 'password')
        $(this).prev('input').prop('type', 'text');
    else
        $(this).prev('input').prop('type', 'password');
    return false;
});

$('.password').on('keyup', function () {
    var p_c = $('#p-c');
    var p = $('#p');
    if (p.val().length > 0) {
        if (p.val() != p_c.val()) {
            $('#valid').html("رمز عبور های وارد شده مطابقت ندارند");
        } else {
            $('#valid').html('');
        }
        var s = 'ضعیف'
        if (p.val().length > 5 && p.val().match(/\d+/g))
            s = 'متوسط';
        if (p.val().length > 6 && p.val().match(/[^\w\s]/gi))
            s = 'قوی';
        $('#strong span').addClass(s).html(s);
    }
});

