//delay animation for logo
var logo = document.getElementById("logo-top");

logo.addEventListener("animationend", delay);

function delay(){
    var oldclass = logo.className;
    logo.className ="logo";
    setTimeout(function(){
        logo.className = oldclass;
    }, 2000);
}


//delay animation of check on form
var bar = document.getElementById("startCheck");

bar.addEventListener("animationend", wait)

function wait() {
    var oldclass = bar.className;
    bar.className = "fa fa-check-circle fa-fw";
    setTimeout(function() {
        bar.className = oldclass;
    }, 1500);
}

