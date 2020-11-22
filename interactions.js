document.addEventListener("DOMContentLoaded", pageLoaded, false);
function pageLoaded() {
    $(".loader").delay(1800).fadeOut(300);
    $(".tab-page").delay(1850).fadeIn(300);
}