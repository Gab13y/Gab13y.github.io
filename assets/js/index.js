$(document).ready(function(){
    var slInterval = setInterval(() => {
        $('#sl').addClass('img-hide');
        $('#bg').removeClass('img-hide');
        clearInterval(slInterval);
    }, 500);
});