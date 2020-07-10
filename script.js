//Set a clock
var currentDay = document.querySelector("#currentDay");
var currentTime = new Date().getHours();

//update time and colors
timerInterval = setInterval(function () {
  currentDay.innerHTML = moment().format("MMMM Do YYYY, h:mm:ss a");
  colorChange();
}, 1000);

//Make rows and colums
var row;
var col1;
var col2;
var col3;

for (let i = 9; i < 24; i++) {
  row = $('<div class="row" id= ' + i + " >");
  col1 = $('<div class="col-sm-2"> <p class="hour">' + hourFormat(i) + "</p>");
  col2 = $(
    '<div class="col-sm-8"><textarea id=col2${i} class="description"></textarea>`'
  );
  col3 = $(
    '<div class="col-sm-2"><button class="saveBtn">Save <i class="fa fa-save"></i></button>'
  );

  row.append(col1);
  row.append(col2);
  row.append(col3);
  $(".container").append(row);
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
    var idCol2 = document.querySelector(`#col2${i}`);
    if (i === currentTime) {
      console.log(`${i}Yes! It's time to change color`);
      idCol2.addClass("present");
    } else if (i > currentTime) {
      console.log(`${i}それは未来だね。`);
      idCol2.addClass("future");
    } else if (i < currentTime) {
      console.log(`${i}それはpastだね。`);
      idCol2.addClass("past");
    }
  }
}

//save input data

//実験場＋＝＋＝＋＝＋＝＋＝＋＝＋＝＋＝＋＝＋＝＋＝＋＝＋＝＋＝＋＝＋＝＋
console.log("This is kiki testing");
