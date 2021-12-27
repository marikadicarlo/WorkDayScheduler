var saveBtn = $(".saveBtn");

// Current day is displayed at the top of the calender
$("#currentDay").text(moment().format("dddd, MMM Do YYYY"));

// Each time block is color-coded to indicate whether it is in the past, present, or future
function timeColor() {
    var hour = moment().hours();

    $(".time-block").each(function() {
        var currentHour = parseInt($(this).attr("id"));

        if (currentHour > hour) {
            $(this).addClass("future");
        } else if (currentHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};

// WHEN I click the save button for that time block
saveBtn.on("click", function() {
    console.log("save button");
    var time = $(this).siblings(".hour").text();
    var task = $(this).siblings(".task").val();

// THEN the text for that event is saved in local storage
localStorage.setItem(time, task);
});

// WHEN I refresh the page THEN the saved events persist
function useTask() {

    $(".hour").each(function() {
        var currentHour = $(this).text();
        var currentTask = localStorage.getItem(currentHour);

        //console.log(this);
        //console.log(currentHour);

        if (currentTask !== null) {
            $(this).siblings(".task").val(currentTask);
        }
    });
}

timeColor();
useTask();