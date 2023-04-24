var traficLt1G = document.querySelector(".Traffic1 #green");
var traficLt1Y = document.querySelector(".Traffic1 #yellow");
var traficLt1R = document.querySelector(".Traffic1 #red");

var traficLt2G = document.querySelector(".Traffic2 #green");
var traficLt2Y = document.querySelector(".Traffic2 #yellow");
var traficLt2R = document.querySelector(".Traffic2 #red");

var traficLt3G = document.querySelector(".Traffic3 #green");
var traficLt3Y = document.querySelector(".Traffic3 #yellow");
var traficLt3R = document.querySelector(".Traffic3 #red");

var traficLt4G = document.querySelector(".Traffic4 #green");
var traficLt4Y = document.querySelector(".Traffic4 #yellow");
var traficLt4R = document.querySelector(".Traffic4 #red");



function trafficOne(){
    traficLt1G.style.opacity = "1";
    traficLt1G.style.background = "#03ff03";
    traficLt2R.style.opacity = "1";
    traficLt3R.style.opacity = "1";
    traficLt4R.style.opacity = "1";
    traficLt3Y.style.opacity = ".3";
    traficLt1R.style.opacity = ".3";


    function yellow(){
        traficLt1Y.style.opacity = "1";
        traficLt1G.style.opacity = ".5";
        traficLt4R.style.opacity = ".5";
    }
    //setInterval(yellow, 7000);
    setTimeout(yellow,7000);
    // setInterval(traficFour,10000);
    setTimeout(traficFour,10000);
}
function traficFour(){
traficLt1G.style.opacity = ".3";
traficLt4G.style.background = "#03ff03";
traficLt1Y.style.opacity = ".3";
traficLt1R.style.opacity = "1";
traficLt4G.style.opacity = "1";
function yellow1(){
        traficLt4Y.style.opacity = "1";
        traficLt4G.style.opacity = ".3";
        traficLt4R.style.opacity = ".3";
    }
    //setInterval(yellow1, 7000);
    setTimeout(yellow1, 7000);

    //setInterval(traficTwo,10000);
    setTimeout(traficTwo,10000);
}
function traficTwo(){
    traficLt4G.style.opacity = ".3";
traficLt2G.style.background = "#03ff03";
traficLt4Y.style.opacity = ".3";
traficLt4R.style.opacity = "1";
traficLt2G.style.opacity = "1";
traficLt2R.style.opacity = ".3";

function yellow2(){
        traficLt2Y.style.opacity = "1";
        traficLt2G.style.opacity = ".3";
    }
    setTimeout(yellow2, 7000);
    setTimeout(traficThree,10000)
}

function traficThree(){
    traficLt2G.style.opacity = ".3";
traficLt3G.style.background = "#03ff03";
traficLt2Y.style.opacity = ".3";
traficLt2R.style.opacity = "1";
traficLt3G.style.opacity = "1";
traficLt3R.style.opacity = ".3";

function yellow3(){
        traficLt3Y.style.opacity = "1";
        traficLt3G.style.opacity = ".3";
    }   
    setTimeout(yellow3, 7000);
    setTimeout(trafficOne, 10000)
}