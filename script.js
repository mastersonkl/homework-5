
// THEN the current day is displayed at the top of the calendar
var currentDay = $("#currentDay")

currentDay.text(moment().format("dddd"))

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future

var colorUpdate = function () {
    var currentHour = moment().hours()
    $(".time-block").each(function () {
        var hourBlock = Number($(this).attr("id").split("-")[1])
        // compare if the hourBlock is < currentHour 
        if (hourBlock < currentHour) {
            // then .past 
            $(this).addClass("past")
        }
        if (hourBlock === currentHour) {
            $(this).addClass("present")
        }
        if (hourBlock > currentHour) {
            // then .past 
            $(this).addClass("future")
        }
    })
}
colorUpdate()
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock

// create an event listener that listens for a click on the save btn
// target the save btn with jquery, $(".saveBtn").click(function(){})
// get the text value from the text area (use $(this)) -> hint use .sibling(".description").val()
// hint, use .parent on $(this)
// save it to local storage

// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// on page load, read local storage
// if anythign exits
// use .val("example")

// THEN the saved events persist