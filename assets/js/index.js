$(document).ready(function(){
    var slInterval = setInterval(() => {
        $('#sl').remove();
        $('#bg').removeClass('img-hide');
        clearInterval(slInterval);
    }, 500);
});
function redirectToDashboard1(){
    window.location.replace("/dashboard1.html");
}