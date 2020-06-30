function clock(){
    var hours = document.getElementById('hour');
    var minitues = document.getElementById('minitues');
    var seconds = document.getElementById('seconds');

    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();

    hours.innerHTML = h;
    minitues.innerHTML = m;
    seconds.innerHTML = s;
}

var interval = setInterval(clock,1000);
