var today = moment();
$("#current-day").text(today.format("MMM Do, YYYY"));

$('.saveBtn').on('click', function(event){
    var textContent = $(event.target).prev().val().trim();
    var timeOfday = $(this).parent().attr("id");

    localStorage.setItem(timeOfday,textContent);
})

var stored9 = localStorage.getItem('hour-9')
$('#9').val(stored9)

var stored10 = localStorage.getItem('hour-10')
$('#10').val(stored10)

var stored11 = localStorage.getItem('hour-11')
$('#11').val(stored11)

var stored12 = localStorage.getItem('hour-12')
$('#12').val(stored5)

var stored1 = localStorage.getItem('hour-1')
$('#1').val(stored1)

var stored2 = localStorage.getItem('hour-2')
$('#2').val(stored2)

var stored3 = localStorage.getItem('hour-3')
$('#3').val(stored3)

var stored4 = localStorage.getItem('hour-4')
$('#4').val(stored4)

var stored5 = localStorage.getItem('hour-5')
$('#5').val(stored5)
