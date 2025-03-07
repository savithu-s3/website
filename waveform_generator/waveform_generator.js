let audioContext;
let oscillator;

var sine = document.getElementById("sine");
var triangle = document.getElementById("triangle");
var square = document.getElementById("square");
var sawtooth = document.getElementById("sawtooth");
var slider = document.getElementById("frequency_slider");
var ten_thousand = document.getElementById("ten_thousand");
var thousand = document.getElementById("thousand");
var hundred = document.getElementById("hundred");
var ten = document.getElementById("ten");
var unit = document.getElementById("unit");
var play_svg = document.getElementById("play_svg");
var stop_svg = document.getElementById("stop_svg");
var root = document.querySelector(":root");
var rootStyle = getComputedStyle(root);
var sweep_from = document.getElementById("sweep_from");
var sweep_to = document.getElementById("sweep_to");
var sweep_duration = document.getElementById("sweep_duration");
var toggle_button = document.querySelector(".toggle_button input");
var btn_cont = document.getElementById("btn_cont");
var sweep_div = document.getElementById("sweep_div");

var theme,color,waveform,currentValue,f_value,live_value_1,live_value_2,live_value_3,live_value_4,live_value_5,theme_cookie,color_cookie,sweep;
var active_mode = null;
var stat = false;
var playing = false;
var max_f = 20000;

pause_svg.classList.replace("controls_svg", "control_active");

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;SameSite=Lax";
    applyThemeAndColor();
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
    theme_cookie = getCookie("theme_cookie");
    color_cookie = getCookie("color_cookie");
    if (theme_cookie == "") {
        setCookie("theme_cookie", theme, 3650);
        theme = "dark";
    } else {
        theme = theme_cookie;
    }
    if (color_cookie == "") {
        setCookie("color_cookie", color, 3650);
        color = "yellow";
    } else {
        color = color_cookie;
    }

    applyThemeAndColor();
}


function applyThemeAndColor() {
    if (theme == "dark") {
        root.style.setProperty("--theme", "var(--theme-dark)");
        root.style.setProperty("--theme-slider", "var(--theme-dark-slider)");
        root.style.setProperty("--theme-text", "var(--theme-dark-text)");
        document.getElementById("theme_button").style.background = "#fafafa";
        document.getElementById("theme_button").style.border = "solid #fafafa";
        document.getElementById("theme_btn_ico").style.stroke = "black";
    } else if (theme == "light") {
        root.style.setProperty("--theme", "var(--theme-light)");
        root.style.setProperty("--theme-slider", "var(--theme-light-slider)");
        root.style.setProperty("--theme-text", "var(--theme-light-text)");
        document.getElementById("theme_button").style.background = "#202124";
        document.getElementById("theme_button").style.border = "solid #202124";
        document.getElementById("theme_btn_ico").style.stroke = "white";
    }

    // Apply color
    if (color=="red") {
        root.style.setProperty("--primary-color", "var(--red)");
        root.style.setProperty("--secondary-color", "var(--red-secondary)");
    }else if (color=="pink") {
        root.style.setProperty("--primary-color", "var(--pink)");
        root.style.setProperty("--secondary-color", "var(--pink-secondary)");
    }else if (color=="blue") {
        root.style.setProperty("--primary-color", "var(--blue)");
        root.style.setProperty("--secondary-color", "var(--blue-secondary)");
    }else if (color=="green") {
        root.style.setProperty("--primary-color", "var(--green)");
        root.style.setProperty("--secondary-color", "var(--green-secondary)");
    }else if (color=="yellow") {
        root.style.setProperty("--primary-color", "var(--yellow)");
        root.style.setProperty("--secondary-color", "var(--yellow-secondary)");
    }else if (color=="orange") {
        root.style.setProperty("--primary-color", "var(--orange)");
        root.style.setProperty("--secondary-color", "var(--orange-secondary)");
    }
}

// Make sure `checkCookie` runs when the page is loaded
document.addEventListener('DOMContentLoaded', function () {
    checkCookie(); // Check and apply theme and color when the page loads
});

