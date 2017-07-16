$(document).ready(function() {
    var break_minus = $(".breakminus");
    var break_time = $(".breaktime");
    var break_plus = $(".breakadd");
    var session_minus = $(".sessionminus");
    var session_time = $(".sessiontime");
    var session_plus = $(".sessionadd");
    var start = $(".start");
    var pause = $(".pause");
    var stop = $(".stop");
    var facetime = $(".facetime");

    //Handle the plus/minus buttons for session and break settings

    break_minus.click(function(){
        var current_break_length = break_time.html();
        if(current_break_length > 0) {
            break_time.html(Number(current_break_length) -1);
        }
    });
    break_plus.click(function(){
        var current_break_length = break_time.html();
        break_time.html(Number(current_break_length)+1);
    });
    session_minus.click(function(){
        var current_session_length = session_time.html();
        if(current_session_length > 0) {
            session_time.html(Number(current_session_length) -1);
        }
        facetime.html(session_time.html() + ":00");
    });
    session_plus.click(function(){
        var current_session_length = session_time.html();
        session_time.html(Number(current_session_length)+1);
        facetime.html(session_time.html() + ":00");
    });

    //create method to format time

    function formatTime() {
        var current_minute = facetime.html().substring(0,2);
        var current_second = facetime.html().substring(3,5);
        var next_second = "";
        var next_minute = "";
        if(current_second === "00") {
            next_second += "59";
            next_minute += Number(current_minute) - 1;
        } else {
            next_minute += current_minute;
            if(Number(current_second) <= 10) {
                next_second = "0" + (Number(current_second) -1);
            } else {
                next_second += Number(current_second) - 1;
            }
        }
        facetime.html(next_minute + ":" + next_second);
    }

    //create the countdown interval

    var interval;

    //Handle the start button
    start.click(function(){
        //disable start button
        start.prop("disabled", "true");
        start.css("background-color", "grey");

        //enable pause button
        pause.removeAttr("disabled");
        pause.css("background-color", "lightblue");

        //prevent user from changing session/break time limits
        break_minus.hide();
        break_plus.hide();
        session_plus.hide();
        session_minus.hide();

        //

        interval = setInterval(function() {
            formatTime();
        }, 1000);
    });

    //handle pause button
    var boolean = true;
    pause.click(function() {
        if(boolean) {
            boolean = false;
            clearInterval(interval);
        } else {
            interval = setInterval(function() {
                formatTime();
                }, 1000);
            boolean = true;
        }
    });

    //handle stop

    stop.click(function(){
        //enable the start button
        start.removeAttr("disabled");
        start.css("background-color", "lightgreen");
        //disable pause button
        pause.prop("disabled", "true");
        pause.css("background-color", "grey");
        //stop the countdown timer
        clearInterval(interval);
        var reset_time = session_time.html() + ":00";
        facetime.html(reset_time);
        break_minus.show();
        break_plus.show();
        session_plus.show();
        session_minus.show();
    });




});