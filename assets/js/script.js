/* Author: 

*/
let box = $(".box");


function animation() {
    box.animate({ width: "100%" }, "slow", function() {
        box.css("background-color", "#ff0");
    });
    box.animate({ left: '80%', width: '200px' }, "slow", function() {
        box.css("background-color", "#f0f");
    });
    box.animate({ left: '0', width: '100%' }, "slow", function() {
        box.css("background-color", "#0ff");
    });
    box.animate({ width: '200px' }, "slow", function() {
        box.css("background-color", "#ff4500");
    });
}

$(document).ready(function() {
    box.click(function() {
        setInterval(animation, 200);
    });
});