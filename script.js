function intervals(){

    const date = new Date();

    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var dd = date.getDate();
    var mm = date.getMonth();
    var yy = date.getFullYear();
    var weekdays = date.getUTCDay();

    if(hours<10){
        hours = "0" + hours;
        document.getElementById("hours").innerHTML = hours
    }
    else
        document.getElementById("hours").innerHTML = hours
        
    if(minutes<10){
        minutes = "0" + minutes;
        document.getElementById("minutes").innerHTML = minutes
    }
    else
        document.getElementById("minutes").innerHTML = minutes
    
    if(seconds<10){
        seconds = "0" + seconds;
        document.getElementById("seconds").innerHTML = seconds
    }
    else
        document.getElementById("seconds").innerHTML = seconds


    if(dd<10){
        dd = "0" + dd;
        document.getElementById("dd").innerHTML = dd
    }
    else
        document.getElementById("dd").innerHTML = dd
    
    switch(mm){
        case 0:
            document.getElementById("mm").innerHTML = "Jan";
            break;
        case 1: 
            document.getElementById("mm").innerHTML = "Feb";
            break;
        case 2: 
            document.getElementById("mm").innerHTML = "Mar";
            break;
        case 3: 
            document.getElementById("mm").innerHTML = "Apr";
            break;
        case 4: 
            document.getElementById("mm").innerHTML = "May";
            break;
        case 5: 
            document.getElementById("mm").innerHTML = "Jun";
            break;
        case 6: 
            document.getElementById("mm").innerHTML = "Jul";
            break;
        case 7: 
            document.getElementById("mm").innerHTML = "Aug";
            break;
        case 8: 
            document.getElementById("mm").innerHTML = "Sep";
            break;
        case 9: 
            document.getElementById("mm").innerHTML = "Oct";
            break;
        case 10:
            document.getElementById("mm").innerHTML = "Nov";
            break;
        case 11:
            document.getElementById("mm").innerHTML = "Dec";
    }
    document.getElementById("yy").innerHTML = yy
    
    switch(weekdays){
        case 0:
            document.getElementById("week").innerHTML = "Sun";
            break;
        case 1:
            document.getElementById("week").innerHTML = "Mon";
            break;
        case 2:
            document.getElementById("week").innerHTML = "Tue";
            break;
        case 3:
            document.getElementById("week").innerHTML = "Wed";
        break;
        case 4:
            document.getElementById("week").innerHTML = "Thu";
            break;
        case 5:
            document.getElementById("week").innerHTML = "Fri";
            break;
        case 6:
            document.getElementById("week").innerHTML = "Sat";
            break;
    }
}
setInterval(intervals, 1000);