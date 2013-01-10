
// START: ErrorMessage class
function ErrorMessage() {
}
// static methods
ErrorMessage.ResetErrorMsg = function (jQueryObject) {
    $(".errormessage_warn", jQueryObject).each(function () {
        $(this).remove();
    });
    return;
};
ErrorMessage.ShowErrorMsg = function (jQueryObject, sErrString) {
    jQueryObject.prepend("<div class='errormessage_warn' align='left'>" + sErrString + "</div>");
    return;
};

ErrorMessage.ShowAsOverlay = function (errorMsg) {
    var height = 400;
    var top = ($(window).height() - (height + 75)) / 2;
    $("body").append('<div class="errormessage-modal-overlay" id="div_errormessage_overlay" style="width: 24em;background-color: #ffffff;"></div>');

    var errorPane = '<div width="100%" class="errormessage_popupHeader">&nbsp;&nbsp;<b>Error</b></div>'
        + '<div class="errormessage_panel"><div class="errormessage_warn">' + errorMsg + '</div></div>';

    $('#div_errormessage_overlay').overlay({
        oneInstance: false,
        mask: { color: '#789', loadSpeed: 200, opacity: 0.6 },
        closeOnClick: true,
        load: true,
        fixed: true,
        onBeforeLoad: function () {
            $('#div_errormessage_overlay').append(errorPane);
        },
        onClose: function () {
            $('#div_errormessage_overlay').remove();
        }
    }).load();
    $('#div_errormessage_overlay').css({ 'top': top });
};
// END: ErrorMessage class
