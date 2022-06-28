document. addEventListener("contextmenu", function (e){ e. preventDefault(); }, false); // protection to get source code of my page 

window.onresize = function(event) {
    document.location.reload(true)
}
var href = window.location.href.split("/")
var html_location = href[href.length-1]

if (window.innerWidth >= 760 && html_location !== "index.html") {
    window.location - "index.html"
}
if (window.innerWidth < 760 && html_location !== "index2.html") {
    window.location - "index2.html"
}
