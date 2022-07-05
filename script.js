document. addEventListener("contextmenu", function (e){ e. preventDefault(); }, false); // protection to get source code of my page 

window.onresize = function(event) {
    document.location.reload(true)
}
var href = window.location.href.split("/")
var html_location = href[href.length-1]

if (window.innerWidth >= 640 && html_location !== "index.html") {
    window.location - "index.html"
}
if (window.innerWidth < 260 && html_location !== "index2.html") {
    window.location - "index2.html"
}

function myFunction() {
    document.getElementById('web').innerHTML = "Rated✅";
    setTimeout(pop, 2000);
    function pop() {
        alert("YOUR RATINGs Added SUCCESSFULLY✅\n\nHey User Thanks a lot for Rating my Web development Skills!\nI am so glad to get your Vote\nYour 1vote helps a lot to motivate me!\n\n~Keep Supporting!✨");
    }
    setInterval(() => {
    document.getElementById('web').innerHTML = "Rate Now!"; 
    }, 3000);

}
function tgbots() {
    document.getElementById('tgbots').innerHTML = "Rated✅";
    setTimeout(pop, 2000);
    function pop() {
        alert("YOUR RATINGs Added SUCCESSFULLY✅\n\nHey User Thanks a lot for Rating my Telegram Bots making Skills!\nI am so glad to get your Vote\nYour 1vote helps a lot to motivate me!\n\n~Keep Supporting!✨");
    }
    setInterval(() => {
    document.getElementById('tgbots').innerHTML = "Rate Now!"; 
    }, 3000);

}
function dataFuntion() {
    document.getElementById('datast').innerHTML = "Rated✅";
    setTimeout(pop, 2000);
    function pop() {
        alert("YOUR RATINGs Added SUCCESSFULLY✅\n\nHey User Thanks a lot for Rating my database handling Skills!\nI am so glad to get your Vote\nYour 1vote helps a lot to motivate me!\n\n~Keep Supporting!✨");
    }
    setInterval(() => {
    document.getElementById('datast').innerHTML = "Rate Now!"; 
    }, 3000);

}

function crying() {
    alert('Hello Friend!\n\nI want to Become a Full Stack Developer!\nI can make beautiful templates as Front-End Dev as well Handle there functionality in Back-End and i am learning apps development also!\n\n~Keep Supporting✨✨')
}

function sadness() {
   alert('Hello Friend!\n\nTelegram bots They are my startups..My Journey in coding/Programming also started from Telegram Bots! with python..\nI am always learning new things to be cappable of every mode of tech field!!\n\n~Keep Supporting✨✨')    
}
function fucku() {
    alert('Hello Friend!\n\nI am new in database handling so, I know it less but i am trying with my best to learn it😄\nI am learning database handeling to make some aweasome web applications!\n\n~Keep Supporting✨✨')
}


document. addEventListener("contextmenu", function (e){ e. preventDefault(); }, false); // protection to get source code of my page