//field to slider
function field_val_parse() {
    f_value = ten_thousand.value + thousand.value + hundred.value + ten.value + unit.value;
    f_value = parseInt(f_value);
    if (f_value > max_f) {
        alert("Frequency is greater than 20,000");
        slider_val_parse(max_f);
        slider.value = max_f;
    } else {
        slider.value = f_value;
    }
}

ten_thousand.addEventListener('click', function() {
    live_value_1 = ten_thousand.value;
    ten_thousand.value = null;
});

thousand.addEventListener('click', function() {
    live_value_2 = thousand.value;
    thousand.value = null;
});

hundred.addEventListener('click', function() {
    live_value_3 = hundred.value;
    hundred.value = null;
});

ten.addEventListener('click', function() {
    live_value_4 = ten.value;
    ten.value = null;
});

unit.addEventListener('click', function() {
    live_value_5 = unit.value;
    unit.value = null;
});


ten_thousand.addEventListener('blur', function() {
    ten_thousand.value = live_value_1;
});

thousand.addEventListener('blur', function() {
    thousand.value = live_value_2;
});

hundred.addEventListener('blur', function() {
    hundred.value = live_value_3;
});

ten.addEventListener('blur', function() {
    ten.value = live_value_4;
});

unit.addEventListener('blur', function() {
    unit.value = live_value_5;
});

function live_value() {
    live_value_1 = ten_thousand.value;
    live_value_2 = thousand.value;
    live_value_3 = hundred.value;
    live_value_4 = ten.value;
    live_value_5 = unit.value;
}

ten_thousand.addEventListener('input', function() {
    currentValue = Number(slider.value);
    field_val_parse();
    animateSlider(f_value);
    live_value();
});

thousand.addEventListener('input', function() {
    currentValue = Number(slider.value);
    field_val_parse();
    animateSlider(f_value);
    live_value();
});

hundred.addEventListener('input', function() {
    currentValue = Number(slider.value);
    field_val_parse();
    animateSlider(f_value);
    live_value();
});

ten.addEventListener('input', function() {
    currentValue = Number(slider.value);
    field_val_parse();
    animateSlider(f_value);
    live_value();
});

unit.addEventListener('input', function() {
    currentValue = Number(slider.value);
    field_val_parse();
    animateSlider(f_value);
    live_value();
});

function sweep_gen(waveform, from, to, duration) {
    btn_cont.style.pointerEvents = "none";
    stop();
    play_svg.classList.replace("controls_svg", "control_active");
    pause_svg.classList.replace("control_active", "controls_svg");
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (!oscillator) {
        oscillator = audioContext.createOscillator();
        oscillator.type = waveform;
    }
    oscillator.frequency.setValueAtTime(parseFloat(from), audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(parseFloat(to), audioContext.currentTime + parseFloat(duration));
    oscillator.connect(audioContext.destination);
    oscillator.start();
    playing = true;
    setTimeout(stop, duration*1000);
    setTimeout(function() {
        btn_cont.style.pointerEvents = "auto";
    }, duration*1000);
    
    console.log("Sweep - " + waveform + " from " + from + "Hz " + "to " + to + "Hz" + " for " + duration + "s");
}

function generate(waveform) {
    stop();
    play_svg.classList.replace("controls_svg", "control_active");
    pause_svg.classList.replace("control_active", "controls_svg");
    var frequency = slider.value;
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (!oscillator) {
        oscillator = audioContext.createOscillator();
        oscillator.type = waveform;
        oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
        oscillator.connect(audioContext.destination);
        oscillator.start();
        playing = true;
        console.log(waveform + " | " + frequency + " Hz");
    } else {
        oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);  
    }
}

function btn_clr() {
    sine.className = "mode_btn";
    square.className = "mode_btn";
    triangle.className = "mode_btn";
    sawtooth.className = "mode_btn";
}

