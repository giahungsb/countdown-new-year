$(document).ready(function() {
    var now = new Date();
    var once  = new Date("February 12, 2021 00:00:00");
    var time = once.getTime() / 1000 - now.getTime() / 1000;
    $('.new-year-clock').FlipClock(time, {
        clockFace: 'DailyCounter',
        countdown: true
    });
});
