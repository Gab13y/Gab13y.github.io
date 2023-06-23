var greeting_messages=["Hello", "Welcome"];
var lastLogin = '';
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
var currentPassword = 'GarabileS0813!!';
var savedSessionPassword = '';
var loginAttempts = 0;
$(document).ready(function(){
    var slInterval = setInterval(() => {
        $("body").css("background-color", "#fff");
        $('#bg').removeClass('img-hide');
        clearInterval(slInterval);
        redirectToDashboard1();
    }, 500);
    $('.my-account').on('click',function(){
        if(savedSessionPassword === ''){
            loginPassword1();
        } else{
            $('#my-account-details1').removeClass('my-account-list1');
            $('#my-account-details1').addClass('my-account-list0');
            viewAccountList();
        }
    });
    $('.offlog').on('click',function(){
        loginPassword1();
    });
    $('#button-login-password').on('click', function(){
        if($('#password').val() !== currentPassword){
            $('#panel8 span').html('');
            if(loginAttempts < 5){
                $('#panel8 span').append("Invalid Password");
                loginAttempts++;
            } else{
                $('#panel8 span').append("Your account has been locked");
            }
        } else {
            $('#login-password2').remove();
            $('#login-password1').remove();
            $('#screen1').remove();
            $('#screen2').removeClass('img-hide');
            savedSessionPassword = currentPassword;
        }
    });
    $('#close-login-password').on('click', function(){
        $('#screen1').removeClass('img-hide');
        $('#login-password1').addClass('img-hide');
        $('#panel8 span').html('');
    });
    $('#back-login-password2').on('click', function(){
        $('#login-password2').addClass('img-hide');
        $('#login-password1').removeClass('img-hide');
        $('#panel8 span').html('');
    });
    $('#close-login-password2').on('click', function(){
        $('#screen1').removeClass('img-hide');
        $('#login-password2').addClass('img-hide');
        $('#panel8 span').html('');
    });
    $('#password-login-password').on('click', function(){
        $('#login-password1').addClass('img-hide');
        $('#login-password2').removeClass('img-hide');
        $('#button-login-password').prop('disabled', true);        
        $('#button-login-password').css('pointer-events', 'none');
        $('#panel8 span').html('');
        $('#password').val('');        
        $('#button-login-password').css('pointer-events', 'none');
        $('#button-login-password').css('background-color','#e6e6e6');
        $('#button-login-password').css('color','#9c9c9c');
    });
    $('#panel14').on('click',function(){
        $('#my-account-details2').addClass('my-account-list2');
        $('#my-account-details2').removeClass('my-account-list3');
        viewAccount();
    });
    $('#panel15').on('click', function(){
        $('#my-account-details2').addClass('img-hide');
        $('#my-account-details1').addClass('my-account-list0');
        $('#my-account-details1').removeClass('my-account-list1');
        viewAccountList();
    });
    $('.home').on('click', function(){
        $('.non-home').addClass('img-hide');
        $('#screen2').removeClass('img-hide');
    });
});

function viewAccount(){
    $('#my-account-details1').addClass('img-hide');
    $('#my-account-details2').removeClass('img-hide');
    $('.loading_accounts2').removeClass('img-hide');
    var ai = setInterval(() => {        
        $('#my-account-details2').removeClass('my-account-list2');
        $('#my-account-details2').addClass('my-account-list3');
        $('.loading_accounts2').addClass('img-hide');
        clearInterval(ai);
    }, getRandomIntervalTime());
}
function viewAccountList(){    
    $('#my-account-details1').removeClass('img-hide');
    $('#screen2').addClass('img-hide');
    $('.loading_accounts').removeClass('img-hide');
    var ali = setInterval(() => {        
        $('#my-account-details1').removeClass('my-account-list0');
        $('#my-account-details1').addClass('my-account-list1');
        $('.loading_accounts').addClass('img-hide');
        clearInterval(ali);
    }, getRandomIntervalTime());
}
function loginPassword1(){    
    $('#screen1').addClass('img-hide');
    $('#login-password1').removeClass('img-hide');
}
function redirectToDashboard1(){
    var bgInterval = setInterval(() => {
        $('#bg').remove();
        $('#screen1').removeClass('img-hide');
        clearInterval(bgInterval);
        $('.welcome_greeting label').append(getRandomGreetingMessage() + ', Gabby');
        lastLogin = getLastLogin();
        $('.welcome_greeting span').append("Your last login was " + lastLogin);
        $("body").css("background-color", "#f3f4f9");
    }, 2000);
}
function getRandomGreetingMessage() {
    var min = 0
    var max = greeting_messages.length - 1
    return greeting_messages[Math.floor(Math.random() * (max - min + 1)) + min];
}
function getRandomIntervalTime(){
    var min = 2000;
    var max = 7000;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function formatAMPM(hourtime) {
  var ampm = hourtime >= 12 ? 'PM' : 'AM';
  return ampm;
}
function getLastLogin() {
    var dt = new Date();
    var time = dt.getHours() + ":" + dt.getMinutes() + " " + formatAMPM(dt.getHours());
    var _date = dt.getDate() + " "  + months[dt.getMonth()] + " "  + dt.getFullYear();
    return _date + ' ' + time;
} 
function validatePassword(obj){
    if($(obj).val() !== ''){
        $('#button-login-password').css('pointer-events', '');
        $('#button-login-password').css('background-color','rgb(7 34 105)');
        $('#button-login-password').css('color','#fff');
    } else{
        $('#button-login-password').css('pointer-events', 'none');
        $('#button-login-password').css('background-color','#e6e6e6');
        $('#button-login-password').css('color','#9c9c9c');
    }
}