function change_mode(button, id) {
    if (stat == false && active_mode == null) {
        active_mode = button;
        id.classList.replace("mode_btn", "mode_btn_active");
        stat = true;
        if (playing == true) {
            generate(active_mode);
        }
    } else if (stat == true && active_mode == button) {
        if (playing == true) {
            stop();
        }
        id.className = "mode_btn";
        active_mode = null;
        stat = false;
    } else if (stat == true && active_mode != button) {
        if (playing == true  && sweep!=true) {
            btn_clr();
            id.classList.replace("mode_btn", "mode_btn_active");
            active_mode = button;
            stat = true;
            generate(active_mode);
        } else if (playing==true && sweep==true) {
            btn_clr();
            id.classList.replace("mode_btn", "mode_btn_active");
            active_mode = button;
            stat = true;
            sweep_gen(active_mode, sweep_from.value, sweep_to.value, sweep_duration.value);
        } else {
            btn_clr();
            id.classList.replace("mode_btn", "mode_btn_active");
            active_mode = button;
            stat = true;
        }
    }
};

slider.addEventListener("input", ()=>{
    var frequency = slider.value;
    slider_val_parse(frequency);
    if (oscillator) {
        oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    }
});

function stop() {
    if (oscillator) {
        oscillator.stop();
        oscillator.disconnect();
        oscillator = null;
        playing = false;
        play_svg.classList.replace("control_active", "controls_svg");
        pause_svg.classList.replace("controls_svg", "control_active");
    }
};

document.getElementById("startButton").addEventListener("click", ()=>{
    stop();
    if (stat == false && active_mode == null) {
        alert("Select a waveform")
        playing = false;
    } else if (sweep==true) {
        var sweep_from_val = sweep_from.value;
        var sweep_to_val = sweep_to.value;
        var duration_val = sweep_duration.value;
        if (sweep_from_val=="" | sweep_to_val=="" | duration_val=="") {
            alert("Please fill all the input fields...!");
        } else {
            if (sweep_from_val>20000 | sweep_from_val==0 | sweep_to_val>20000 | sweep_to_val==0) {
                alert("Plase enter values from 1 - 20000 for frequency...!");
            } else if (duration_val==0 | duration_val>60) {
                alert("Duration must be from 1 to 60");
            } else {
                playing = true;
                sweep_gen(active_mode, sweep_from_val, sweep_to_val, duration_val);
                play_svg.classList.replace("controls_svg", "control_active");
                pause_svg.classList.replace("control_active", "controls_svg");
            }
        }
    } else {
        generate(active_mode);
        playing = true;
        play_svg.classList.replace("controls_svg", "control_active");
        pause_svg.classList.replace("control_active", "controls_svg");
    }
});

document.getElementById("stopButton").addEventListener("click", ()=>{
    if (playing == true) {
        btn_clr();
        active_mode = null;
        stat = false;
        stop();
        play_svg.classList.replace("control_active", "controls_svg");
        pause_svg.classList.replace("controls_svg", "control_active");
    } else {
        pause_svg.classList.value = "control_active";
    }
});

//slider to field
function slider_val_parse(s_value) {
    const _ten_thousand = Math.floor(s_value / 10000);
    const _thousand = Math.floor((s_value % 10000) / 1000);
    const _hundred = Math.floor((s_value % 1000) / 100);
    const _ten = Math.floor((s_value % 100) / 10);
    const _unit = s_value % 10;
    ten_thousand.value = _ten_thousand;
    thousand.value = _thousand;
    hundred.value = _hundred;
    ten.value = _ten;
    unit.value = _unit;
}

function animateSlider(targetValue) {
    var step = (targetValue - currentValue)/50;
    var startTime = performance.now();
    var duration = 500;

    function stepAnimation(currentTime) {
        var elapsedTime = currentTime - startTime;
        var progress = Math.min(elapsedTime/duration,1);
        var easeProgress = 1 - Math.pow(1 - progress, 3);
        var newValue = Math.round(currentValue + (targetValue - currentValue)*easeProgress);
        slider.value = newValue;
        if (progress<1) {
            requestAnimationFrame(stepAnimation);
        } else {
            slider.value = targetValue;
        }
    }
    requestAnimationFrame(stepAnimation);
}

document.getElementById("color_button").addEventListener('mouseover', function() {
    document.getElementById("color_pallete").style.visibility = "visible";
    document.getElementById("color_pallete").style.width = document.getElementById("color_pallete").scrollWidth + "px";
});

document.getElementById("color_button").addEventListener('mouseout', function() {
    document.getElementById("color_pallete").style.visibility = "hidden";
    document.getElementById("color_pallete").style.width = "2.5vh";
});

