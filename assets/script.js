var input = {};
var time = moment().hours();
var dayDisplay = document.querySelector('#currentDay');
var getDate = new Date();
dayDisplay.innerText = 'Today is ' + getDate;

var colorCode = function () {
    for (let i = 8; i <= 17; i++) {
        if (i < time) {
            $('#' + i).addClass('past');
        } else if (i === time) {
            $('#' + i).addClass('present');
        } else if (i > time) {
            $('#' + i).addClass('future');
        }
    }
};

$('.text-area').on('click', function () {
    var text = $(this)
        .text()
        .trim()
    var input = $('<textarea>')
        .val(text)
        .addClass('col-10');
    $(this).replaceWith(input);
    input.trigger('focus');
});

var storeLocal = function (event) {
    var time = $(event.target).parent()[0].id
    var text = $(event.target).siblings()[1].value
    localStorage.setItem(time, text);
}

$('.saveBtn').on('click', storeLocal);


var renderStorage = function () {
    for (let i = 8; i <= 17; i++) {
        localStorage.getItem(i)
        $("#" + i).children(".text-area")[0].value = localStorage.getItem(i);
    }
};

colorCode();
renderStorage();
console.log("hours is time: ", time);