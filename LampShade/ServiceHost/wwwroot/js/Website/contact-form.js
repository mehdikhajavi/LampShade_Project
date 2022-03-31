(function ($) {
    "use strict"; $("#contactForm").validator().on("submit", function (event) {
        if (event.isDefaultPrevented()) { formError(); submitMSG(false, "آیا از تکمیل صحیح تمام فیلد های فرم اطمینان دارید؟"); }
        else { event.preventDefault(); submitForm(); }
    }); function submitForm() {
        var fullName = $("#fullName").val(); var email = $("#email").val(); var subject = $("#subject").val(); var tell = $("#tell").val(); var message = $("#message").val();
        $.ajax({
            type: "POST",
            url: "/api/ContactUs",
            contentType: "application/json charset=utf-8",
            data: JSON.stringify({
                "FullName": `${fullName}`, "Email": `${email}`, "Subject": `${subject}`, "Message": `${message}`, "Tell": `${tell}`
            }),
            success: function (text) {
                if (text == true) { formSuccess(); }
                else { formError(); submitMSG(false, text); }
            }
        });
    }
    function formSuccess() { $("#contactForm")[0].reset(); submitMSG(true, "ضمن تشکر از شما، فرم ارسال گردید") }
    function formError() { $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () { $(this).removeClass(); }); }
    function submitMSG(valid, msg) {
        if (valid) { var msgClasses = "h6 tada animated text-success mt-2"; } else { var msgClasses = "h6 text-danger mt-2"; }
        $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
    }
}(jQuery));

(function ($) {
    "use strict"; $("#stayConnectForm").validator().on("submit", function (event) {
        if (event.isDefaultPrevented()) { formError(); submitMSG(false, "آیا از تکمیل صحیح تمام فیلد های فرم اطمینان دارید؟"); }
        else { event.preventDefault(); submitForm(); }
    }); function submitForm() {
        var fullName = $("#fullName").val(); var email = $("#email").val(); var tell = $("#tell").val();
        $.ajax({
            type: "POST",
            url: "/api/stayConnect",
            contentType: "application/json charset=utf-8",
            data: JSON.stringify({
                "FullName": `${fullName}`, "Email": `${email}`, "OtherData": `${tell}`
            }),
            success: function (text) {
                if (text == true) { formSuccess(); }
                else { formError(); submitMSG(false, text); }
            }
        });
    }
    function formSuccess() { $("#stayConnectForm")[0].reset(); submitMSG(true, "ضمن تشکر از شما، اطلاعات شما ثبت شد") }
    function formError() { $("#stayConnectForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () { $(this).removeClass(); }); }
    function submitMSG(valid, msg) {
        if (valid) { var msgClasses = "h6 tada animated text-success"; } else { var msgClasses = "h6 text-danger"; }
        $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
    }
}(jQuery));