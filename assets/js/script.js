/* Author: 

*/
let box = $(".box");


function animation() {
    box.animate({ width: "100%" }, 2000, function() {
        box.css({ "background-color": "#ff0", "right": "0" });
    });
    box.animate({ width: '200px' }, 2000, function() {
        box.css("background-color", "#f0f");
    });
    box.animate({ width: '100%' }, 2000, function() {
        box.css({ "background-color": "#ff0", "left": "0" });
    });
    box.animate({ width: '200px' }, 2000, function() {
        box.css("background-color", "#ff4500");
    });
}

$(document).ready(function() {
    box.click(function() {
        setInterval(animation, 200);
    });
});