document.getElementById("color_pallete").addEventListener('mouseover', function() {
    document.getElementById("color_pallete").style.visibility = "visible";
    document.getElementById("color_pallete").style.width = document.getElementById("color_pallete").scrollWidth + "px";
});

document.getElementById("color_pallete").addEventListener('mouseout', function() {
    document.getElementById("color_pallete").style.visibility = "hidden";
    document.getElementById("color_pallete").style.width = "2.5vh";
});

document.getElementById("red_button").addEventListener('click', function() {
    root.style.setProperty("--primary-color","var(--red)");
    root.style.setProperty("--secondary-color","var(--red-secondary)")
    color="red";
    setCookie("color_cookie", color, 3650);
});

document.getElementById("pink_button").addEventListener('click', function() {
    root.style.setProperty("--primary-color","var(--pink)");
    root.style.setProperty("--secondary-color","var(--pink-secondary)")
    color="pink";
    setCookie("color_cookie", color, 3650);
});

document.getElementById("blue_button").addEventListener('click', function() {
    root.style.setProperty("--primary-color","var(--blue)");
    root.style.setProperty("--secondary-color","var(--blue-secondary)")
    color="blue";
    setCookie("color_cookie", color, 3650);
});

document.getElementById("green_button").addEventListener('click', function() {
    root.style.setProperty("--primary-color","var(--green)");
    root.style.setProperty("--secondary-color","var(--green-secondary)")
    color="green";
    setCookie("color_cookie", color, 3650);
});

document.getElementById("yellow_button").addEventListener('click', function() {
    root.style.setProperty("--primary-color","var(--yellow)");
    root.style.setProperty("--secondary-color","var(--yellow-secondary)")
    color="yellow";
    setCookie("color_cookie", color, 3650);
});

document.getElementById("orange_button").addEventListener('click', function() {
    root.style.setProperty("--primary-color","var(--orange)");
    root.style.setProperty("--secondary-color","var(--orange-secondary)")
    color="orange";
    setCookie("color_cookie", color, 3650);
});

document.getElementById("theme_button").addEventListener('click', function() {
    if (theme=="dark") {
        document.getElementById("theme_button").style.background = "#202124";
        document.getElementById("theme_button").style.border = "solid #202124";
        root.style.setProperty("--theme","var(--theme-light)");
        root.style.setProperty("--theme-slider","var(--theme-light-slider");
        root.style.setProperty("--theme-text","var(--theme-light-text)");
        document.getElementById("theme_btn_ico").style.stroke = "white";
        theme="light";
        setCookie("theme_cookie", theme, 3650);
    } else {
        document.getElementById("theme_button").style.background = "#fafafa";
        document.getElementById("theme_button").style.border = "solid #fafafa";
        root.style.setProperty("--theme","var(--theme-dark)");
        root.style.setProperty("--theme-slider","var(--theme-dark-slider");
        root.style.setProperty("--theme-text","var(--theme-dark-text)");
        document.getElementById("theme_btn_ico").style.stroke = "black";
        theme="dark";
        setCookie("theme_cookie", theme, 3650);
    }
});

toggle_button.addEventListener("change", function() {
    if (this.checked) {
        sweep = true;
        sweep_div.style.transition = "all .5s ease";
        sweep_div.style.visibility = "visible";
        sweep_div.style.overflow = "visible"
        // sweep_div.style.display = "flex";
        sweep_div.style.height = "100%";
        document.getElementById("slider_cont").style.visibility = "hidden";
        slider.style.visibility = "hidden";
        slider.style.height = "0%";
        slider.style.margin = "0";
        document.getElementById("slider_cont").style.height = "0%";
        document.getElementById("slider_cont").style.display = "none";
    } else {
        sweep = false;
        sweep_div.style.transition = "none";
        sweep_div.style.visibility = "hidden";
        sweep_div.style.overflow = "hidden"
        sweep_div.style.height = "0";
        document.getElementById("slider_cont").style.visibility = "visible";
        slider.style.visibility = "visible";
        document.getElementById("slider_cont").style.height = "100%";
        document.getElementById("slider_cont").style.display = "grid";
        slider.style.height = "15px";
        // sweep_div.style.display = "none";
        slider.style.margin = "4vh";
    }
});