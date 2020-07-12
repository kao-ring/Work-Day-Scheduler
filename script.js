$(document).ready(function () {
  //Set a clock

  var currentDay = document.querySelector("#currentDay");
  var currentTime = new Date().getHours();

  //update time and colors
  timerInterval = setInterval(function () {
    currentDay.innerHTML = moment().format("MMMM Do YYYY, h:mm:ss a");
    colorChange();
  }, 1000);

  //Make rows and colums========================
  var row;
  var col1;
  var col2;
  var col3;

  for (let i = 9; i < 24; i++) {
    row = $(`<div class="row">`);
    // row = $(`<div class="row" id= ${i} >`);
    col1 = $(
      '<div class="col-md-2 p-0 hour-col"> <p class="hour">' +
        hourFormat(i) +
        "</p>"
    );
    col2 = $(
      `<div class="col-md-8"><textarea  class="description" id=col2${i}></textarea>`
    );
    col3 = $(
      `<div class="col-md-2" ><button class="saveBtn" id=${i}>Save <i class="fa fa-save"></i></button>`
    );

    row.append(col1);
    row.append(col2);
    row.append(col3);
    $(".container").append(row);

    getComment(i);
  }

  //Helper functions===========================
  function getComment(num) {
    var comment = localStorage.getItem(num);

    if (comment !== null) {
      // document.querySelector("#col2" + num).textContent = comment;
      $("#col2" + num).append(comment);
    }
  }

  function hourFormat(time) {
    if (time < 12) {
      return time + "am";
    } else if (time === 12) {
      return time + "pm";
    } else if (time > 12) {
      return time - 12 + "pm";
    }
  }

  function colorChange() {
    for (let i = 9; i < 24; i++) {
      var idCol2 = $(`#col2${i}`);
      if (i === currentTime) {
        idCol2.addClass("present");
      } else if (i > currentTime) {
        idCol2.addClass("future");
      } else if (i < currentTime) {
        idCol2.addClass("past");
      }
    }
  }

  //save input data

  var saveBtn = $(".saveBtn");
  var commentId;
  var commentText;

  saveBtn.on("click", function () {
    commentId = $(this).attr("id");
    commentText = $(this).parent().siblings().children(".description").val();
    console.log(commentId);
    console.log(commentText);
    localStorage.setItem(commentId, commentText);
  });
});
