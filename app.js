let runApp = function () {
    let d = new Date();

    let displayTime = document.getElementById("time")
    let displayDate = document.getElementById("date")

    const hour = d.getHours()
    const minute = d.getMinutes()
    const second = d.getSeconds()

    displayTime.textContent =
        (`${hour}:${minute}:${second}`)

    const day = d.getDay()
    const month = d.getMonth()
    const numDate = d.getDate()
    const year = d.getFullYear()

    displayDate.textContent =
        (`${day}, ${month} ${numDate} ${year}`)
}

function daySuffix(date) {
    if (date === 1 || date === 21 || date === 31) {
        console.log(date + "st")
    }
    else if (date === 2 || date === 22) {
        console.log(date + "nd")
    }
    else if (date === 3 || date === 23) {
        console.log(date + "rd")
    }
    else {
        console.log(date + "th")
    }

}

function daysOfTheWeek(day) {
    if (day === 0) {
        console.log('January')
    }
    else if (day === 1) {
        console.log('February')
    }
    else if (day === 2) {
        console.log('March')
    }
    else if (day === 3) {
        console.log('April')
    }
    else if (day === 4) {
        console.log('May')
    }
    else if (day === 5) {
        console.log('June')
    }
    else if (day === 6) {
        console.log('July')
    }
    else if (month === 7) {
        console.log('August')
    }
    else if (month === 8) {
        console.log('September')
    }
    else if (month === 9) {
        console.log('October')
    }
    else if (month === 10) {
        console.log('November')
    }
    else if (month === 11) {
        console.log('December')
    }
}

function prefixZero(time) {
    if (time < 10) {
        console.log("0" + time)
    }
    else {
        console.log("time")
    }
}

function standardTime(hour) {
    if (hour > 12) {
        console.log(hour - 12)
    }
    else {
        console.log(hour)
    }
}

runApp()
setInterval(runApp, 1000)