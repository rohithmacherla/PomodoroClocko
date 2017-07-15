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
    });
    session_plus.click(function(){
        var current_session_length = session_time.html();
        session_time.html(Number(current_session_length)+1);
    });    

    //Handle the start button
    start.click(function(){
        start.prop("disabled", "true");
        start.css("background-color", "grey");
        break_minus.hide();
        break_plus.hide();
        session_plus.hide();
        session_minus.hide();
    });

    //handle pause button
    var boolean = true;
    pause.click(function() {
        if(boolean) {
            boolean = false;
        } else {
            boolean = true;
        }

    });

    //handle stop





});