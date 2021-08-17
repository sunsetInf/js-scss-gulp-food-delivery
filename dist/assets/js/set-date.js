//adds current dateTime to header
const weekArr = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday",
  },
  monthArr = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };
var currentDate =
  weekArr[new Date().getDay()] +
  ", " +
  new Date().getDate() +
  " " +
  monthArr[new Date().getMonth() + 1] +
  " " +
  new Date().getFullYear();
const headerTime = document.querySelector(".header__time");
headerTime.textContent = currentDate;
