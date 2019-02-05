$(document).ready(function () {
    $(".frm-test").submit(function (e) {
        e.preventDefault();

        var input1 = $("#input1").val();

        $("#input2").val(input1);
    });
});