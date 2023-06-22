var greeting_messages=["Hello", "Welcome"];
var lastLogin = '';
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
$(document).ready(function(){
    var slInterval = setInterval(() => {
        $("body").css("background-color", "#fff");
        $('#bg').removeClass('img-hide');
        clearInterval(slInterval);
        redirectToDashboard1();
    }, 500);
});
function redirectToDashboard1(){
    var bgInterval = setInterval(() => {
        $('#bg').remove();
        $('#screen1').removeClass('img-hide');
        clearInterval(bgInterval);
        $('#welcome_greeting label').append(getRandomGreetingMessage() + ', Gabby');
        lastLogin = getLastLogin();
        $('#welcome_greeting span').append(lastLogin);
        $("body").css("background-color", "#f3f4f9");
    }, 2000);
}
function getRandomGreetingMessage() {
    min = 0
    max = greeting_messages.length - 1
    return greeting_messages[Math.floor(Math.random() * (max - min + 1)) + min];
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