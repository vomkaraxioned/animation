/* Author: 

*/
$(document).ready(function() {
    $(".box").click(function() {
        $(this).animate({
            width: '100%',
            right: '0',
            width: '200px',
        }, "slow");
    });
});