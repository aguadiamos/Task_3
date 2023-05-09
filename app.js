
let d = new Date();

const day = d.getDay()
const month = d.getMonth()
const numDate = d.getDate()
const year = d.getFullYear()
const time = d.toLocaleTimeString()

const days = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
}

const months = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December"
}

let displayTime = document.getElementById("time").innerHTML =
    (`${time}`)

document.getElementById("date").innerHTML =
    (`${days[day]}, ${months[month]} ${numDate} ${year}`)

